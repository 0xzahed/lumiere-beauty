import Link from "next/link";
import { Package, Heart, Star, Sparkles, Truck, ShoppingBag, CalendarHeart } from "lucide-react";

export default function AccountHome() {
  const stats = [
    { icon: Package, v: "12", l: "Total Orders" },
    { icon: Heart, v: "8", l: "Wishlist" },
    { icon: Star, v: "6", l: "Reviews" },
    { icon: Sparkles, v: "450", l: "Reward Points" },
  ];
  return (
    <div>
      <h1 className="h-serif text-3xl sm:text-4xl">Good morning, Sarah 👋</h1>
      <p className="mt-1 text-muted">Ready for your next beauty ritual?</p>
      <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {stats.map((s) => <div key={s.l} className="rounded-2xl border border-line bg-white p-5 shadow-card"><s.icon size={20} className="text-gold-dark" /><p className="mt-2 font-serif text-3xl">{s.v}</p><p className="text-xs uppercase tracking-widest text-muted">{s.l}</p></div>)}
      </div>
      <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {[{ href: "/account/orders", i: Truck, t: "Track Order" }, { href: "/shop", i: ShoppingBag, t: "Shop Products" }, { href: "/account/routine", i: CalendarHeart, t: "View Routine" }, { href: "/account/wishlist", i: Heart, t: "Wishlist" }].map((a) => <Link key={a.t} href={a.href} className="flex items-center gap-3 rounded-2xl bg-cocoa p-4 text-ivory transition hover:bg-ink"><a.i size={19} className="text-gold" /><span className="text-sm font-medium">{a.t}</span></Link>)}
      </div>
      <div className="mt-6 rounded-2xl border border-line bg-white p-6">
        <div className="flex items-center justify-between"><h3 className="font-serif text-xl">Recent order</h3><Link href="/account/orders" className="text-sm underline underline-offset-4">View all</Link></div>
        <div className="mt-4 flex items-center justify-between rounded-xl bg-cream p-4 text-sm"><div><p className="font-semibold">Order #BF1024 · 2 items</p><p className="text-muted">৳2,490 · Delivered</p></div><Link href="/account/orders/BF1024" className="btn-secondary !px-5 !py-2.5">Details</Link></div>
      </div>
    </div>
  );
}
