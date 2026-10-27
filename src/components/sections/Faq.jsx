"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Mail, Plus } from "lucide-react";
import { CONTACT_EMAIL } from "@/lib/config";
import { FAQS } from "@/lib/data";
import { cn } from "@/lib/utils";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section id="faq" className="relative py-24 sm:py-32">
      <div className="shell">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              eyebrow="Preguntas frecuentes"
              title={
                <>
                  Lo que suele
                  <br />
                  <span className="text-gradient">preguntarse.</span>
                </>
              }
              description="Si algo no queda claro, escríbenos. La idea es que pasar de la duda al partido tome menos que un mensaje de WhatsApp."
            />

            <Reveal delay={0.12} className="mt-8">
              <div className="rounded-2xl border border-line bg-white/[0.025] p-5">
                <span className="flex size-9 items-center justify-center rounded-xl bg-primary/10 text-primary">
                  <Mail className="size-4" />
                </span>
                <p className="mt-3 text-[0.84rem] font-semibold text-foreground">
                  ¿No encuentras tu respuesta?
                </p>
                <p className="mt-1 text-[0.72rem] leading-5 text-foreground-muted">
                  Escríbenos y te ayudamos con la cuenta, tu cancha o el pase.
                </p>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="group mt-4 inline-flex items-center gap-1.5 text-[0.72rem] font-semibold text-primary"
                >
                  {CONTACT_EMAIL}
                  <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              </div>
            </Reveal>
          </div>

          <div className="border-t border-line">
            {FAQS.map((faq, index) => {
              const isOpen = open === index;
              return (
                <div key={faq.question} className="border-b border-line">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    id={`faq-button-${index}`}
                    className="group flex w-full items-start justify-between gap-5 py-5 text-left"
                  >
                    <span className="flex items-start gap-4">
                      <span
                        className={cn(
                          "mt-0.5 font-mono text-[0.58rem] transition-colors",
                          isOpen ? "text-primary" : "text-foreground-muted/65"
                        )}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span
                        className={cn(
                          "max-w-2xl text-[0.95rem] font-medium leading-6 transition-colors sm:text-[1rem]",
                          isOpen ? "text-foreground" : "text-foreground/80 group-hover:text-foreground"
                        )}
                      >
                        {faq.question}
                      </span>
                    </span>
                    <span
                      className={cn(
                        "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full border transition-all duration-300",
                        isOpen
                          ? "rotate-45 border-primary/40 bg-primary text-primary-foreground"
                          : "border-line bg-white/[0.03] text-foreground-muted group-hover:border-line-strong"
                      )}
                    >
                      <Plus className="size-3.5" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${index}`}
                        role="region"
                        aria-labelledby={`faq-button-${index}`}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pretty max-w-2xl pb-6 pl-[2.15rem] pr-8 text-[0.84rem] leading-6 text-foreground-muted sm:text-[0.88rem] sm:leading-7">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
