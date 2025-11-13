"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StickyCTA } from "@/components/sticky-cta";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CommunitiesPreview } from "@/components/sections/CommunitiesPreview";
import { Pricing } from "@/components/sections/Pricing";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <main className="bg-white" role="main">
      <StickyCTA />
      
      <Hero />

      {/* Trusted By Section */}
      <section className="border-y border-slate-200 bg-slate-50 py-8 px-4 sm:py-12">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <p className="text-center text-xs font-medium text-slate-700 sm:text-sm">
              Trusted by early creators on Product Hunt, Indie Hackers, and
              Twitter
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 md:gap-12">
              {/* Logo placeholders */}
              <div className="flex items-center gap-2 text-slate-600">
                <div className="flex h-7 w-7 items-center justify-center rounded bg-slate-200 text-xs font-bold sm:h-8 sm:w-8">
                  PH
                </div>
                <span className="text-xs font-medium sm:text-sm">Product Hunt</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <div className="flex h-7 w-7 items-center justify-center rounded bg-slate-200 text-xs font-bold sm:h-8 sm:w-8">
                  IH
                </div>
                <span className="text-xs font-medium sm:text-sm">Indie Hackers</span>
              </div>
              <div className="flex items-center gap-2 text-slate-600">
                <div className="flex h-7 w-7 items-center justify-center rounded bg-slate-200 text-xs font-bold sm:h-8 sm:w-8">
                  𝕏
                </div>
                <span className="text-xs font-medium sm:text-sm">Twitter/X</span>
              </div>
            </div>
            <p className="text-xs font-medium text-blue-600">
              Beta testers: 120+ creators
            </p>
          </div>
        </div>
      </section>

      <Features />
      
      <HowItWorks />
      
      <CommunitiesPreview />
      
      <Pricing />
      
      <Testimonials />

      {/* Final CTA Section */}
      <section className="bg-slate-900 py-12 px-4 sm:py-16 md:py-24" aria-label="Final call to action">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-[1.75rem] leading-tight font-semibold text-white sm:text-h2 sm:text-4xl lg:text-5xl">
            Start Meeting the Right People
          </h2>
          <p className="mt-4 text-sm text-slate-300 sm:mt-6 sm:text-lg">
            Join thousands of creators building meaningful connections on
            Twitter
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:justify-center sm:gap-4">
            <Button
              size="lg"
              className="w-full bg-white text-slate-900 shadow-sm transition-colors duration-150 ease-in-out hover:bg-slate-100 sm:w-auto"
              aria-label="Try demo version without signup"
              asChild
            >
              <Link href="/demo">
                Try Demo — No Signup <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="w-full border-slate-600 bg-transparent text-white transition-colors duration-150 ease-in-out hover:bg-slate-800 sm:w-auto"
              aria-label="Join the waitlist for early access"
              asChild
            >
              <Link href="/onboarding">Join Waitlist</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white py-8 px-4 sm:py-12" role="contentinfo">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col gap-6 sm:gap-8">
            {/* Trust & Contact */}
            <div className="flex flex-col items-center gap-3 border-b border-slate-200 pb-6 text-center sm:gap-4 sm:pb-8">
              <p className="text-xs text-slate-700 sm:text-sm">
                We don't store your DMs; you control connections.
              </p>
              <div className="flex flex-col gap-2 text-xs text-slate-600 sm:flex-row sm:gap-6 sm:text-sm">
                <a
                  href="mailto:connectx@example.com"
                  className="transition-colors hover:text-slate-900"
                  aria-label="Email ConnectX support"
                >
                  Contact: connectx@example.com
                </a>
                <a
                  href="https://twitter.com/connectx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-slate-900"
                  aria-label="Follow ConnectX on Twitter"
                >
                  Twitter: @connectx
                </a>
              </div>
            </div>

            {/* Main Footer */}
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
                <span className="text-xl font-semibold text-slate-900" aria-label="ConnectX logo">
                  ConnectX
                </span>
                <nav className="flex gap-6" aria-label="Footer navigation">
                  <Link
                    href="/demo"
                    className="text-sm font-medium text-blue-600 transition-colors hover:text-blue-700"
                  >
                    Try Demo
                  </Link>
                  <Link
                    href="/about"
                    className="text-sm text-slate-700 transition-colors hover:text-slate-900"
                  >
                    About
                  </Link>
                  <Link
                    href="/terms"
                    className="text-sm text-slate-700 transition-colors hover:text-slate-900"
                  >
                    Terms
                  </Link>
                  <Link
                    href="/privacy"
                    className="text-sm text-slate-700 transition-colors hover:text-slate-900"
                  >
                    Privacy
                  </Link>
                </nav>
              </div>
              <p className="text-sm text-slate-600">
                © 2025 ConnectX. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}

