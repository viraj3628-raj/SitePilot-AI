export default function QuickActions() {
  return (
    <div className="mt-10 rounded-2xl border border-gray-800 bg-gray-900 p-6">

      <h2 className="text-2xl font-bold">
        Quick Actions
      </h2>

      <div className="flex flex-wrap gap-4 mt-5">

        <button className="bg-white text-black px-5 py-3 rounded-xl">
          Create Website
        </button>

        <button className="bg-gray-800 px-5 py-3 rounded-xl">
          Analyze SEO
        </button>

        <button className="bg-gray-800 px-5 py-3 rounded-xl">
          Generate Blog
        </button>

      </div>

    </div>
  );
}
