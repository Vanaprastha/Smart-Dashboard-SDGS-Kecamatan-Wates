type Props = {
  goalNo: number;
  title: string;
  progress: number;
  metric?: string;
};

const SDG_COLORS: Record<number, string> = {
  1: "#E5243B", 2: "#DDA63A", 3: "#4C9F38", 4: "#C5192D", 5: "#FF3A21",
  6: "#26BDE2", 7: "#FCC30B", 8: "#A21942", 9: "#FD6925", 10: "#DD1367",
  11: "#FD9D24", 12: "#BF8B2E", 13: "#3F7E44", 14: "#0A97D9", 15: "#56C02B",
  16: "#00689D", 17: "#19486A",
};

export default function SDGCard({ goalNo, title, progress, metric }: Props) {
  const clamped = Math.min(Math.max(progress, 0), 100);
  const base = SDG_COLORS[goalNo] ?? "#10b981";
  const bg = `linear-gradient(135deg, ${base}20, ${base}40)`;
  const border = base + "55";
  return (
    <div className="p-4 rounded-2xl border backdrop-blur-xl" style={{ background: bg, borderColor: border }}>
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold drop-shadow-md">SDG {goalNo}: {title}</h3>
        <span className="text-xs text-neutral-200/80">{metric ?? "-"}</span>
      </div>
      <div className="w-full h-2 bg-black/30 rounded-full overflow-hidden">
        <div className="h-full" style={{ width: `${clamped}%`, background: base }} />
      </div>
      <p className="mt-2 text-sm drop-shadow">{clamped}% tercapai</p>
    </div>
  );
}
