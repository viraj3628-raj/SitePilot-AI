export default function Sidebar() {
  return (
    <aside className="w-72 bg-black text-white h-screen p-6 border-r border-zinc-800">
      <h1 className="text-3xl font-bold text-blue-500">
        🚀 SitePilot AI
      </h1>

      <button className="w-full mt-8 bg-blue-600 hover:bg-blue-700 rounded-xl py-3 text-lg font-semibold">
        + New Chat
      </button>

      <div className="mt-10">
        <h2 className="text-gray-400 uppercase text-sm">
          Chat History
        </h2>
      </div>
    </aside>
  );
}
