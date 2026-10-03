"use client";
import { useState } from "react";
import { Search, Eye } from "lucide-react";
import { orders as initial } from "@/data/extras";
import { taka } from "@/lib/utils";
import { StatusBadge } from "@/components/ui";
import { Order } from "@/types";
import { useStore } from "@/lib/store";

export default function AdminOrders() {
  const { toast } = useStore();
  const [list, setList] = useState<Order[]>(initial);
  const [q, setQ] = useState("");
  const [status, setStatus] = useState("All");
  const filtered = list.filter((o) => (o.id + o.customer).toLowerCase().includes(q.toLowerCase()) && (status === "All" || o.status === status));
  const bump = (id: string) => {
    const flow = ["Pending", "Processing", "Shipped", "Delivered"] as const;
    setList(list.map((o) => o.id === id ? { ...o, status: flow[Math.min(flow.indexOf(o.status as never) + 1, 3)] as Order["status"] } : o));
    toast(`Order #${id} status updated`);
  };
  return (
    <div>
      <h1 className="font-serif text-3xl">Orders <span className="text-base text-muted">({filtered.length})</span></h1>
      <div className="mt-4 flex flex-wrap gap-2">
        <div className="flex flex-1 min-w-[200px] items-center gap-2 rounded-xl border border-line bg-ivory px-4 py-2.5"><Search size={16} className="text-muted" /><input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search order, customer..." className="w-full bg-transparent text-sm outline-none" aria-label="Search orders" /></div>
        <select value={status} onChange={(e) => setStatus(e.target.value)} className="rounded-xl border border-line bg-ivory px-4 py-2.5 text-sm" aria-label="Status filter">{["All", "Pending", "Processing", "Shipped", "Delivered", "Cancelled"].map((s) => <option key={s}>{s}</option>)}</select>
      </div>
      <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-ivory">
        <div className="overflow-x-auto"><table className="w-full min-w-[860px] text-left text-sm">
          <thead><tr className="border-b border-line bg-cream/60 text-xs uppercase tracking-widest text-muted"><th className="px-4 py-3">Order</th><th className="px-4 py-3">Customer</th><th className="px-4 py-3">Items</th><th className="px-4 py-3">Amount</th><th className="px-4 py-3">Payment</th><th className="px-4 py-3">Status</th><th className="px-4 py-3 text-right">Action</th></tr></thead>
          <tbody>{filtered.map((o) => <tr key={o.id} className="border-b border-line/60 hover:bg-cream/40"><td className="px-4 py-3 font-medium">#{o.id}<br /><span className="text-xs font-normal text-muted">{o.date}</span></td><td className="px-4 py-3">{o.customer}<br /><span className="text-xs text-muted">{o.city}</span></td><td className="px-4 py-3">{o.items.reduce((s, i) => s + i.qty, 0)}</td><td className="px-4 py-3 font-semibold">{taka(o.total)}</td><td className="px-4 py-3 text-muted">{o.payment}</td><td className="px-4 py-3"><StatusBadge status={o.status} /></td><td className="px-4 py-3"><div className="flex justify-end gap-1"><button onClick={() => toast(`Viewing #${o.id}: ${o.customer}, ${taka(o.total)}`)} className="rounded-lg p-2 hover:bg-cream" aria-label="View"><Eye size={16} /></button><button onClick={() => bump(o.id)} className="rounded-full bg-cocoa px-3 py-1.5 text-[11px] text-ivory hover:bg-ink">Advance →</button></div></td></tr>)}</tbody></table></div>
      </div>
    </div>
  );
}
