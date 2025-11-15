"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const tiers = [
  { 
    tier: "Tier 1", 
    range: "100K+ followers", 
    count: "1.2K members",
    color: "bg-purple-50 text-purple-600 border-purple-200"
  },
  { 
    tier: "Tier 2", 
    range: "50K–100K followers", 
    count: "2.8K members",
    color: "bg-blue-50 text-blue-600 border-blue-200"
  },
  { 
    tier: "Tier 3", 
    range: "10K–50K followers", 
    count: "5.4K members",
    color: "bg-green-50 text-green-600 border-green-200"
  },
  { 
    tier: "Tier 4", 
    range: "1K–10K followers", 
    count: "8.9K members",
    color: "bg-orange-50 text-orange-600 border-orange-200"
  }
];

export function CommunitiesPreview() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-h2 font-semibold text-slate-900">
            Join a Tier Community
          </h2>
          <p className="mt-4 text-body-lg text-slate-600">
            Connect with creators at your level. No mismatched expectations.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.tier}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full rounded-2xl border border-slate-200 shadow-card-sm transition-all hover:-translate-y-1 hover:shadow-card-md">
                <CardContent className="p-6">
                  <div className={`inline-flex rounded-lg border px-3 py-1.5 text-sm font-semibold ${tier.color}`}>
                    {tier.tier}
                  </div>
                  <p className="mt-3 text-sm font-medium text-slate-900">{tier.range}</p>
                  <div className="mt-4 flex items-center gap-2 text-sm text-slate-600">
                    <Users className="h-4 w-4" />
                    <span>{tier.count}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button size="lg" variant="outline" asChild>
            <Link href="/communities">
              Browse All Communities
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
