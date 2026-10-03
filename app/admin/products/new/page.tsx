"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/lib/store";

const Sec = ({ title, children }: any) => <section className="rounded-2xl border border-line bg-ivory p-6"><h2 className="font-serif text-xl">{title}</h2><div className="mt-4 grid gap-4 sm:grid-cols-2">{children}</div></section>;
const Field = ({ label, ...props }: any) => <div className={props.full ? "sm:col-span-2" : ""}><label className="label-luxe">{label}</label><input {...props} className="input-luxe" /></div>;

export default function NewProduct() {
  const router = useRouter();
  const { toast } = useStore();
  const [name, setName] = useState("");
  const save = (pub: boolean) => { toast(pub ? "Product published!" : "Draft saved"); router.push("/admin/products"); };
  return (
    <div>
      <h1 className="font-serif text-3xl">Add Product</h1>
      <p className="text-sm text-muted">Fill beauty-specific details — skin types, concerns, ingredients.</p>
      <div className="mt-5 space-y-4">
        <Sec title="Basic Information">
          <div><label className="label-luxe">Product Name</label><input value={name} onChange={(e) => setName(e.target.value)} placeholder="Glow Barrier Cream" className="input-luxe" /></div>
          <Field label="Brand" placeholder="Lumière Lab" /><Field label="Category" placeholder="Skincare" />
          <div className="sm:col-span-2"><label className="label-luxe">Description</label><textarea rows={3} className="input-luxe" placeholder="Deeply hydrating, lightweight barrier cream..." /></div>
          <Field full label="Short Description" placeholder="Deeply hydrating. Lightweight." />
        </Sec>
        <Sec title="Pricing">
          <Field label="Regular Price (৳)" placeholder="1490" type="number" /><Field label="Sale Price (৳)" placeholder="1290" type="number" /><Field label="Cost Price (৳)" placeholder="700" type="number" /><Field label="SKU" placeholder="LM-GBC-50" />
        </Sec>
        <Sec title="Inventory">
          <Field label="Stock" placeholder="150" type="number" /><Field label="Low Stock Threshold" placeholder="20" type="number" />
        </Sec>
        <Sec title="Beauty Information">
          <Field label="Skin Types (comma separated)" placeholder="Dry, Combination, Sensitive" full /><Field label="Skin Concerns" placeholder="Dryness, Barrier" full /><Field label="Key Ingredients" placeholder="Ceramides, Niacinamide" full /><Field label="Benefits" placeholder="Hydration, Barrier support" full /><div className="sm:col-span-2"><label className="label-luxe">How to Use</label><textarea rows={2} className="input-luxe" placeholder="Massage pea-sized amount AM/PM..." /></div>
        </Sec>
        <Sec title="Media & SEO">
          <div className="sm:col-span-2 rounded-xl border-2 border-dashed border-line bg-cream/50 p-8 text-center text-sm text-muted">Drag product images here or <span className="font-semibold text-cocoa underline">browse files</span> · PNG/JPG, max 5MB</div>
          <Field label="Slug" placeholder="glow-barrier-cream" /><Field label="Meta Title" placeholder="Glow Barrier Cream | Lumière" />
        </Sec>
        <div className="flex gap-3"><button onClick={() => save(false)} className="flex-1 rounded-full border border-cocoa/30 py-3.5 text-xs font-semibold uppercase tracking-widest hover:bg-cream">Save Draft</button><button onClick={() => save(true)} className="flex-1 rounded-full bg-cocoa py-3.5 text-xs font-semibold uppercase tracking-widest text-ivory hover:bg-ink">Publish Product</button></div>
      </div>
    </div>
  );
}
