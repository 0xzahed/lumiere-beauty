"use client";
import { useState } from "react";
import { useStore } from "@/lib/store";

export default function AdminGeneric({ params }: any) { return null; }

export function GenericPanel({ title, sub, fields }: { title: string; sub: string; fields: string[] }) {
  const { toast } = useStore();
  const [v, setV] = useState<Record<string, string>>({});
  return (
    <div>
      <h1 className="font-serif text-3xl">{title}</h1><p className="text-sm text-muted">{sub}</p>
      <div className="mt-4 rounded-2xl border border-line bg-ivory p-6 grid gap-4 sm:grid-cols-2">
        {fields.map((f) => <div key={f} className="sm:col-span-1"><label className="label-luxe">{f}</label><input value={v[f] ?? ""} onChange={(e) => setV({ ...v, [f]: e.target.value })} className="input-luxe" placeholder={f} /></div>)}
        <div className="sm:col-span-2"><button onClick={() => toast(`${title} saved`)} className="rounded-full bg-cocoa px-8 py-3 text-xs font-semibold uppercase tracking-widest text-ivory">Save Changes</button></div>
      </div>
    </div>
  );
}
