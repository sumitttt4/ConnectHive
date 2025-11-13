"use client";

import { Button } from "@/components/ui/button";
import { MatchCard } from "@/components/match-card";
import Link from "next/link";

export function Hero() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Column: Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-semibold leading-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Meet the Right People on Twitter
            </h1>
            <p className="mt-6 text-lg text-slate-600">
              Daily matches by niche and follower tier. Stop drowning in connect
              threads.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="sm:w-auto" aria-label="Try demo version" asChild>
                <Link href="/demo">Try Demo</Link>
              </Button>
              <Button size="lg" variant="outline" className="sm:w-auto" aria-label="Join the waitlist" asChild>
                <Link href="/onboarding">Join Waitlist</Link>
              </Button>
            </div>
          </div>

          {/* Right Column: Preview Card */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md shadow-md">
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
    </section>
  );
}
