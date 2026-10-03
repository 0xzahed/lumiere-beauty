"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Banknote, Smartphone, CreditCard, CheckCircle2 } from "lucide-react";
import { useStore } from "@/lib/store";
import { taka } from "@/lib/utils";

export default function CheckoutPage() {
  const { cart, subtotal, clearCart, toast } = useStore();
  const router = useRouter();
  const [form, setForm] = useState({ name: "", phone: "", email: "", address: "", area: "", city: "Dhaka", postal: "" });
  const [delivery, setDelivery] = useState<"inside" | "outside">("inside");
  const [pay, setPay] = useState("Cash on Delivery");
  const [placed, setPlaced] = useState(false);
  const deliveryFee = delivery === "inside" ? 80 : 130;
  const total = subtotal + deliveryFee;
  const set = (k: string, v: string) => setForm({ ...form, [k]: v });
  const submit = () => {
    if (!form.name || !form.phone || !form.address) return toast("Please fill name, phone and address", "error");
    setPlaced(true);
    setTimeout(() => { clearCart(); router.push("/account/orders"); }, 2200);
  };
  if (placed)
    return <div className="container-luxe py-20 text-center"><CheckCircle2 size={56} className="mx-auto text-emerald-600" /><h1 className="h-serif mt-4 text-4xl">Order placed successfully!</h1><p className="mt-2 text-muted">Thank you {form.name}. We sent confirmation to {form.phone}. Redirecting to your orders…</p></div>;
  return (
    <div className="container-luxe py-10">
      <h1 className="h-serif text-4xl">Checkout</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-6">
          <section className="rounded-2xl border border-line bg-white p-6"><h2 className="font-serif text-xl">Customer Information</h2><div className="mt-4 grid gap-4 sm:grid-cols-2"><div><label className="label-luxe" htmlFor="n">Full Name *</label><input id="n" value={form.name} onChange={(e) => set("name", e.target.value)} className="input-luxe" placeholder="Sarah Khan" /></div><div><label className="label-luxe" htmlFor="p">Phone *</label><input id="p" value={form.phone} onChange={(e) => set("phone", e.target.value)} className="input-luxe" placeholder="01XXXXXXXXX" /></div><div className="sm:col-span-2"><label className="label-luxe" htmlFor="e">Email</label><input id="e" value={form.email} onChange={(e) => set("email", e.target.value)} className="input-luxe" placeholder="you@email.com" /></div></div></section>
          <section className="rounded-2xl border border-line bg-white p-6"><h2 className="font-serif text-xl">Shipping Address</h2><div className="mt-4 grid gap-4 sm:grid-cols-2"><div className="sm:col-span-2"><label className="label-luxe">Address *</label><input value={form.address} onChange={(e) => set("address", e.target.value)} className="input-luxe" placeholder="House, Road, Area" /></div><div><label className="label-luxe">Area</label><input value={form.area} onChange={(e) => set("area", e.target.value)} className="input-luxe" placeholder="Dhanmondi" /></div><div><label className="label-luxe">City</label><select value={form.city} onChange={(e) => set("city", e.target.value)} className="input-luxe"><option>Dhaka</option><option>Chattogram</option><option>Sylhet</option><option>Khulna</option><option>Rajshahi</option><option>Barishal</option></select></div></div></section>
          <section className="rounded-2xl border border-line bg-white p-6"><h2 className="font-serif text-xl">Delivery</h2><div className="mt-4 grid gap-3 sm:grid-cols-2">{[{ v: "inside", t: "Inside Dhaka", d: "৳80 · 1–2 days" }, { v: "outside", t: "Outside Dhaka", d: "৳130 · 3–5 days" }].map((o) => <button key={o.v} onClick={() => setDelivery(o.v as never)} className={`rounded-xl border p-4 text-left ${delivery === o.v ? "border-cocoa bg-blush/40" : "border-line"}`}><p className="font-medium">{o.t}</p><p className="text-sm text-muted">{o.d}</p></button>)}</div></section>
          <section className="rounded-2xl border border-line bg-white p-6"><h2 className="font-serif text-xl">Payment</h2><div className="mt-4 grid gap-3 sm:grid-cols-2">{[{ n: "Cash on Delivery", i: Banknote }, { n: "bKash", i: Smartphone }, { n: "Nagad", i: Smartphone }, { n: "Card / Online", i: CreditCard }].map((o) => <button key={o.n} onClick={() => setPay(o.n)} className={`flex items-center gap-3 rounded-xl border p-4 text-left ${pay === o.n ? "border-cocoa bg-blush/40" : "border-line"}`}><o.i size={20} className="text-gold-dark" /><span className="font-medium text-sm">{o.n}</span></button>)}</div></section>
        </div>
        <aside className="h-fit rounded-2xl border border-line bg-white p-6 shadow-card lg:sticky lg:top-24">
          <h3 className="font-serif text-xl">Order Summary</h3>
          <div className="mt-4 space-y-3 max-h-64 overflow-auto">{cart.map((c) => <div key={c.product.id} className="flex items-center gap-3">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={c.product.image} alt="" className="h-12 w-12 rounded-lg object-cover" /><div className="flex-1 text-sm"><p className="font-medium line-clamp-1">{c.product.name}</p><p className="text-muted">× {c.qty}</p></div><p className="text-sm font-semibold">{taka(c.product.price * c.qty)}</p></div>)}</div>
          <div className="mt-4 space-y-2 border-t border-line pt-4 text-sm"><div className="flex justify-between"><span className="text-muted">Subtotal</span><span>{taka(subtotal)}</span></div><div className="flex justify-between"><span className="text-muted">Delivery</span><span>{taka(deliveryFee)}</span></div><div className="flex justify-between text-base font-bold"><span>Total</span><span>{taka(total)}</span></div></div>
          <button onClick={submit} className="btn-primary mt-5 w-full">Place Order — {taka(total)}</button>
          <p className="mt-2 text-center text-xs text-muted">100% authentic · Easy returns · Secure checkout</p>
        </aside>
      </div>
    </div>
  );
}
