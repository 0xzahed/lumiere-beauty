"use client";
import { Ticket, Copy } from "lucide-react";
import { coupons } from "@/data/extras";
import { useStore } from "@/lib/store";

export default function CouponsPage() {
  const { toast } = useStore();
  return (
    <div>
      <h1 className="h-serif text-3xl">Coupons & Offers</h1>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {coupons.filter((c) => c.active).map((c) => (
          <div key={c.code} className="relative overflow-hidden rounded-2xl border-2 border-dashed border-gold/50 bg-white p-6">
            <Ticket size={20} className="text-gold-dark" />
            <p className="mt-2 font-mono text-2xl font-bold tracking-widest">{c.code}</p>
            <p className="text-sm text-muted">{c.type === "percent" ? `${c.value}% off` : `৳${c.value} off`} · Min ৳{c.minOrder} · Expires {c.expiry}</p>
            <button onClick={() => { navigator.clipboard?.writeText(c.code).catch(() => {}); toast(`Copied ${c.code}`); }} className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-cocoa px-4 py-2 text-xs uppercase tracking-widest text-ivory"><Copy size={13} /> Copy code</button>
          </div>
        ))}
      </div>
    </div>
  );
}
