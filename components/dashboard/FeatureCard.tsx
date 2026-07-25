export default function FeatureCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900 to-black p-6 hover:scale-105 transition">
      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="text-gray-400 mt-3">
        {text}
      </p>

      <button className="mt-5 rounded-xl bg-white text-black px-4 py-2">
        Open Tool
      </button>
    </div>
  );
}
