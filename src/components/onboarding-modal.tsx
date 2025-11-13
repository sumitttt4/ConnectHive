"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { TierBadge } from "@/components/community/TierBadge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const NICHES = [
  "AI & Machine Learning",
  "Product Management",
  "Web Development",
  "UI/UX Design",
  "Marketing & Growth",
  "Data Science",
  "Content Creation",
  "Developer Tools",
  "Indie Hackers",
  "SaaS Founders",
  "Venture Capital",
  "No-Code Builders",
];

const GOALS = [
  "Find collaborators for projects",
  "Grow my network strategically",
  "Learn from experienced professionals",
  "Find co-founders or partners",
  "Share knowledge and mentor others",
  "Discover new opportunities",
];

type OnboardingData = {
  name: string;
  handle: string;
  followers: number;
  tier: 1 | 2 | 3 | 4 | 5;
  niches: string[];
  goals: string[];
};

function getTierFromFollowers(followers: number): 1 | 2 | 3 | 4 | 5 {
  if (followers >= 500000) return 1;
  if (followers >= 100000) return 2;
  if (followers >= 10000) return 3;
  if (followers >= 1000) return 4;
  return 5;
}

function getTierRange(tier: 1 | 2 | 3 | 4 | 5): string {
  const ranges = {
    1: "500K+",
    2: "100K-500K",
    3: "10K-100K",
    4: "1K-10K",
    5: "<1K",
  };
  return ranges[tier];
}

interface OnboardingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onComplete?: (data: OnboardingData) => void;
}

