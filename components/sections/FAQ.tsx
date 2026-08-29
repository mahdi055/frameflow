'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { FAQS } from '@/lib/data'

export default function FAQ() {
  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 pointer-events-none">
        <div className="ambient-blob w-80 h-80 bottom-0 right-1/4 opacity-[0.06]"
          style={{ background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)' }} />
      </div>
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="inline-block px-3 py-1 rounded-full bg-violet-600/10 border border-violet-500/20 text-violet-300 text-xs font-medium mb-4 tracking-wide uppercase">
            FAQ
          </span>
          <h2 className="font-display text-4xl sm:text-[2.75rem] text-white leading-tight">
            Frequently asked{' '}
            <span className="gradient-text">questions</span>
          </h2>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-2">
            {FAQS.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-white/[0.07] rounded-xl px-5 bg-[#111118] data-[state=open]:border-violet-500/20"
              >
                <AccordionTrigger className="text-left text-[15px] text-white/80 hover:text-white py-4 font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-white/50 text-[14px] leading-relaxed pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        {/* Contact prompt */}
        <div className="mt-10">
          <p className="text-white/35 text-sm">
            Still have questions?{' '}
            <a href="/contact" className="text-violet-400 hover:text-violet-300 transition-colors">
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
