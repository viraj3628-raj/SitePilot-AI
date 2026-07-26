import StatsCard from "./StatsCard";
import FeatureCard from "./FeatureCard";
import QuickActions from "./QuickActions";

export default function Dashboard() {
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
        />

        <FeatureCard
          title="📈 SEO Optimizer"
          text="Improve Google rankings automatically"
        />

        <FeatureCard
          title="📝 AI Blog Writer"
          text="Generate SEO-friendly articles"
        />

        <FeatureCard
          title="🖼 AI Image Generator"
          text="Create AI images instantly"
        />

        <FeatureCard
          title="📊 Analytics"
          text="Track traffic and performance"
        />

        <FeatureCard
          title="⚙️ Settings"
          text="Manage your AI workspace"
        />

      </div>

      <div className="mt-10">
        <QuickActions />
      </div>

    </div>
  );
}
