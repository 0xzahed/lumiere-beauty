import { Bell, Package, Star, UserPlus, BadgePercent } from "lucide-react";
export default function NotificationsPage() {
  const items = [
    { i: Package, t: "Order #BF1023 shipped", s: "Your package left our Gulshan hub · 2h ago", unread: true },
    { i: BadgePercent, t: "GLOW10 — 10% off ends soon", s: "Valid till Dec 31 on orders over ৳1,000 · 1d ago", unread: true },
    { i: Star, t: "Review Glow Barrier Cream?", s: "Tell others about your recent purchase · 3d ago", unread: false },
    { i: UserPlus, t: "Welcome to Lumière Club", s: "You earned 100 glow points · Sep 10", unread: false },
  ];
  return (
    <div><h1 className="h-serif text-3xl">Notifications</h1><div className="mt-5 space-y-3">{items.map((n, i) => <div key={i} className={`flex gap-3 rounded-2xl border p-5 ${n.unread ? "border-gold/40 bg-gold/5" : "border-line bg-white"}`}><span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blush"><n.i size={17} /></span><div><p className="text-sm font-semibold">{n.t}</p><p className="text-sm text-muted">{n.s}</p></div>{n.unread && <span className="ml-auto h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />}</div>)}</div></div>
  );
}
