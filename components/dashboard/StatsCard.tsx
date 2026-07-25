export default function StatsCard({
  title,
  value,
}: {
  title: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl border border-gray-800 bg-gray-900 p-6 shadow-lg">
      <p className="text-gray-400">{title}</p>
      <h3 className="text-3xl font-bold mt-3">{value}</h3>
    </div>
  );
}
