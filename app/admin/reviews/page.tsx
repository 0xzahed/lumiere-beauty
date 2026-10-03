"use client";
import { useState } from "react";
import { reviews as initial } from "@/data/extras";
import { Stars, StatusBadge } from "@/components/ui";
import { useStore } from "@/lib/store";

export default function AdminReviews() {
  const { toast } = useStore();
  const [list, setList] = useState(initial);
  const act = (id: string, status: "approved" | "rejected", msg: string) => { setList(list.map((r) => r.id === id ? { ...r, status } : r)); toast(msg); };
  return (
    <div>
      <h1 className="font-serif text-3xl">Reviews <span className="text-base text-muted">({list.length})</span></h1>
      <div className="mt-4 space-y-3">
        {list.slice(0, 12).map((r) => (
          <div key={r.id} className="rounded-2xl border border-line bg-ivory p-5">
            <div className="flex flex-wrap items-center gap-3"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-blush text-xs font-bold">{r.avatar}</span><div className="flex-1"><p className="text-sm font-semibold">{r.customer} <span className="font-normal text-muted">on {r.productName}</span></p><Stars value={r.rating} size={12} /></div><StatusBadge status={r.status} /></div>
            <p className="mt-3 text-sm"><b>{r.title}</b> — <span className="text-muted">{r.body}</span></p>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <button onClick={() => act(r.id, "approved", "Review approved")} className="rounded-full bg-emerald-600 px-4 py-1.5 text-white">Approve</button>
              <button onClick={() => act(r.id, "rejected", "Review rejected")} className="rounded-full border border-red-200 px-4 py-1.5 text-red-600">Reject</button>
              <button onClick={() => toast("Review featured on homepage")} className="rounded-full border border-line bg-white px-4 py-1.5">Feature</button>
              <button onClick={() => { setList(list.filter((x) => x.id !== r.id)); toast("Review deleted"); }} className="rounded-full px-4 py-1.5 text-muted hover:text-red-600">Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
