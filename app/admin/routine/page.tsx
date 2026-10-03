"use client";
import { useState } from "react";
import { ingredients } from "@/data/products";
import { useStore } from "@/lib/store";

export default function RoutineAdmin() {
  const { toast } = useStore();
  const [tab, setTab] = useState("Recommendations");
  return (
    <div>
      <h1 className="font-serif text-3xl">Skin & Routine Engine</h1>
      <p className="text-sm text-muted">Connect skin type + concern + step → products.</p>
      <div className="mt-4 flex gap-2">{["Skin Types", "Concerns", "Ingredients", "Recommendations"].map((t) => <button key={t} onClick={() => setTab(t)} className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest ${tab === t ? "border-cocoa bg-cocoa text-ivory" : "border-line bg-ivory"}`}>{t}</button>)}</div>
      <div className="mt-4 rounded-2xl border border-line bg-ivory p-6">
        {tab === "Skin Types" && <div className="flex flex-wrap gap-2">{["Dry", "Oily", "Combination", "Normal", "Sensitive"].map((s) => <span key={s} className="rounded-full bg-cream px-5 py-2.5 text-sm font-medium">{s}</span>)}</div>}
        {tab === "Concerns" && <div className="flex flex-wrap gap-2">{["Acne", "Dark Spots", "Dryness", "Dullness", "Redness", "Aging"].map((s) => <span key={s} className="rounded-full bg-blush px-5 py-2.5 text-sm font-medium">{s}</span>)}</div>}
        {tab === "Ingredients" && <div className="grid gap-2 sm:grid-cols-2">{ingredients.map((i) => <div key={i.name} className="rounded-xl bg-cream/70 p-4 text-sm"><b>{i.name}</b> — {i.tagline}<p className="text-muted text-xs">For: {i.suitable.join(", ")}</p></div>)}</div>}
        {tab === "Recommendations" && (
          <div className="space-y-3 text-sm">
            <div className="rounded-xl bg-sage/40 p-4"><b>Combination + Acne</b> → Cleanser (Cloud Foam) → Niacinamide Serum → Water Gel → SPF 50+ <button onClick={() => toast("Rule saved")} className="ml-2 underline">Edit</button></div>
            <div className="rounded-xl bg-blush/50 p-4"><b>Dry + Dullness</b> → Balm → Vitamin C → Barrier Cream → SPF 50+ <button onClick={() => toast("Rule saved")} className="ml-2 underline">Edit</button></div>
            <div className="rounded-xl bg-cream p-4"><b>Sensitive + Redness</b> → Gentle Foam → Azelaic → Oat Calm → SPF 50+ <button onClick={() => toast("Rule saved")} className="ml-2 underline">Edit</button></div>
            <button onClick={() => toast("New recommendation rule added")} className="rounded-full bg-cocoa px-5 py-2.5 text-xs uppercase tracking-widest text-ivory">+ New Rule</button>
          </div>
        )}
      </div>
    </div>
  );
}
