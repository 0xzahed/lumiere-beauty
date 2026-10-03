import { Star, StarHalf } from "lucide-react";
import { cx } from "@/lib/utils";

export function Stars({ value, size = 14, className }: { value: number; size?: number; className?: string }) {
  return (
    <span className={cx("inline-flex items-center gap-[2px] text-gold", className)} aria-label={`${value} out of 5 stars`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star key={i} size={size} fill={i <= Math.round(value) ? "currentColor" : "none"} strokeWidth={1.5} className={i <= Math.round(value) ? "" : "text-line"} />
      ))}
    </span>
  );
}

export function Badge({ children, tone = "gold" }: { children: React.ReactNode; tone?: "gold" | "dark" | "sage" | "blush" | "red" | "green" }) {
  const tones: Record<string, string> = {
    gold: "bg-gold/15 text-gold-dark",
    dark: "bg-cocoa text-ivory",
    sage: "bg-sage text-cocoa",
    blush: "bg-blush text-cocoa",
    red: "bg-red-50 text-red-700",
    green: "bg-emerald-50 text-emerald-700",
  };
  return <span className={`badge-soft ${tones[tone]}`}>{children}</span>;
}

export function StatusBadge({ status }: { status: string }) {
  const map: Record<string, string> = {
    Pending: "bg-amber-50 text-amber-700 border-amber-200",
    Processing: "bg-blue-50 text-blue-700 border-blue-200",
    Shipped: "bg-violet-50 text-violet-700 border-violet-200",
    Delivered: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Cancelled: "bg-red-50 text-red-700 border-red-200",
    active: "bg-emerald-50 text-emerald-700 border-emerald-200",
    inactive: "bg-gray-100 text-gray-600 border-gray-200",
    approved: "bg-emerald-50 text-emerald-700 border-emerald-200",
    pending: "bg-amber-50 text-amber-700 border-amber-200",
    rejected: "bg-red-50 text-red-700 border-red-200",
  };
  return <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-medium ${map[status] ?? "bg-cream text-cocoa border-line"}`}><span className="h-1.5 w-1.5 rounded-full bg-current" />{status}</span>;
}

export function SectionHead({ eyebrow, title, sub, align = "center" }: { eyebrow: string; title: string; sub?: string; align?: "center" | "left" }) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="h-serif mt-3 text-3xl sm:text-4xl lg:text-[42px] leading-[1.1] text-cocoa">{title}</h2>
      {sub && <p className="mt-3 text-[15px] leading-relaxed text-muted">{sub}</p>}
    </div>
  );
}

export function EmptyState({ icon, title, body, action }: { icon: React.ReactNode; title: string; body: string; action?: React.ReactNode }) {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center px-6 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blush text-cocoa">{icon}</div>
      <h3 className="h-serif mt-5 text-2xl text-cocoa">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="card-luxe overflow-hidden">
      <div className="skeleton aspect-[4/5]" />
      <div className="space-y-2 p-4"><div className="skeleton h-4 w-3/4" /><div className="skeleton h-3 w-1/2" /><div className="skeleton h-5 w-1/3" /></div>
    </div>
  );
}
