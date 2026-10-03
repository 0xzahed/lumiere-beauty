import Link from "next/link";
import { Banknote, ShoppingCart, Users, Package, AlertTriangle, TrendingUp, ArrowUpRight } from "lucide-react";
import { orders, customers } from "@/data/extras";
import { products } from "@/data/products";
import { taka } from "@/lib/utils";
import { StatusBadge } from "@/components/ui";

function Bar({ vals, color }: { vals: number[]; color: string }) {
  const max = Math.max(...vals);
  return <div className="flex h-28 items-end gap-1.5">{vals.map((v, i) => <div key={i} className="flex-1 rounded-t-md" style={{ height: `${(v / max) * 100}%`, background: color, opacity: 0.45 + (0.55 * v) / max }} title={`${v}`} />)}</div>;
}

export default function AdminHome() {
  const stats = [
    { icon: Banknote, l: "Total Revenue", v: "৳458,920", d: "+18% vs last month", c: "bg-cocoa" },
    { icon: ShoppingCart, l: "Orders", v: "1,284", d: "+12% vs last month", c: "bg-gold" },
    { icon: Users, l: "Customers", v: "8,492", d: "+240 this week", c: "bg-sage !text-cocoa" },
    { icon: Package, l: "Products", v: "248", d: "12 low stock", c: "bg-blush !text-cocoa" },
  ];
  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-3"><div><h1 className="font-serif text-3xl sm:text-4xl">Good morning, Admin 👋</h1><p className="text-sm text-muted">Here&apos;s what&apos;s happening with your store today.</p></div><Link href="/admin/products/new" className="rounded-full bg-cocoa px-5 py-2.5 text-xs font-semibold uppercase tracking-widest text-ivory hover:bg-ink">+ Add Product</Link></div>
      <div className="mt-5 grid grid-cols-2 gap-4 xl:grid-cols-4">
        {stats.map((s) => <div key={s.l} className="rounded-2xl border border-line bg-ivory p-5"><span className={`flex h-10 w-10 items-center justify-center rounded-xl text-ivory ${s.c}`}><s.icon size={19} /></span><p className="mt-3 font-serif text-[28px] leading-none">{s.v}</p><p className="mt-1 text-xs uppercase tracking-widest text-muted">{s.l}</p><p className="mt-1 flex items-center gap-1 text-xs text-emerald-600"><TrendingUp size={12} />{s.d}</p></div>)}
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-3">
        <div className="rounded-2xl border border-line bg-ivory p-5"><div className="flex justify-between"><h3 className="font-semibold">Revenue — last 12 weeks</h3><Link href="/admin/analytics" className="text-xs text-gold-dark inline-flex items-center gap-0.5">Analytics <ArrowUpRight size={13} /></Link></div><div className="mt-4"><Bar vals={[12, 18, 15, 22, 28, 24, 32, 38, 34, 42, 48, 55]} color="#352824" /></div><div className="mt-2 flex justify-between text-[11px] text-muted"><span>Jul</span><span>Sep</span></div></div>
        <div className="rounded-2xl border border-line bg-ivory p-5"><h3 className="font-semibold">Orders — last 12 weeks</h3><div className="mt-4"><Bar vals={[8, 12, 10, 15, 14, 19, 22, 20, 26, 30, 28, 34]} color="#C7A77B" /></div><div className="mt-2 flex justify-between text-[11px] text-muted"><span>Jul</span><span>Sep</span></div></div>
        <div className="space-y-3">
          <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm"><AlertTriangle size={18} className="text-amber-600" /><div><b>14 pending orders</b> need confirmation<p className="text-muted text-xs">Oldest waiting 6 hours</p></div></div>
          <div className="flex items-center gap-3 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm"><AlertTriangle size={18} className="text-red-600" /><div><b>12 low-stock products</b><p className="text-muted text-xs">Rosehip oil · Petal Parfum low</p></div></div>
          <div className="rounded-2xl border border-line bg-ivory p-4 text-sm"><b>Today&apos;s sales — ৳24,590</b><p className="text-xs text-muted">32 orders · AOV ৳1,918</p></div>
        </div>
      </div>
      <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-ivory">
        <div className="flex items-center justify-between p-5"><h3 className="font-semibold">Recent Orders</h3><Link href="/admin/orders" className="text-xs underline underline-offset-4">View all</Link></div>
        <div className="overflow-x-auto"><table className="w-full min-w-[720px] text-left text-sm"><thead><tr className="border-y border-line bg-cream/60 text-xs uppercase tracking-widest text-muted"><th className="px-5 py-3">Order</th><th className="px-5 py-3">Customer</th><th className="px-5 py-3">Amount</th><th className="px-5 py-3">Payment</th><th className="px-5 py-3">Status</th><th className="px-5 py-3">Date</th></tr></thead><tbody>{orders.slice(0, 6).map((o) => <tr key={o.id} className="border-b border-line/60 hover:bg-cream/40"><td className="px-5 py-3 font-medium">#{o.id}</td><td className="px-5 py-3">{o.customer}</td><td className="px-5 py-3 font-semibold">{taka(o.total)}</td><td className="px-5 py-3 text-muted">{o.payment}</td><td className="px-5 py-3"><StatusBadge status={o.status} /></td><td className="px-5 py-3 text-muted">{o.date}</td></tr>)}</tbody></table></div>
      </div>
    </div>
  );
}
