import { NextRequest, NextResponse } from "next/server";

// TODO: Replace with real database queries
// This is a placeholder API endpoint with mock data

// Mock match data
const MOCK_MATCHES = [
  {
    id: "1",
    name: "Sarah Chen",
    handle: "@sarahchen",
    followers: "850K",
    tier: 1,
    niche: "AI & Machine Learning",
    tags: ["AI", "ML", "Deep Learning"],
    bio: "Building the future of AI at Scale AI. Previously led ML at Google. PhD from Stanford. Always happy to chat about neural networks and AGI.",
    lookingFor: "Collaborating on AI research papers",
    recentTweet: "Just published our new paper on transformer optimization...",
    avatar: "https://i.pravatar.cc/150?img=1",
  },
  {
    id: "2",
    name: "Marcus AI",
    handle: "@marcusai",
    followers: "620K",
    tier: 1,
    niche: "AI & Machine Learning",
    tags: ["GPT", "LLMs", "NLP"],
    bio: "Founder @AIStartup. Building enterprise LLM tools. Ex-OpenAI. Tweeting about AI safety and alignment.",
    lookingFor: "Early customers for our AI platform",
    recentTweet: "The future of AI isn't about replacing humans...",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: "3",
    name: "Alex Johnson",
    handle: "@alexjpm",
    followers: "280K",
    tier: 2,
    niche: "Product Management",
    tags: ["Product", "Strategy", "B2B SaaS"],
    bio: "VP Product @TechCorp. 10 years shipping products that scale. Helping PMs level up through mentorship.",
    lookingFor: "Guest podcast opportunities",
    recentTweet: "The best product roadmaps are the ones you can...",
    avatar: "https://i.pravatar.cc/150?img=33",
  },
  {
    id: "4",
    name: "Priya Patel",
    handle: "@priyaproduct",
    followers: "245K",
    tier: 2,
    niche: "Product Management",
    tags: ["Product", "Growth", "Analytics"],
    bio: "Senior PM @FastGrowthCo. Data-driven product leader. Writing about product-led growth and retention strategies.",
    lookingFor: "Co-writing a product playbook",
    recentTweet: "Retention > Acquisition. Here's why...",
    avatar: "https://i.pravatar.cc/150?img=20",
  },
  {
    id: "5",
    name: "Dev Mike",
    handle: "@devmike",
    followers: "75K",
    tier: 3,
    niche: "Web Development",
    tags: ["React", "Next.js", "TypeScript"],
    bio: "Fullstack dev. Building in public. Teaching 50K+ developers through YouTube. Open source contributor.",
    lookingFor: "Dev tool beta testers",
    recentTweet: "Just shipped a new Next.js 14 tutorial...",
    avatar: "https://i.pravatar.cc/150?img=51",
  },
  {
    id: "6",
    name: "Emma Code",
    handle: "@emmacode",
    followers: "62K",
    tier: 3,
    niche: "Web Development",
    tags: ["Frontend", "CSS", "Design Systems"],
    bio: "Senior Frontend Engineer @StartupCo. Creating beautiful, accessible UIs. Design systems enthusiast.",
    lookingFor: "Speaking at web dev conferences",
    recentTweet: "Why every team needs a design system...",
    avatar: "https://i.pravatar.cc/150?img=47",
  },
  {
    id: "7",
    name: "Jake Builder",
    handle: "@jakebuilder",
    followers: "8.5K",
    tier: 4,
    niche: "Indie Hackers",
    tags: ["Indie", "SaaS", "MRR"],
    bio: "Building micro-SaaS products. $15K MRR across 3 apps. Sharing my journey from zero to profitable.",
    lookingFor: "Finding accountability partners",
    recentTweet: "Hit $15K MRR this month! Here's what worked...",
    avatar: "https://i.pravatar.cc/150?img=68",
  },
  {
    id: "8",
    name: "Lisa Growth",
    handle: "@lisagrowth",
    followers: "6.2K",
    tier: 4,
    niche: "Marketing & Growth",
    tags: ["SEO", "Content", "Growth"],
    bio: "Growth marketer helping B2B SaaS companies scale. Former head of growth @SaaSCo. SEO nerd.",
    lookingFor: "Consulting clients (B2B SaaS)",
    recentTweet: "The SEO strategy that 10x'd our organic traffic...",
    avatar: "https://i.pravatar.cc/150?img=25",
  },
  {
    id: "9",
    name: "Tom Junior",
    handle: "@tomjunior",
    followers: "850",
    tier: 5,
    niche: "Junior Developers",
    tags: ["Learning", "JavaScript", "WebDev"],
    bio: "Junior developer learning in public. Documenting my journey from bootcamp to first dev job. Let's grow together!",
    lookingFor: "Study buddies and mentors",
    recentTweet: "Today I learned about closures in JavaScript...",
    avatar: "https://i.pravatar.cc/150?img=15",
  },
  {
    id: "10",
    name: "Anna Aspiring",
    handle: "@annaaspiring",
    followers: "420",
    tier: 5,
    niche: "Aspiring Founders",
    tags: ["Ideas", "Validation", "MVP"],
    bio: "Aspiring founder exploring ideas. Currently validating a productivity tool. Looking for co-founders and early users.",
    lookingFor: "First 10 users for my MVP",
    recentTweet: "Interviewed 50 users this week. Here's what I learned...",
    avatar: "https://i.pravatar.cc/150?img=44",
  },
];

export async function GET(request: NextRequest) {
  // Parse query parameters
  const searchParams = request.nextUrl.searchParams;
  const tier = searchParams.get("tier");
  const niche = searchParams.get("niche");
  const limit = parseInt(searchParams.get("limit") || "10");

  // TODO: Replace with Prisma query
  // const matches = await prisma.match.findMany({
  //   where: {
  //     tier: tier ? parseInt(tier) : undefined,
  //     niche: niche || undefined,
  //   },
  //   take: limit,
  //   include: {
  //     user: true,
  //   },
  // });

  // Filter mock data based on query params
  let filteredMatches = [...MOCK_MATCHES];

  if (tier) {
    const tierNum = parseInt(tier);
    filteredMatches = filteredMatches.filter(m => m.tier === tierNum);
  }

  if (niche) {
    filteredMatches = filteredMatches.filter(m =>
      m.niche.toLowerCase().includes(niche.toLowerCase())
    );
  }

  // Limit results
  filteredMatches = filteredMatches.slice(0, limit);

  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 500));

  return NextResponse.json({
    matches: filteredMatches,
    total: filteredMatches.length,
    hasMore: MOCK_MATCHES.length > filteredMatches.length,
  });
}
