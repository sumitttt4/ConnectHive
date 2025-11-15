"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Users, 
  TrendingUp, 
  Calendar, 
  Target, 
  Award,
  ExternalLink,
  ChevronRight
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { TierBadge } from "@/components/community/TierBadge";

// Mock user data - TODO: Replace with real auth and database
const USER_DATA = {
  name: "Alex Thompson",
  handle: "@alexthompson",
  tier: 3 as const,
  followerCount: "42.5K",
  profileCompleteness: 85,
  stats: {
    totalMatches: 127,
    matchRate: 34,
    activeStreak: 12,
    connectionsThisWeek: 8,
  },
  topNiches: [
    { name: "Web Development", connections: 45 },
    { name: "UI/UX Design", connections: 32 },
    { name: "Product Management", connections: 28 },
  ],
  communities: [
    { id: "1", name: "Web Development", tier: 3, members: 1234 },
    { id: "2", name: "UI/UX Design", tier: 3, members: 856 },
    { id: "3", name: "Data Science", tier: 4, members: 1532 },
  ],
  recentActivity: [
    { id: "1", type: "match", name: "Sarah Chen", date: "2 hours ago" },
    { id: "2", type: "community_join", name: "Web Development", date: "1 day ago" },
    { id: "3", type: "match", name: "Marcus AI", date: "2 days ago" },
  ],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DashboardPage() {
  const [user] = useState(USER_DATA);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white py-8">
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <h1 className="text-h2 font-semibold text-slate-900">
                Welcome back, {user.name.split(" ")[0]}!
              </h1>
              <div className="mt-2 flex items-center gap-3">
                <p className="text-slate-600">{user.handle}</p>
                <TierBadge tier={user.tier} size="sm" />
                <span className="text-sm text-slate-600">•</span>
                <p className="text-sm text-slate-600">{user.followerCount} followers</p>
              </div>
            </div>
            <Button asChild>
              <Link href="/demo">
                View Today's Matches
                <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid gap-6 lg:grid-cols-3"
        >
          {/* Main Content - 2 columns */}
          <div className="space-y-6 lg:col-span-2">
            {/* Metrics Grid */}
            <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
              <Card className="rounded-2xl border border-slate-200 shadow-card-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Total Matches</p>
                      <p className="mt-2 text-3xl font-semibold text-slate-900">{user.stats.totalMatches}</p>
                    </div>
                    <div className="rounded-full bg-blue-50 p-3">
                      <Users className="h-5 w-5 text-blue-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-slate-200 shadow-card-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Match Rate</p>
                      <p className="mt-2 text-3xl font-semibold text-slate-900">{user.stats.matchRate}%</p>
                    </div>
                    <div className="rounded-full bg-green-50 p-3">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-slate-200 shadow-card-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">Active Streak</p>
                      <p className="mt-2 text-3xl font-semibold text-slate-900">{user.stats.activeStreak}</p>
                      <p className="text-xs text-slate-500">days</p>
                    </div>
                    <div className="rounded-full bg-orange-50 p-3">
                      <Calendar className="h-5 w-5 text-orange-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="rounded-2xl border border-slate-200 shadow-card-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-slate-600">This Week</p>
                      <p className="mt-2 text-3xl font-semibold text-slate-900">{user.stats.connectionsThisWeek}</p>
                      <p className="text-xs text-slate-500">connections</p>
                    </div>
                    <div className="rounded-full bg-purple-50 p-3">
                      <Award className="h-5 w-5 text-purple-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Profile Completeness */}
            <motion.div variants={itemVariants}>
              <Card className="rounded-2xl border border-slate-200 shadow-card-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-slate-900">Profile Completeness</h3>
                      <p className="mt-1 text-sm text-slate-600">
                        Complete your profile to get better matches
                      </p>
                    </div>
                    <div className="text-2xl font-semibold text-blue-600">{user.profileCompleteness}%</div>
                  </div>
                  <Progress value={user.profileCompleteness} className="mt-4 h-2" />
                  <div className="mt-4 flex items-center gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <Link href="/settings/profile">
                        Complete Profile
                        <ExternalLink className="ml-2 h-3 w-3" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Top Niches */}
            <motion.div variants={itemVariants}>
              <Card className="rounded-2xl border border-slate-200 shadow-card-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900">Top Niches</h3>
                    <Target className="h-5 w-5 text-slate-600" />
                  </div>
                  <div className="mt-6 space-y-4">
                    {user.topNiches.map((niche, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="font-medium text-slate-900">{niche.name}</p>
                          <Progress value={(niche.connections / user.stats.totalMatches) * 100} className="mt-2 h-1.5" />
                        </div>
                        <p className="ml-4 text-sm font-medium text-slate-600">{niche.connections}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Sidebar - 1 column */}
          <div className="space-y-6">
            {/* My Communities */}
            <motion.div variants={itemVariants}>
              <Card className="rounded-2xl border border-slate-200 shadow-card-sm">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900">My Communities</h3>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href="/communities">View All</Link>
                    </Button>
                  </div>
                  <div className="mt-6 space-y-4">
                    {user.communities.map(community => (
                      <Link
                        key={community.id}
                        href={`/communities/${community.tier}/${encodeURIComponent(community.name.toLowerCase().replace(/\s+/g, "-"))}`}
                        className="block rounded-xl border border-slate-200 bg-white p-4 transition-all hover:shadow-card-sm"
                      >
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <p className="font-medium text-slate-900">{community.name}</p>
                            <div className="mt-2 flex items-center gap-2">
                              <TierBadge tier={community.tier as 1 | 2 | 3 | 4 | 5} size="sm" />
                              <span className="text-xs text-slate-600">•</span>
                              <p className="text-xs text-slate-600">{community.members.toLocaleString()} members</p>
                            </div>
                          </div>
                          <ChevronRight className="h-4 w-4 text-slate-400" />
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Button variant="outline" className="mt-6 w-full" asChild>
                    <Link href="/communities">Explore More Communities</Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            {/* Recent Activity */}
            <motion.div variants={itemVariants}>
              <Card className="rounded-2xl border border-slate-200 shadow-card-sm">
                <CardContent className="p-6">
                  <h3 className="font-semibold text-slate-900">Recent Activity</h3>
                  <div className="mt-6 space-y-4">
                    {user.recentActivity.map(activity => (
                      <div key={activity.id} className="flex items-start gap-3">
                        <div className="flex-1">
                          <p className="text-sm text-slate-900">
                            {activity.type === "match" ? "Matched with" : "Joined"}{" "}
                            <span className="font-medium">{activity.name}</span>
                          </p>
                          <p className="mt-1 text-xs text-slate-500">{activity.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
