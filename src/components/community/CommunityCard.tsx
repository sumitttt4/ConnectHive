"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface CommunityCardProps {
  tier: number | string;
  niche: string;
  members: number;
  description: string;
  range?: string;
  isJoined?: boolean;
  onToggleJoin?: () => void;
  href?: string;
}

export function CommunityCard({
  tier,
  niche,
  members,
  description,
  range,
  isJoined = false,
  onToggleJoin,
  href
}: CommunityCardProps) {
  // Helper function to get tier ranges
  const getTierRange = (tierNum: number | string): string => {
    const tierNumber = typeof tierNum === 'string' ? parseInt(tierNum.replace('Tier ', '')) : tierNum;
    
    switch (tierNumber) {
      case 1:
        return '500K+';
      case 2:
        return '100K-500K';
      case 3:
        return '10K-100K';
      case 4:
        return '1K-10K';
      case 5:
        return '<1K';
      default:
        return '';
    }
  };

  // Format tier for display and color lookup
  const tierLabel = typeof tier === 'number' ? `Tier ${tier}` : tier;
  const displayRange = range || getTierRange(tier);

  const tierColors: Record<string, string> = {
    "Tier 1": "bg-purple-50 text-purple-600 border-purple-200",
    "Tier 2": "bg-blue-50 text-blue-600 border-blue-200",
    "Tier 3": "bg-green-50 text-green-600 border-green-200",
    "Tier 4": "bg-orange-50 text-orange-600 border-orange-200",
    "Tier 5": "bg-slate-50 text-slate-600 border-slate-200"
  };

  const content = (
    <Card className="h-full rounded-xl border border-slate-200 shadow-card-sm transition-all hover:-translate-y-1 hover:shadow-card-md sm:rounded-2xl">
      <CardContent className="p-4 sm:p-6">
        <div className="flex items-start justify-between gap-3 sm:gap-4">
          <div className={`inline-flex rounded-lg border px-2.5 py-1 text-xs font-semibold sm:px-3 sm:py-1.5 sm:text-sm ${tierColors[tierLabel] || tierColors["Tier 5"]}`}>
            {tierLabel}
          </div>
          {onToggleJoin && (
            <Button
              size="sm"
              variant={isJoined ? "outline" : "default"}
              onClick={(e) => {
                e.preventDefault();
                onToggleJoin();
              }}
              className="text-xs sm:text-sm"
            >
              {isJoined ? "Leave" : "Join"}
            </Button>
          )}
        </div>

        <h3 className="mt-3 text-lg font-semibold text-slate-900 sm:mt-4 sm:text-h3">{niche}</h3>
        <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{description}</p>

        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs sm:mt-4 sm:gap-4 sm:text-sm">
          <div className="flex items-center gap-1.5 text-slate-600 sm:gap-2">
            <Users className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
            <span>{members.toLocaleString()} members</span>
          </div>
          {displayRange && <div className="text-slate-500">• {displayRange}</div>}
        </div>
      </CardContent>
    </Card>
  );

  if (href) {
    return (
      <Link href={href} className="block">
        {content}
      </Link>
    );
  }

  return content;
}
