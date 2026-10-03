"use client";
import { useState } from "react";
import Link from "next/link";
import { Package } from "lucide-react";
import { orders } from "@/data/extras";
import { taka } from "@/lib/utils";
import { StatusBadge, EmptyState } from "@/components/ui";

const TABS = ["All", "Pending", "Processing", "Shipped", "Delivered", "Cancelled"];

export default function OrdersPage() {
  const [tab, setTab] = useState("All");
  const list = orders.filter((o) => tab === "All" || o.status === tab);
  return (
    <div>
      <h1 className="h-serif text-3xl">My Orders</h1>
      <div className="mt-4 flex gap-2 overflow-x-auto no-scrollbar">{TABS.map((t) => <button key={t} onClick={() => setTab(t)} className={`whitespace-nowrap rounded-full border px-4 py-2 text-xs uppercase tracking-widest ${tab === t ? "border-cocoa bg-cocoa text-ivory" : "border-line bg-white"}`}>{t}</button>)}</div>
      <div className="mt-5 space-y-3">
        {list.length === 0 && <EmptyState icon={<Package size={24} />} title="No orders here yet." body="You haven't placed any orders yet." action={<Link href="/shop" className="btn-primary">Shop Now</Link>} />}
        {list.map((o) => (
          <div key={o.id} className="flex flex-wrap items-center gap-4 rounded-2xl border border-line bg-white p-5">
            <div className="flex-1 min-w-[180px]"><p className="font-semibold">Order #{o.id}</p><p className="text-sm text-muted">{o.date} · {o.items.length} Items · {taka(o.total)}</p></div>
            <StatusBadge status={o.status} />
            <Link href={`/account/orders/${o.id}`} className="btn-secondary !px-5 !py-2.5">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
