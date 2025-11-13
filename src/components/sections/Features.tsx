"use client";

import { motion } from "framer-motion";
import { Users, Shield, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Smart Matching",
    description: "Our algorithm pairs you with professionals in your niche and follower tier, ensuring relevant connections every time.",
    metric: "Get a steady 10–30% reply rate"
  },
  {
    icon: Shield,
    title: "No Spam",
    description: "Mutual opt-in only. No bots, no mass DMs, no engagement farming. Just real people looking to connect.",
    metric: "Cut vetting time from 30min → 3min"
  },
  {
    icon: TrendingUp,
    title: "Real Growth",
    description: "Build meaningful relationships that lead to collaborations, partnerships, and genuine engagement.",
    metric: "3x more engaged followers in 90 days"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export function Features() {
  return (
    <section className="relative py-12 px-4 sm:py-16 md:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <h2 className="text-[1.75rem] leading-tight font-bold text-slate-900 sm:text-h2">
            Why ConnectX Works
          </h2>
          <p className="mt-4 text-sm text-slate-600 sm:mt-6 sm:text-body-lg">
            Built for creators who value quality over quantity
          </p>
        </div>

        <motion.div
          className="mt-8 grid gap-4 sm:mt-12 sm:gap-6 md:grid-cols-3 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => {
            const colors = [
              { bg: 'bg-sky-50', icon: 'text-sky-600', border: 'hover:border-sky-200' },
              { bg: 'bg-teal-50', icon: 'text-teal-600', border: 'hover:border-teal-200' },
              { bg: 'bg-orange-50', icon: 'text-orange-600', border: 'hover:border-orange-200' },
            ];
            const color = colors[index];
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card className={`group h-full rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${color.border} sm:rounded-2xl`}>
                  <CardContent className="relative p-5 sm:p-6">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${color.bg} sm:h-14 sm:w-14`}>
                      <feature.icon className={`h-6 w-6 ${color.icon} sm:h-7 sm:w-7`} />
                    </div>
                    <h3 className="mt-4 text-lg font-bold text-slate-900 sm:mt-5 sm:text-h3">
                      {feature.title}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                      {feature.description}
                    </p>
                    <p className={`mt-3 text-xs font-semibold ${color.icon} sm:mt-4`}>
                      {feature.metric}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
