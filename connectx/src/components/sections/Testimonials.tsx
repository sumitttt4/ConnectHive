"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "ConnectX helped me find collaborators who actually get my work. No more random DMs.",
    name: "Marcus Jones",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/150?img=2",
    initials: "MJ"
  },
  {
    quote: "I've made 3 meaningful partnerships in my first month. This is how networking should work.",
    name: "Aisha Patel",
    role: "Startup Founder",
    avatar: "https://i.pravatar.cc/150?img=5",
    initials: "AP"
  },
  {
    quote: "Finally, a way to grow my network without drowning in connect threads. Game changer.",
    name: "Ryan Thompson",
    role: "Content Creator",
    avatar: "https://i.pravatar.cc/150?img=8",
    initials: "RT"
  }
];

export function Testimonials() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="text-center">
          <h2 className="text-h2 font-semibold text-slate-900">
            Loved by Creators
          </h2>
          <p className="mt-4 text-body-lg text-slate-600">
            See what our users have to say
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <Card className="h-full rounded-2xl border border-slate-200 shadow-card-sm">
                <CardContent className="p-5">
                  <p className="line-clamp-2 text-sm text-slate-700">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-4 flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={testimonial.avatar} />
                      <AvatarFallback className="bg-blue-50 text-xs text-blue-600">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-semibold text-slate-900">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
