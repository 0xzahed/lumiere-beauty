"use client";
import { useState } from "react";
import { Star, Pencil } from "lucide-react";
import { useStore } from "@/lib/store";
import { Stars } from "@/components/ui";
import { products } from "@/data/products";

export default function SkinProfilePage() {
  const { toast } = useStore();
  const [editing, setEditing] = useState(false);
  return (
    <div>
      <div className="flex items-center justify-between"><h1 className="h-serif text-3xl">Your Skin Profile</h1><button onClick={() => { setEditing(!editing); if (editing) toast("Skin profile updated"); }} className="btn-secondary !px-5 !py-2.5 inline-flex items-center gap-1.5"><Pencil size={14} /> {editing ? "Save Profile" : "Edit Skin Profile"}</button></div>
      <div className="mt-5 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-line bg-white p-6"><p className="text-xs uppercase tracking-widest text-muted">Skin Type</p><p className="h-serif mt-1 text-2xl">Combination</p><p className="mt-2 text-sm text-muted">Oily T-zone, normal cheeks. Occasional sensitivity.</p></div>
        <div className="rounded-2xl border border-line bg-white p-6"><p className="text-xs uppercase tracking-widest text-muted">Concerns</p><div className="mt-2 flex flex-wrap gap-1.5">{["Acne", "Dark Spots", "Dullness"].map((c) => <span key={c} className="rounded-full bg-blush px-3 py-1.5 text-xs font-medium">{c}</span>)}</div></div>
        <div className="rounded-2xl border border-line bg-white p-6"><p className="text-xs uppercase tracking-widest text-muted">Preferences</p><div className="mt-2 flex flex-wrap gap-1.5">{["Fragrance-free", "Lightweight texture"].map((c) => <span key={c} className="rounded-full bg-sage px-3 py-1.5 text-xs font-medium">{c}</span>)}</div></div>
      </div>
      {editing && <div className="mt-4 rounded-2xl border border-dashed border-gold bg-gold/5 p-6 text-sm">Editing mode — pick your skin type, concerns and texture preferences. Changes power your routine recommendations instantly.</div>}
      <div className="mt-4 rounded-2xl bg-cocoa p-6 text-ivory"><p className="eyebrow !text-gold-light">Matched to you</p><p className="mt-1 text-sm text-ivory/70">Based on combination + acne-prone skin, we recommend niacinamide, salicylic acid (2x/week) and oil-free gel hydration.</p></div>
    </div>
  );
}
