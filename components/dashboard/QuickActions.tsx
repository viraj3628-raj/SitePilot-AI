export default function QuickActions() {
  return (
    <div className="mt-10 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6">

      <h2 className="text-3xl font-bold text-white mb-6">
        ⚡ Quick Actions
      </h2>

      <div className="grid gap-4 md:grid-cols-3">

        <button className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 py-4 text-white font-semibold transition hover:scale-105">
          🌐 Create Website
        </button>

        <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-fuchsia-500 py-4 text-white font-semibold transition hover:scale-105">
          📈 Analyze SEO
        </button>

        <button className="rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 py-4 text-white font-semibold transition hover:scale-105">
          📝 Generate Blog
        </button>

      </div>

    </div>
  );
}
