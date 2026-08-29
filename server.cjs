'use strict'

const http = require('http')
const net = require('net')
const zlib = require('zlib')
const { parse } = require('url')
const next = require('next')
const { html: beautify } = require('js-beautify')

const PORT = parseInt(process.env.PORT || '3002', 10)
const INTERNAL = PORT + 1 // 3003 internally

const SKIP = /^\/_next\/|^\/api\/|\.(js|css|png|jpg|jpeg|webp|gif|svg|ico|json|txt|xml|woff2?|map|mp4|webm|ttf|eot|otf)(\?|$)/i

const OPTS = {
  indent_size: 2,
  indent_char: ' ',
  max_preserve_newlines: 1,
  wrap_line_length: 0,
  extra_liners: ['head', 'body', '/html'],
  content_unformatted: ['pre', 'script', 'style', 'textarea'],
  inline: [],
}

function decompress(buf, encoding) {
  return new Promise((resolve, reject) => {
    if (encoding === 'br') {
      zlib.brotliDecompress(buf, (e, r) => e ? reject(e) : resolve(r))
    } else if (encoding === 'gzip') {
      zlib.gunzip(buf, (e, r) => e ? reject(e) : resolve(r))
    } else if (encoding === 'deflate') {
      zlib.inflate(buf, (e, r) => e ? reject(e) : resolve(r))
    } else {
      resolve(buf)
    }
  })
}

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev, port: INTERNAL, dir: __dirname })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  // Internal Next.js server
  const internal = http.createServer((req, res) => {
    handle(req, res, parse(req.url || '/', true))
  })
  internal.listen(INTERNAL, '127.0.0.1')

  function proxyRequest(req, res) {
    const url = req.url || '/'
    const isPageReq = !SKIP.test(url)

    // Strip compression for HTML pages so we can beautify the raw text
    const fwdHeaders = { ...req.headers, host: `localhost:${INTERNAL}` }
    if (isPageReq) {
      fwdHeaders['accept-encoding'] = 'identity'
    }

    const opts = {
      hostname: '127.0.0.1',
      port: INTERNAL,
      path: url,
      method: req.method,
      headers: fwdHeaders,
    }

    const proxyReq = http.request(opts, async (proxyRes) => {
      const ct = proxyRes.headers['content-type'] || ''
      const isHtml = isPageReq && ct.includes('text/html')

      if (!isHtml) {
        res.writeHead(proxyRes.statusCode, proxyRes.headers)
        proxyRes.pipe(res)
        return
      }

      const chunks = []
      proxyRes.on('data', (chunk) => chunks.push(chunk))
      proxyRes.on('end', async () => {
        try {
          const encoding = proxyRes.headers['content-encoding'] || ''
          let rawBuf = Buffer.concat(chunks)
          if (encoding) rawBuf = await decompress(rawBuf, encoding)

          const raw = rawBuf.toString('utf-8')
          const formatted = beautify(raw, OPTS)
          const outBuf = Buffer.from(formatted, 'utf-8')

          const headers = Object.assign({}, proxyRes.headers)
          delete headers['content-encoding']
          delete headers['content-length']
          delete headers['transfer-encoding']
          headers['content-length'] = String(outBuf.byteLength)

          res.writeHead(proxyRes.statusCode, headers)
          res.end(outBuf)
        } catch (e) {
          console.error('[proxy] beautify error:', e.message)
          if (!res.headersSent) {
            res.writeHead(500)
            res.end('Beautify error: ' + e.message)
          }
        }
      })

      proxyRes.on('error', (e) => console.error('[proxy] upstream error:', e.message))
    })

    proxyReq.on('error', (e) => {
      console.error('[proxy] request error:', e.message)
      if (!res.headersSent) {
        res.writeHead(502)
        res.end('Bad Gateway')
      }
    })

    req.pipe(proxyReq)
  }

  // Public proxy server on PORT
  const server = http.createServer(proxyRequest)

  // Forward WebSocket upgrades (Next.js HMR) to internal server
  server.on('upgrade', (req, socket, head) => {
    const conn = net.connect(INTERNAL, '127.0.0.1', () => {
      const headerLines = Object.entries(req.headers)
        .map(([k, v]) => `${k}: ${v}`)
        .join('\r\n')
      conn.write(`${req.method} ${req.url} HTTP/1.1\r\n${headerLines}\r\n\r\n`)
      if (head && head.length) conn.write(head)
      socket.pipe(conn)
      conn.pipe(socket)
    })
    conn.on('error', () => socket.destroy())
    socket.on('error', () => conn.destroy())
  })

  server.listen(PORT, () => {
    console.log(`\n> FrameFlow ready on http://localhost:${PORT} [HTML beautifier ON]\n`)
    console.log(`  Next.js internal: http://127.0.0.1:${INTERNAL}\n`)
  })
}).catch((err) => {
  console.error('Server failed to start:', err)
  process.exit(1)
})
