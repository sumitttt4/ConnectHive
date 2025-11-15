"use client";

import { useState } from "react";
import { Users } from "lucide-react";
import { CommunityCard } from "@/components/community/CommunityCard";
import { Button } from "@/components/ui/button";

// SEO metadata would go in a separate metadata export in Next.js 13+
// export const metadata = {
//   title: "Communities",
//   description: "Join niche-specific communities to connect with like-minded creators in your tier",
// };

// Mock community data
const COMMUNITIES = [
  // Tier 1: 500K+ followers
  {
    id: "1",
    tier: 1 as const,
    niche: "AI & Machine Learning",
    description: "Elite AI researchers, founders, and thought leaders shaping the future of artificial intelligence.",
    members: 234,
    isJoined: false,
  },
  {
    id: "2",
    tier: 1 as const,
    niche: "Venture Capital",
    description: "Top VCs, angel investors, and fund managers connecting with high-growth startups.",
    members: 189,
    isJoined: false,
  },
  {
    id: "3",
    tier: 1 as const,
    niche: "SaaS Founders",
    description: "Successful SaaS founders scaling to $10M+ ARR sharing insights and collaborating.",
    members: 312,
    isJoined: true,
  },
  // Tier 2: 100K-500K followers
  {
    id: "4",
    tier: 2 as const,
    niche: "Product Management",
    description: "Senior PMs from top tech companies discussing strategy, roadmaps, and best practices.",
    members: 567,
    isJoined: false,
  },
  {
    id: "5",
    tier: 2 as const,
    niche: "Developer Tools",
    description: "DevTool builders, open-source maintainers, and engineers improving developer experience.",
    members: 445,
    isJoined: true,
  },
  {
    id: "6",
    tier: 2 as const,
    niche: "Marketing & Growth",
    description: "Growth marketers, demand gen experts, and brand builders scaling companies.",
    members: 621,
    isJoined: false,
  },
  // Tier 3: 10K-100K followers
  {
    id: "7",
    tier: 3 as const,
    niche: "Web Development",
    description: "Frontend, backend, and fullstack developers building modern web applications.",
    members: 1234,
    isJoined: true,
  },
  {
    id: "8",
    tier: 3 as const,
    niche: "Content Creation",
    description: "Writers, video creators, and podcasters growing their audience and monetizing content.",
    members: 987,
    isJoined: false,
  },
  {
    id: "9",
    tier: 3 as const,
    niche: "UI/UX Design",
    description: "Product designers, UI specialists, and UX researchers crafting beautiful experiences.",
    members: 856,
    isJoined: false,
  },
  // Tier 4: 1K-10K followers
  {
    id: "10",
    tier: 4 as const,
    niche: "Indie Hackers",
    description: "Solo founders building profitable side projects and sharing their journey.",
    members: 2145,
    isJoined: false,
  },
  {
    id: "11",
    tier: 4 as const,
    niche: "Data Science",
    description: "Data analysts, ML engineers, and data scientists solving real-world problems.",
    members: 1532,
    isJoined: true,
  },
  {
    id: "12",
    tier: 4 as const,
    niche: "No-Code Builders",
    description: "Creators building apps and automations with Webflow, Airtable, Zapier, and more.",
    members: 1821,
    isJoined: false,
  },
  // Tier 5: <1K followers
  {
    id: "13",
    tier: 5 as const,
    niche: "Aspiring Founders",
    description: "New founders exploring ideas, validating concepts, and seeking their first users.",
    members: 3456,
    isJoined: false,
  },
  {
    id: "14",
    tier: 5 as const,
    niche: "Junior Developers",
    description: "Early-career developers learning, building projects, and breaking into tech.",
    members: 4123,
    isJoined: false,
  },
  {
    id: "15",
    tier: 5 as const,
    niche: "Digital Marketers",
    description: "Growing marketers learning SEO, paid ads, email marketing, and social media.",
    members: 2987,
    isJoined: false,
  },
];

type FilterTier = "all" | 1 | 2 | 3 | 4 | 5;

export default function CommunitiesPage() {
  const [selectedTier, setSelectedTier] = useState<FilterTier>("all");
  const [joinedCommunities, setJoinedCommunities] = useState<Set<string>>(
    new Set(COMMUNITIES.filter(c => c.isJoined).map(c => c.id))
  );

  const filteredCommunities = selectedTier === "all"
    ? COMMUNITIES
    : COMMUNITIES.filter(c => c.tier === selectedTier);

  const handleToggleJoin = (communityId: string) => {
    setJoinedCommunities(prev => {
      const newSet = new Set(prev);
      if (newSet.has(communityId)) {
        newSet.delete(communityId);
      } else {
        newSet.add(communityId);
      }
      return newSet;
    });
    // TODO: Call API endpoint POST /api/communities/:id/join
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-slate-200 bg-slate-50 py-8 px-4 sm:py-12 md:py-16">
        <div className="mx-auto max-w-7xl">
          <h1 className="text-[2rem] leading-tight font-semibold text-slate-900 sm:text-h2 md:text-display">
            Communities
          </h1>
          <p className="mt-3 text-sm text-slate-700 sm:mt-4 sm:text-base md:text-lg md:text-xl">
            Join niche-specific groups to connect with like-minded creators in your tier
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-600 sm:mt-6 sm:text-sm">
            <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>{COMMUNITIES.reduce((acc, c) => acc + c.members, 0).toLocaleString()} total members across {COMMUNITIES.length} communities</span>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="border-b border-slate-200 bg-white py-4 px-4 sm:py-6">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="text-xs font-medium text-slate-900 sm:text-sm">Filter by tier:</span>
            <div className="flex flex-wrap gap-1.5 sm:gap-2">
              <Button
                variant={selectedTier === "all" ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTier("all")}
              >
                All Tiers
              </Button>
              <Button
                variant={selectedTier === 1 ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTier(1)}
                className={selectedTier === 1 ? "bg-purple-600 hover:bg-purple-700" : ""}
              >
                Tier 1
              </Button>
              <Button
                variant={selectedTier === 2 ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTier(2)}
                className={selectedTier === 2 ? "bg-blue-600 hover:bg-blue-700" : ""}
              >
                Tier 2
              </Button>
              <Button
                variant={selectedTier === 3 ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTier(3)}
                className={selectedTier === 3 ? "bg-green-600 hover:bg-green-700" : ""}
              >
                Tier 3
              </Button>
              <Button
                variant={selectedTier === 4 ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTier(4)}
                className={selectedTier === 4 ? "bg-orange-600 hover:bg-orange-700" : ""}
              >
                Tier 4
              </Button>
              <Button
                variant={selectedTier === 5 ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTier(5)}
                className={selectedTier === 5 ? "bg-slate-600 hover:bg-slate-700" : ""}
              >
                Tier 5
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Communities Grid */}
      <section className="py-8 px-4 sm:py-12">
        <div className="mx-auto max-w-7xl">
          {filteredCommunities.length === 0 ? (
            <div className="py-12 text-center sm:py-16">
              <p className="text-sm text-slate-600 sm:text-base">No communities found for this tier.</p>
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {filteredCommunities.map(community => (
                <CommunityCard
                  key={community.id}
                  tier={community.tier}
                  niche={community.niche}
                  description={community.description}
                  members={community.members}
                  isJoined={joinedCommunities.has(community.id)}
                  onToggleJoin={() => handleToggleJoin(community.id)}
                  href={`/communities/${community.tier}/${encodeURIComponent(community.niche.toLowerCase().replace(/\s+/g, "-"))}`}
                />
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
