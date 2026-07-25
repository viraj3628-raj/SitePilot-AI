import StatsCard from "./StatsCard";
import FeatureCard from "./FeatureCard";
import QuickActions from "./QuickActions";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-black text-white p-6">

      <div className="mb-8">
        <h1 className="text-4xl font-bold">
          Welcome to SitePilot AI 🚀
        </h1>

        <p className="text-gray-400 mt-2">
          Your AI powered website growth assistant
        </p>
      </div>


      <div className="grid md:grid-cols-3 gap-5">

        <StatsCard
          title="AI Websites"
          value="12"
        />

        <StatsCard
          title="SEO Score"
          value="94%"
        />

        <StatsCard
          title="Visitors"
          value="25K"
        />

      </div>


      <h2 className="text-2xl font-bold mt-10 mb-5">
        AI Tools
      </h2>


      <div className="grid md:grid-cols-3 gap-5">

        <FeatureCard
          title="AI Website Builder"
          text="Create professional websites with AI"
        />

        <FeatureCard
          title="SEO Optimizer"
          text="Improve Google ranking automatically"
        />

        <FeatureCard
          title="AI Blog Writer"
          text="Generate SEO friendly articles"
        />

      </div>


      <QuickActions />

    </div>
  );
}
