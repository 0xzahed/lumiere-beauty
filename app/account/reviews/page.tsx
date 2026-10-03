"use client";
import { useState } from "react";
import { Star } from "lucide-react";
import { useStore } from "@/lib/store";
import { products } from "@/data/products";
import { Stars } from "@/components/ui";
import { taka } from "@/lib/utils";

export default function ReviewsPage() {
  const { toast } = useStore();
  const [ratings, setRatings] = useState<Record<string, number>>({});
  const [texts, setTexts] = useState<Record<string, string>>({});
  const awaiting = products.slice(0, 3);
  return (
    <div>
      <h1 className="h-serif text-3xl">My Reviews</h1>
      <p className="mt-1 text-sm text-muted">Purchased products awaiting your review.</p>
      <div className="mt-5 space-y-4">
        {awaiting.map((p) => (
          <div key={p.id} className="rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center gap-3">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={p.image} alt={p.name} className="h-14 w-14 rounded-xl object-cover" /><div><p className="font-semibold">{p.name}</p><p className="text-sm text-muted">{taka(p.price)} · Delivered Sep 2026</p></div></div>
            <div className="mt-4 flex gap-1">{[1, 2, 3, 4, 5].map((s) => <button key={s} onClick={() => setRatings({ ...ratings, [p.id]: s })} aria-label={`${s} stars`}><Star size={24} className={(ratings[p.id] ?? 0) >= s ? "text-gold" : "text-line"} fill={(ratings[p.id] ?? 0) >= s ? "currentColor" : "none"} /></button>)}</div>
            <textarea value={texts[p.id] ?? ""} onChange={(e) => setTexts({ ...texts, [p.id]: e.target.value })} placeholder="Share your experience — texture, results, who should try it..." rows={3} className="input-luxe mt-3" aria-label="Review" />
            <button onClick={() => toast("Review submitted — thank you!")} className="btn-primary mt-3 !px-6 !py-2.5">Submit Review</button>
          </div>
        ))}
      </div>
    </div>
  );
}
