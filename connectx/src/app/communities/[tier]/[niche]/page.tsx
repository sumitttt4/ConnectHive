"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeft, Users, TrendingUp, Calendar, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { TierBadge } from "@/components/community/TierBadge";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Mock data - would come from API in production
const COMMUNITY_DATA: Record<string, {
  tier: 1 | 2 | 3 | 4 | 5;
  niche: string;
  description: string;
  longDescription: string;
  members: number;
  activeToday: number;
  avgMatchRate: number;
  topMembers: Array<{
    id: string;
    name: string;
    handle: string;
    avatar: string;
    followers: string;
  }>;
}> = {
  "1-ai-&-machine-learning": {
    tier: 1,
    niche: "AI & Machine Learning",
    description: "Elite AI researchers, founders, and thought leaders shaping the future of artificial intelligence.",
    longDescription: "This community brings together the brightest minds in AI, from researchers publishing groundbreaking papers to founders scaling AI-first companies. Share insights, collaborate on projects, and stay at the forefront of artificial intelligence innovation.",
    members: 234,
    activeToday: 89,
    avgMatchRate: 42,
    topMembers: [
      { id: "1", name: "Sarah Chen", handle: "@sarahchen", avatar: "https://i.pravatar.cc/150?img=1", followers: "850K" },
      { id: "2", name: "Marcus AI", handle: "@marcusai", avatar: "https://i.pravatar.cc/150?img=12", followers: "620K" },
      { id: "3", name: "Dr. Jane Wu", handle: "@drjanewu", avatar: "https://i.pravatar.cc/150?img=5", followers: "580K" },
    ],
  },
  "2-product-management": {
    tier: 2,
    niche: "Product Management",
    description: "Senior PMs from top tech companies discussing strategy, roadmaps, and best practices.",
    longDescription: "Connect with experienced product managers who are leading product strategy at scale. Share frameworks, discuss roadmap challenges, and learn from those who've shipped products used by millions.",
    members: 567,
    activeToday: 212,
    avgMatchRate: 38,
    topMembers: [
      { id: "4", name: "Alex Johnson", handle: "@alexjpm", avatar: "https://i.pravatar.cc/150?img=33", followers: "280K" },
      { id: "5", name: "Priya Patel", handle: "@priyaproduct", avatar: "https://i.pravatar.cc/150?img=20", followers: "245K" },
      { id: "6", name: "Tom Chen", handle: "@tompm", avatar: "https://i.pravatar.cc/150?img=14", followers: "190K" },
    ],
  },
  "3-web-development": {
    tier: 3,
    niche: "Web Development",
    description: "Frontend, backend, and fullstack developers building modern web applications.",
    longDescription: "A vibrant community of web developers sharing best practices, new frameworks, and solving complex technical challenges together. From React to Next.js, from APIs to databases.",
    members: 1234,
    activeToday: 456,
    avgMatchRate: 35,
    topMembers: [
      { id: "7", name: "Dev Mike", handle: "@devmike", avatar: "https://i.pravatar.cc/150?img=51", followers: "75K" },
      { id: "8", name: "Emma Code", handle: "@emmacode", avatar: "https://i.pravatar.cc/150?img=47", followers: "62K" },
      { id: "9", name: "JS Expert", handle: "@jsexpert", avatar: "https://i.pravatar.cc/150?img=68", followers: "48K" },
    ],
  },
};

type PageProps = {
  params: Promise<{ tier: string; niche: string }>;
};

export default function CommunityDetailPage({ params }: PageProps) {
  const router = useRouter();
  const { tier, niche } = use(params);
  const communityKey = `${tier}-${niche}`;
  const community = COMMUNITY_DATA[communityKey];

  // Fallback for communities not in mock data
  if (!community) {
    return (
      <main className="min-h-screen bg-white">
        <div className="mx-auto max-w-4xl px-4 py-24 text-center">
          <h1 className="text-h2 font-semibold text-slate-900">Community Not Found</h1>
          <p className="mt-4 text-slate-700">This community doesn't exist or is not yet available.</p>
          <Button
            className="mt-8"
            onClick={() => router.push("/communities")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Communities
          </Button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
      <section className="border-b border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <Button
            variant="ghost"
            size="sm"
            className="mb-6"
            onClick={() => router.push("/communities")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Communities
          </Button>

          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div className="flex-1">
              <div className="flex items-center gap-3">
                <h1 className="text-h2 font-semibold text-slate-900">
                  {community.niche}
                </h1>
                <TierBadge tier={community.tier} size="lg" />
              </div>
              <p className="mt-4 text-lg text-slate-700">
                {community.description}
              </p>
            </div>
            <Button size="lg" className="md:mt-0">
              Join Community
            </Button>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-5xl px-4">
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Users className="h-5 w-5 text-slate-600" />
              </div>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                {community.members.toLocaleString()}
              </p>
              <p className="text-sm text-slate-600">Members</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Calendar className="h-5 w-5 text-slate-600" />
              </div>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                {community.activeToday}
              </p>
              <p className="text-sm text-slate-600">Active Today</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-slate-600" />
              </div>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                {community.avgMatchRate}%
              </p>
              <p className="text-sm text-slate-600">Avg Match Rate</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center">
                <Shield className="h-5 w-5 text-slate-600" />
              </div>
              <p className="mt-2 text-2xl font-semibold text-slate-900">
                Verified
              </p>
              <p className="text-sm text-slate-600">Community</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-h3 font-semibold text-slate-900">About This Community</h2>
          <p className="mt-4 text-slate-700 leading-relaxed">
            {community.longDescription}
          </p>

          {/* Benefits */}
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <Card className="rounded-2xl border border-slate-200 shadow-card-sm">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">Quality Matches</h3>
                <p className="mt-2 text-sm text-slate-700">
                  Get matched with verified members in your exact niche and tier
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border border-slate-200 shadow-card-sm">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">Spam-Free</h3>
                <p className="mt-2 text-sm text-slate-700">
                  All members are vetted and share mutual goals
                </p>
              </CardContent>
            </Card>
            <Card className="rounded-2xl border border-slate-200 shadow-card-sm">
              <CardContent className="p-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">
                  <TrendingUp className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="mt-4 font-semibold text-slate-900">Real Growth</h3>
                <p className="mt-2 text-sm text-slate-700">
                  Build partnerships that lead to tangible opportunities
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Top Members */}
      <section className="border-t border-slate-200 bg-slate-50 py-12">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="text-h3 font-semibold text-slate-900">Top Members</h2>
          <p className="mt-2 text-slate-700">Connect with active community leaders</p>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {community.topMembers.map(member => (
              <Card key={member.id} className="rounded-2xl border border-slate-200 shadow-card-sm hover:shadow-card-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar className="h-14 w-14">
                      <AvatarImage src={member.avatar} />
                      <AvatarFallback className="bg-blue-50 text-blue-600">
                        {member.name.split(" ").map(n => n[0]).join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="font-semibold text-slate-900">{member.name}</p>
                      <p className="text-sm text-slate-600">{member.handle}</p>
                      <p className="mt-2 text-xs text-slate-500">{member.followers} followers</p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="mt-4 w-full">
                    View Profile
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-slate-200 bg-white py-16">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="text-h3 font-semibold text-slate-900">
            Ready to Join {community.niche}?
          </h2>
          <p className="mt-4 text-slate-700">
            Start getting matched with {community.members.toLocaleString()} members today
          </p>
          <Button size="lg" className="mt-8">
            Join Community
          </Button>
          <p className="mt-4 text-sm text-slate-600">
            Free to join • Cancel anytime
          </p>
        </div>
      </section>
    </main>
  );
}
