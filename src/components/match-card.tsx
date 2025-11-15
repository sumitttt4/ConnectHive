import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Chip } from "@/components/chip";

interface MatchCardProps {
  id: string;
  name: string;
  handle: string;
  avatarUrl?: string;
  tier: string | number;
  niche: string;
  tags: string[];
  bio: string;
  onConnect?: (id: string) => void;
  onSkip?: (id: string) => void;
}

export function MatchCard({
  id,
  name,
  handle,
  avatarUrl,
  tier,
  niche,
  tags,
  bio,
  onConnect,
  onSkip,
}: MatchCardProps) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <Card className="rounded-xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md hover:border-slate-300 sm:rounded-2xl overflow-hidden group">
      <CardContent className="p-4 sm:p-6">
        {/* Top Row: Avatar, Name, Handle */}
        <div className="flex items-start gap-3 sm:gap-4">
          <Avatar className="h-14 w-14 transition-transform duration-300 group-hover:scale-105 sm:h-16 sm:w-16">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback className="bg-slate-100 text-slate-700 text-base font-bold sm:text-lg">
              {initials}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-slate-900 sm:text-h3">{name}</h3>
            <p className="text-sm text-slate-600 sm:text-body-lg">{handle}</p>
            {/* Tier Badge */}
            <div className="mt-1.5 sm:mt-2">
              <span className="inline-flex items-center rounded-full bg-sky-50 px-2.5 py-0.5 text-xs font-semibold text-sky-700 border border-sky-200 sm:px-3">
                {typeof tier === 'number' ? `Tier ${tier}` : tier}
              </span>
            </div>
          </div>
        </div>

        {/* Tags */}
        <div className="mt-3 flex flex-wrap gap-1.5 sm:gap-2">
          {tags.map((tag, index) => (
            <Chip key={index}>{tag}</Chip>
          ))}
        </div>

        {/* Bio */}
        <p className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-body-lg">{bio}</p>

        {/* CTA Row */}
        <div className="mt-4 flex justify-between gap-2 sm:gap-3">
          <Button
            variant="outline"
            size="sm"
            className="flex-1 text-sm border border-slate-300 hover:bg-slate-50 transition-all duration-200 sm:text-base"
            onClick={() => onSkip?.(id)}
            aria-label={`Skip ${name}`}
            tabIndex={0}
          >
            Skip
          </Button>
          <Button
            size="sm"
            className="flex-1 text-sm bg-sky-500 hover:bg-sky-600 text-white transition-all duration-200 sm:text-base"
            onClick={() => onConnect?.(id)}
            aria-label={`Connect with ${name}`}
            tabIndex={0}
          >
            Connect
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
