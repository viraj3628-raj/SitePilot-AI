export default function Header() {
  return (
    <header className="flex items-center justify-between p-6 border-b border-zinc-800 bg-white">
      <div>
        <h1 className="text-3xl font-bold text-blue-600">
          🚀 SitePilot AI
        </h1>
        <p className="text-gray-500">
          AI Website Builder • SEO • Hosting • Analytics
        </p>
      </div>

      <div className="flex gap-3">
        <button className="bg-blue-600 text-white px-5 py-2 rounded-xl">
          Upgrade Pro
        </button>

        <button className="border px-5 py-2 rounded-xl">
          Settings
        </button>
      </div>
    </header>
  );
}
