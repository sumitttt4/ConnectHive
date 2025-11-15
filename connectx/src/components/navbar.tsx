"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const TOP_NICHES = [
  { name: "AI & Machine Learning", slug: "ai-&-machine-learning" },
  { name: "Product Management", slug: "product-management" },
  { name: "Web Development", slug: "web-development" },
  { name: "UI/UX Design", slug: "ui-ux-design" },
  { name: "Marketing & Growth", slug: "marketing-&-growth" },
  { name: "SaaS Founders", slug: "saas-founders" },
];

export function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav 
      className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="mx-auto max-w-7xl px-4">
        <div className="flex h-14 items-center justify-between sm:h-16">
          {/* Logo */}
          <Link 
            href="/" 
            className="flex items-center transition-opacity hover:opacity-80"
            aria-label="ConnectX Home"
          >
            <span className="text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
              ConnectX
            </span>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-600 hover:bg-slate-100 md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-4 md:flex lg:gap-6">
            <DropdownMenu open={dropdownOpen} onOpenChange={setDropdownOpen}>
              <DropdownMenuTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm"
                  className="gap-1"
                  aria-label="Communities menu"
                  aria-expanded={dropdownOpen}
                >
                  Communities
                  <ChevronDown className={`h-4 w-4 transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-56">
                <DropdownMenuItem asChild>
                  <Link href="/communities" className="w-full cursor-pointer">
                    <span className="font-medium">All Communities</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <div className="px-2 py-1.5">
                  <p className="text-xs font-medium text-slate-500">Top Niches</p>
                </div>
                {TOP_NICHES.map((niche) => (
                  <DropdownMenuItem key={niche.slug} asChild>
                    <Link 
                      href={`/communities?niche=${niche.slug}`}
                      className="w-full cursor-pointer"
                    >
                      {niche.name}
                    </Link>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>

            <Button variant="ghost" size="sm" asChild>
              <Link href="/dashboard">Dashboard</Link>
            </Button>

            <Button 
              variant="ghost" 
              size="sm" 
              aria-label="Try demo version"
              asChild
            >
              <Link href="/demo">Try Demo</Link>
            </Button>
            <Button
              size="lg"
              className="w-full bg-sky-500 text-white hover:bg-sky-600 sm:w-auto"
              aria-label="Sign up for ConnectX"
              asChild
            >
              <Link href="/onboarding">Sign Up</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="border-t border-slate-200 py-4 md:hidden">
            <div className="flex flex-col gap-2">
              <Link
                href="/communities"
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Communities
              </Link>
              <Link
                href="/dashboard"
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
              <Link
                href="/demo"
                className="rounded-lg px-4 py-3 text-sm font-medium text-slate-900 hover:bg-slate-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                Try Demo
              </Link>
              <div className="mt-2 px-4">
                <Button className="w-full" asChild>
                  <Link href="/onboarding" onClick={() => setMobileMenuOpen(false)}>
                    Sign Up
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
