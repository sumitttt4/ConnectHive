"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: 1,
    title: "Create Your Profile",
    description: "Tell us your niche, follower count, and what you're looking for in connections."
  },
  {
    number: 2,
    title: "Get Daily Matches",
    description: "Receive curated profiles every day based on your preferences and activity."
  },
  {
    number: 3,
    title: "Connect & Grow",
    description: "Once both sides match, start the conversation and build real relationships."
  }
];

export function HowItWorks() {
  return (
    <section className="bg-slate-50 py-12 px-4 sm:py-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-[1.75rem] leading-tight font-semibold text-slate-900 sm:text-h2">
            How It Works
          </h2>
          <p className="mt-3 text-sm text-slate-600 sm:mt-4 sm:text-body-lg">
            Get matched in three simple steps
          </p>
        </div>

        <div className="mt-8 grid gap-6 sm:mt-12 md:grid-cols-3 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.5 }}
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-xl font-semibold text-white shadow-lg sm:h-16 sm:w-16 sm:text-2xl">
                {step.number}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 sm:mt-6 sm:text-xl">
                {step.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
