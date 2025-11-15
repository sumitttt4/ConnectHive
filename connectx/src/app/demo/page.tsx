"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Users, Calendar } from "lucide-react";
import { Section } from "@/components/section";
import { PageHeading } from "@/components/page-heading";
import { MatchCard } from "@/components/match-card";
import { MatchSuccess } from "@/components/match-success";
import { Button } from "@/components/ui/button";

// TODO: Move to API call
type Match = {
  id: string;
  name: string;
  handle: string;
  followers: string;
  tier: number;
  niche: string;
  tags: string[];
  bio: string;
  lookingFor: string;
  recentTweet: string;
  avatar: string;
};

export default function DemoPage() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showSuccessDialog, setShowSuccessDialog] = useState(false);
  const [matchedProfile, setMatchedProfile] = useState<{
    name: string;
    handle: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    todayMatches: 0,
    connected: 0,
    skipped: 0,
  });

  // Fetch matches from API
  useEffect(() => {
    async function fetchMatches() {
      setLoading(true);
      try {
        // TODO: Add tier/niche query params based on user profile
        const response = await fetch("/api/matches?limit=10");
        const data = await response.json();
        setMatches(data.matches);
        setStats(prev => ({ ...prev, todayMatches: data.total }));
      } catch (error) {
        console.error("Failed to fetch matches:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchMatches();
  }, []);

  const currentProfile = matches[currentIndex];
  const hasNext = currentIndex < matches.length - 1;
  const hasPrevious = currentIndex > 0;

  const handleConnect = (id: string) => {
    // TODO: Call API endpoint POST /api/matches/:id/respond with action: "connect"
    console.log("Connect with:", id);
    const profile = matches.find((p) => p.id === id);
    if (profile) {
      setMatchedProfile({ name: profile.name, handle: profile.handle });
      setShowSuccessDialog(true);
      setStats(prev => ({ ...prev, connected: prev.connected + 1 }));
    }
  };

  const handleSkip = () => {
    // TODO: Call API endpoint POST /api/matches/:id/respond with action: "skip"
    setStats(prev => ({ ...prev, skipped: prev.skipped + 1 }));
    if (hasNext) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    if (hasNext) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (hasPrevious) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  if (loading) {
    return (
      <Section className="py-16">
        <div className="mx-auto max-w-2xl text-center">
          <div className="flex h-64 items-center justify-center">
            <div className="h-12 w-12 animate-spin rounded-full border-4 border-slate-200 border-t-blue-600"></div>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section className="py-8 px-4 sm:py-12 md:py-16">
      <PageHeading
        title="Today's Matches"
        subtitle="Discover professionals that align with your interests and goals"
      />

      {/* Analytics Bar */}
      <div className="mx-auto mt-6 max-w-2xl sm:mt-8">
        <div className="grid grid-cols-3 gap-3 rounded-xl border border-slate-200 bg-white p-4 shadow-card-sm sm:gap-4 sm:rounded-2xl sm:p-6">
          <div className="text-center">
            <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-2">
              <Calendar className="h-4 w-4 text-slate-600" />
              <p className="text-xs font-medium text-slate-600 sm:text-sm">Today</p>
            </div>
            <p className="mt-1 text-xl font-semibold text-slate-900 sm:mt-2 sm:text-2xl">{stats.todayMatches}</p>
          </div>
          <div className="text-center border-x border-slate-200">
            <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-2">
              <Users className="h-4 w-4 text-green-600" />
              <p className="text-xs font-medium text-green-600 sm:text-sm">Connected</p>
            </div>
            <p className="mt-1 text-xl font-semibold text-green-600 sm:mt-2 sm:text-2xl">{stats.connected}</p>
          </div>
          <div className="text-center">
            <div className="flex flex-col items-center gap-1 sm:flex-row sm:justify-center sm:gap-2">
              <TrendingUp className="h-4 w-4 text-slate-600" />
              <p className="text-xs font-medium text-slate-600 sm:text-sm">Skipped</p>
            </div>
            <p className="mt-1 text-xl font-semibold text-slate-900 sm:mt-2 sm:text-2xl">{stats.skipped}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 sm:mt-8">
        <AnimatePresence mode="wait">
          {currentProfile && (
            <motion.div
              key={currentProfile.id}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="mx-auto max-w-2xl"
            >
              <MatchCard
                id={currentProfile.id}
                name={currentProfile.name}
                handle={currentProfile.handle}
                avatarUrl={currentProfile.avatar}
                tier={currentProfile.tier}
                niche={currentProfile.niche}
                tags={currentProfile.tags}
                bio={currentProfile.bio}
                onConnect={handleConnect}
                onSkip={handleSkip}
              />

              {/* Navigation Controls */}
              <div className="mt-4 flex items-center justify-between sm:mt-6">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handlePrevious}
                  disabled={!hasPrevious}
                  aria-label="View previous match"
                  tabIndex={0}
                  className="text-xs sm:text-sm"
                >
                  Previous
                </Button>
                <p className="text-xs text-slate-700 sm:text-sm">
                  {currentIndex + 1} of {matches.length}
                </p>
                <Button
                  size="sm"
                  onClick={handleNext}
                  disabled={!hasNext}
                  aria-label="View next match"
                  tabIndex={0}
                  className="text-xs sm:text-sm"
                >
                  Next
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {!currentProfile && !loading && matches.length === 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="mx-auto max-w-2xl rounded-xl border border-slate-200 bg-white p-8 text-center shadow-sm sm:p-12"
          >
            <p className="text-base font-semibold text-slate-900 sm:text-lg">
              No more matches for today!
            </p>
            <p className="mt-2 text-xs text-slate-700 sm:text-sm">
              Check back tomorrow for new connections, or adjust your filters.
            </p>
            <div className="mt-4 flex flex-col gap-2 sm:mt-6 sm:flex-row sm:justify-center sm:gap-3">
              <Button onClick={() => setCurrentIndex(0)} aria-label="Start over from first match" tabIndex={0} className="w-full sm:w-auto">
                Start Over
              </Button>
              <Button variant="outline" onClick={() => window.location.reload()} aria-label="Refresh matches" tabIndex={0} className="w-full sm:w-auto">
                Refresh Matches
              </Button>
            </div>
          </motion.div>
        )}
      </div>

      {/* Match Success Dialog */}
      {matchedProfile && (
        <MatchSuccess
          open={showSuccessDialog}
          onOpenChange={setShowSuccessDialog}
          name={matchedProfile.name}
          handle={matchedProfile.handle}
        />
      )}
    </Section>
  );
}
