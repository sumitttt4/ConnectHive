"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MatchCard } from "@/components/match-card";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white py-12 px-4 sm:py-16 md:py-24 lg:py-32">
      {/* Subtle background decoration */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-teal-50 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      </div>
      
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Content */}
          <div className="flex animate-slide-up flex-col justify-center text-center lg:text-left">
            <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-4 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-700 text-sm font-medium w-fit mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-500"></span>
              </span>
              10K+ Active Users
            </div>
            <h1 className="text-[2rem] leading-[1.1] font-bold text-slate-900 sm:text-[2.5rem] md:text-display">
              Get 10 Meaningful Twitter Matches{' '}
              <span className="text-sky-500">Every Day</span>
            </h1>
            <p className="mt-4 text-base text-slate-600 sm:mt-6 sm:text-lg md:text-h3 md:max-w-[560px]">
              Curated matches by niche and follower tier — no spam, no noise.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button
                size="lg"
                className="w-full bg-sky-500 text-white hover:bg-sky-600 shadow-sm transition-all duration-200 sm:w-auto"
                aria-label="Try demo version"
                asChild
              >
                <Link href="/demo">
                  Try Demo — No Signup
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full border-2 border-slate-200 bg-white text-slate-700 hover:bg-slate-50 transition-all duration-200 sm:w-auto"
                aria-label="Join the waitlist"
                asChild
              >
                <Link href="/onboarding">Join Waitlist</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Preview Card */}
          <div className="mt-4 flex items-center justify-center md:mt-0 animate-scale-in">
            <div className="relative w-full max-w-[420px]">
              {/* Card */}
              <div className="relative shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
                <MatchCard
                  id="preview"
                  name="Sarah Chen"
                  handle="@sarahchen"
                  avatarUrl="https://i.pravatar.cc/150?img=1"
                  tier="Tier 1"
                  niche="AI & Machine Learning"
                  tags={["AI", "Python", "Research"]}
                  bio="ML engineer at Meta building recommendation systems. PhD in Computer Science. Passionate about ethical AI."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