export function OnboardingModal({ open, onOpenChange, onComplete }: OnboardingModalProps) {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<OnboardingData>({
    name: "",
    handle: "",
    followers: 5000,
    tier: 3,
    niches: [],
    goals: [],
  });

  const totalSteps = 4;

  const handleFollowersChange = (value: number) => {
    const tier = getTierFromFollowers(value);
    setData({ ...data, followers: value, tier });
  };

  const toggleNiche = (niche: string) => {
    setData(prev => ({
      ...prev,
      niches: prev.niches.includes(niche)
        ? prev.niches.filter(n => n !== niche)
        : [...prev.niches, niche],
    }));
  };

  const toggleGoal = (goal: string) => {
    setData(prev => ({
      ...prev,
      goals: prev.goals.includes(goal)
        ? prev.goals.filter(g => g !== goal)
        : [...prev.goals, goal],
    }));
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleComplete = () => {
    // TODO: Call API endpoint POST /api/onboarding with data
    console.log("Onboarding data:", data);
    onComplete?.(data);
    onOpenChange(false);
  };

  const canProceed = () => {
    if (step === 1) return data.name.trim() !== "" && data.handle.trim() !== "";
    if (step === 2) return true;
    if (step === 3) return data.niches.length > 0;
    if (step === 4) return data.goals.length > 0;
    return false;
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0">
        <DialogHeader className="border-b border-slate-200 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <DialogTitle className="text-h3 font-semibold text-slate-900">
                Welcome to ConnectX
              </DialogTitle>
              <p className="mt-1 text-sm text-slate-600">
                Step {step} of {totalSteps}
              </p>
            </div>
            <button
              onClick={() => onOpenChange(false)}
              className="rounded-full p-2 transition-colors hover:bg-slate-100"
              aria-label="Close onboarding"
            >
              <X className="h-5 w-5 text-slate-600" />
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="mt-6 h-1.5 w-full overflow-hidden rounded-full bg-slate-200">
            <motion.div
              className="h-full bg-blue-600"
              initial={{ width: "25%" }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </DialogHeader>

        <div className="px-8 py-8">
          <AnimatePresence mode="wait">
            {/* Step 1: Basic Info */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Let's get to know you
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Tell us your name and Twitter handle
                  </p>
                </div>

                <div className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="e.g., Alex Johnson"
                      value={data.name}
                      onChange={(e) => setData({ ...data, name: e.target.value })}
                      className="mt-2"
                      autoFocus
                    />
                  </div>

                  <div>
                    <Label htmlFor="handle">Twitter Handle</Label>
                    <Input
                      id="handle"
                      type="text"
                      placeholder="e.g., @alexjohnson"
                      value={data.handle}
                      onChange={(e) => setData({ ...data, handle: e.target.value })}
                      className="mt-2"
                    />
                    <p className="mt-2 text-xs text-slate-500">
                      We'll use this to verify your account
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 2: Follower Count */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    What's your follower count?
                  </h3>
                  <p className="mt-2 text-slate-600">
                    This helps us match you with creators in your tier
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <div className="flex items-center justify-between">
                      <Label>Follower Count</Label>
                      <span className="text-lg font-semibold text-blue-600">
                        {data.followers.toLocaleString()}
                      </span>
                    </div>
                    <input
                      type="range"
                      min="0"
                      max="1000000"
                      step="1000"
                      value={data.followers}
                      onChange={(e) => handleFollowersChange(parseInt(e.target.value))}
                      className="mt-4 h-2 w-full cursor-pointer appearance-none rounded-full bg-slate-200 [&::-webkit-slider-thumb]:h-5 [&::-webkit-slider-thumb]:w-5 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-blue-600"
                    />
                  </div>

                  <div className="rounded-2xl border-2 border-blue-200 bg-blue-50 p-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium text-blue-900">
                          You'll be placed in
                        </p>
                        <p className="mt-2 text-2xl font-semibold text-blue-900">
                          Tier {data.tier}
                        </p>
                        <p className="mt-1 text-sm text-blue-700">
                          {getTierRange(data.tier)} followers
                        </p>
                      </div>
                      <TierBadge tier={data.tier} size="lg" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Niches */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    What are your niches?
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Select all that apply (you can choose multiple)
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  {NICHES.map((niche) => {
                    const isSelected = data.niches.includes(niche);
                    return (
                      <button
                        key={niche}
                        onClick={() => toggleNiche(niche)}
                        className={`rounded-xl border-2 p-4 text-left transition-all ${
                          isSelected
                            ? "border-blue-600 bg-blue-50"
                            : "border-slate-200 bg-white hover:border-blue-200"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <span className={`text-sm font-medium ${
                            isSelected ? "text-blue-900" : "text-slate-900"
                          }`}>
                            {niche}
                          </span>
                          {isSelected && (
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                              <Check className="h-3 w-3 text-white" />
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {data.niches.length > 0 && (
                  <p className="text-sm text-slate-600">
                    {data.niches.length} niche{data.niches.length !== 1 ? "s" : ""} selected
                  </p>
                )}
              </motion.div>
            )}

            {/* Step 4: Goals */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    What are your goals?
                  </h3>
                  <p className="mt-2 text-slate-600">
                    Help us understand what you're looking for
                  </p>
                </div>

                <div className="space-y-3">
                  {GOALS.map((goal) => {
                    const isSelected = data.goals.includes(goal);
                    return (
                      <button
                        key={goal}
                        onClick={() => toggleGoal(goal)}
                        className={`w-full rounded-xl border-2 p-4 text-left transition-all ${
                          isSelected
                            ? "border-blue-600 bg-blue-50"
                            : "border-slate-200 bg-white hover:border-blue-200"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className={`text-sm font-medium ${
                            isSelected ? "text-blue-900" : "text-slate-900"
                          }`}>
                            {goal}
                          </span>
                          {isSelected && (
                            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600">
                              <Check className="h-3 w-3 text-white" />
                            </div>
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Confirmation Preview */}
                <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h4 className="font-semibold text-slate-900">Your Profile Summary</h4>
                  <div className="mt-4 space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Name:</span>
                      <span className="font-medium text-slate-900">{data.name}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Handle:</span>
                      <span className="font-medium text-slate-900">{data.handle}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Tier:</span>
                      <TierBadge tier={data.tier} size="sm" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Niches:</span>
                      <span className="font-medium text-slate-900">{data.niches.length}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-slate-600">Goals:</span>
                      <span className="font-medium text-slate-900">{data.goals.length}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Navigation */}
        <div className="flex items-center justify-between border-t border-slate-200 px-8 py-6">
          <Button
            variant="ghost"
            onClick={handleBack}
            disabled={step === 1}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back
          </Button>

          {step < totalSteps ? (
            <Button
              onClick={handleNext}
              disabled={!canProceed()}
            >
              Continue
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ) : (
            <Button
              onClick={handleComplete}
              disabled={!canProceed()}
            >
              Complete Setup
              <Check className="ml-2 h-4 w-4" />
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
