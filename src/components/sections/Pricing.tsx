"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started",
    features: [
      "10 daily matches",
      "Basic filters (niche, tier)",
      "Unlimited connections"
    ],
    cta: "Get Started",
    href: "/onboarding",
    popular: false
  },
  {
    name: "Pro",
    price: "$19",
    description: "For serious networkers",
    features: [
      "30 daily matches",
      "Advanced filters (location, interests)",
      "Priority matching",
      "Analytics dashboard"
    ],
    cta: "Start Pro Trial",
    href: "/onboarding",
    popular: true
  }
];

export function Pricing() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-h2 font-semibold text-slate-900">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-body-lg text-slate-600">
            Start free, upgrade when you're ready
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:mx-auto lg:max-w-4xl">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className={`h-full rounded-2xl border shadow-card-sm transition-all hover:shadow-card-md ${plan.popular ? 'border-blue-600' : 'border-slate-200'}`}>
                <CardContent className="p-8">
                  {plan.popular && (
                    <div className="mb-4 flex items-center justify-between">
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
                        Popular
                      </span>
                    </div>
                  )}
                  <h3 className="text-2xl font-semibold text-slate-900">{plan.name}</h3>
                  <p className="mt-2 text-slate-600">{plan.description}</p>
                  <div className="mt-6">
                    <span className="text-4xl font-semibold text-slate-900">
                      {plan.price}
                    </span>
                    <span className="text-slate-600">/month</span>
                  </div>
                  <ul className="mt-8 space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-blue-600 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`mt-8 w-full transition-colors duration-150 ease-in-out ${
                      plan.popular 
                        ? 'bg-blue-600 text-white hover:bg-blue-700' 
                        : 'bg-white border border-slate-200 text-slate-700 hover:bg-slate-50'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                    asChild
                  >
                    <Link href={plan.href}>{plan.cta}</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
