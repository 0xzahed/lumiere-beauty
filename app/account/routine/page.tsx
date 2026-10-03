"use client";
import { Sun, MoonStar, Clock } from "lucide-react";
import { useStore } from "@/lib/store";
import { products } from "@/data/products";
import { taka } from "@/lib/utils";

export default function RoutinePage() {
  const { addToCart } = useStore();
  const morning = [products[1], products[2], products[0], products[7]];
  const night = [products[24], products[5], products[0]];
  const Block = ({ title, icon: Icon, list, tone }: any) => (
    <div className="rounded-2xl border border-line bg-white p-6">
      <h3 className={`flex items-center gap-2 font-serif text-xl`}><Icon size={19} className="text-gold-dark" /> {title}</h3>
      <div className="mt-4 space-y-3">
        {list.map((p: any, i: number) => (
          <div key={p.id} className="flex items-center gap-3 rounded-xl bg-cream/70 p-3">
            <span className="font-serif text-lg text-gold-dark">0{i + 1}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}<img src={p.image} alt={p.name} className="h-12 w-12 rounded-lg object-cover" />
            <div className="flex-1"><p className="text-sm font-semibold">{["Cleanser", "Serum", "Moisturizer", "Sunscreen"][i] ?? "Care"} — {p.name}</p><p className="flex items-center gap-1 text-xs text-muted"><Clock size={11} /> {i === 0 ? "60 seconds" : "Pea-sized amount"} · {taka(p.price)}</p></div>
            <button onClick={() => addToCart(p)} className="rounded-full bg-cocoa px-3 py-1.5 text-[11px] uppercase tracking-wider text-ivory">Add</button>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div>
      <h1 className="h-serif text-3xl">My Skincare Routine</h1>
      <p className="mt-1 text-sm text-muted">Matched to Combination · Acne · Beginner</p>
      <div className="mt-5 grid gap-4 lg:grid-cols-2">
        <Block title="Morning Ritual" icon={Sun} list={morning} />
        <Block title="Night Ritual" icon={MoonStar} list={night} />
      </div>
    </div>
  );
}
