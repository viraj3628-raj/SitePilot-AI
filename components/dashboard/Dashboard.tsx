"use client";

import { useRouter } from "next/navigation";
import StatsCard from "./StatsCard";
import FeatureCard from "./FeatureCard";
import QuickActions from "./QuickActions";
import ChatBox from "./ChatBox";

export default function Dashboard() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-zinc-950 via-slate-900 to-blue-950 text-white p-8">

      <div className="glass p-8 rounded-3xl mb-10">
        <h1 className="text-5xl font-bold">
          🚀 SitePilot AI
        </h1>

        <p className="text-zinc-300 mt-3 text-lg">
          Build • Grow • Rank • Automate
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">

        <StatsCard title="AI Websites" value="12" />
        <StatsCard title="SEO Score" value="94%" />
        <StatsCard title="Visitors" value="25K" />

      </div>

      <h2 className="text-3xl font-bold mt-12 mb-6">
        ⚡ AI Tools
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <FeatureCard
  title="🌐 AI Website Builder"
  text="Create premium websites with AI"
  onClick={() => router.push("/website")}
/>

<FeatureCard
  title="📈 SEO Optimizer"
  text="Improve Google rankings automatically"
  onClick={() => router.push("/seo")}
/>

<FeatureCard
  title="📝 AI Blog Writer"
  text="Generate SEO-friendly articles"
  onClick={() => router.push("/blog")}
/>

<FeatureCard
  title="🖼 AI Image Generator"
  text="Create AI images instantly"
  onClick={() => router.push("/image")}
/>

<FeatureCard
  title="📊 Analytics"
  text="Track traffic and performance"
  onClick={() => router.push("/analytics")}
/>

<FeatureCard
  title="⚙️ Settings"
  text="Manage your AI workspace"
  onClick={() => router.push("/settings")}
/>

      </div>

      <div className="mt-10">
        <QuickActions />
      </div>

      <ChatBox />

    </div>
  );
}
