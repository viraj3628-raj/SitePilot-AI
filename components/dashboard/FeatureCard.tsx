export default function FeatureCard({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="group rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 transition-all duration-300 hover:-translate-y-2 hover:border-blue-500 hover:shadow-2xl hover:shadow-blue-500/20">

      <h3 className="text-2xl font-bold text-white">
        {title}
      </h3>

      <p className="text-gray-400 mt-3">
        {text}
      </p>

      <button className="mt-6 w-full rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 py-3 font-semibold text-white transition hover:scale-105">
        Open Tool →
      </button>

    </div>
  );
}
