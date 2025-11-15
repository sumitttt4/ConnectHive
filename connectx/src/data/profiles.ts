export interface Profile {
  id: string;
  name: string;
  handle: string;
  avatarUrl: string;
  tier: string;
  niche: string;
  tags: string[];
  bio: string;
}

export const PROFILES: Profile[] = [
  {
    id: "1",
    name: "Sarah Chen",
    handle: "@sarahchen",
    avatarUrl: "https://i.pravatar.cc/150?img=1",
    tier: "Tier 1",
    niche: "AI & Machine Learning",
    tags: ["AI", "Python", "Research"],
    bio: "ML engineer at Meta building recommendation systems. PhD in Computer Science. Passionate about ethical AI and open source.",
  },
  {
    id: "2",
    name: "Marcus Johnson",
    handle: "@marcusj",
    avatarUrl: "https://i.pravatar.cc/150?img=2",
    tier: "Tier 2",
    niche: "Product Design",
    tags: ["UI/UX", "Figma", "Design Systems"],
    bio: "Product designer crafting delightful experiences. Previously led design at Stripe. Always exploring new design tools.",
  },
  {
    id: "3",
    name: "Emily Rodriguez",
    handle: "@emily_codes",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    tier: "Tier 1",
    niche: "Full-Stack Development",
    tags: ["React", "Node.js", "TypeScript"],
    bio: "Full-stack engineer building scalable web apps. Open source maintainer. Love teaching and mentoring junior devs.",
  },
  {
    id: "4",
    name: "David Kim",
    handle: "@davidkim",
    avatarUrl: "https://i.pravatar.cc/150?img=4",
    tier: "Tier 3",
    niche: "Content Creation",
    tags: ["YouTube", "Video", "Marketing"],
    bio: "Tech content creator with 500K+ followers. Helping developers build their personal brands. Former software engineer.",
  },
  {
    id: "5",
    name: "Aisha Patel",
    handle: "@aishapatel",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    tier: "Tier 1",
    niche: "Venture Capital",
    tags: ["VC", "Startups", "SaaS"],
    bio: "Partner at Sequoia investing in early-stage B2B SaaS. Former founder. Looking to connect with exceptional builders.",
  },
  {
    id: "6",
    name: "James Wilson",
    handle: "@jwilson",
    avatarUrl: "https://i.pravatar.cc/150?img=6",
    tier: "Tier 2",
    niche: "DevOps & Cloud",
    tags: ["AWS", "Kubernetes", "Docker"],
    bio: "DevOps architect automating everything. Certified AWS Solutions Architect. Building reliable systems at scale.",
  },
  {
    id: "7",
    name: "Sofia Martinez",
    handle: "@sofiam",
    avatarUrl: "https://i.pravatar.cc/150?img=7",
    tier: "Tier 4",
    niche: "Growth Marketing",
    tags: ["SEO", "Analytics", "Growth"],
    bio: "Growth marketer helping SaaS companies scale. Data-driven approach. Grew 3 startups from 0 to 100K users.",
  },
  {
    id: "8",
    name: "Ryan Thompson",
    handle: "@ryanthompson",
    avatarUrl: "https://i.pravatar.cc/150?img=8",
    tier: "Tier 2",
    niche: "Blockchain & Web3",
    tags: ["Solidity", "DeFi", "Smart Contracts"],
    bio: "Blockchain engineer building DeFi protocols. Solidity expert. Passionate about decentralization and financial inclusion.",
  },
  {
    id: "9",
    name: "Linda Chang",
    handle: "@lindachang",
    avatarUrl: "https://i.pravatar.cc/150?img=9",
    tier: "Tier 3",
    niche: "Data Science",
    tags: ["Analytics", "SQL", "Tableau"],
    bio: "Data scientist turning data into insights. Specialize in predictive analytics and business intelligence. SQL wizard.",
  },
  {
    id: "10",
    name: "Alex Turner",
    handle: "@alexturner",
    avatarUrl: "https://i.pravatar.cc/150?img=10",
    tier: "Tier 5",
    niche: "Cybersecurity",
    tags: ["Security", "Penetration Testing", "Compliance"],
    bio: "Security consultant protecting companies from threats. CISSP certified. Helping startups build secure infrastructure.",
  },
];
