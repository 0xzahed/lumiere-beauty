"use client";
import { useState } from "react";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check, Sparkles, Heart, Truck, ShieldCheck, CreditCard, RotateCcw, Headset, FlaskConical, Droplets, Sun, Layers } from "lucide-react";
import { products, categories, concerns, ingredients, HERO_IMG, FEATURED_IMG } from "@/data/products";
import { articles, reviews } from "@/data/extras";
import { taka } from "@/lib/utils";
import { useStore } from "@/lib/store";
import ProductCard from "./ProductCard";
import { SectionHead, Stars, Badge } from "./ui";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-ivory via-blush/50 to-sage/40">
      <div className="pointer-events-none absolute -right-24 -top-24 h-[420px] w-[420px] rounded-full bg-nude/50 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-[360px] w-[360px] rounded-full bg-blush blur-3xl" />
      <div className="container-luxe grid items-center gap-10 py-14 lg:grid-cols-2 lg:py-20">
        <div className="fade-up">
          <p className="eyebrow inline-flex items-center gap-2 rounded-full border border-gold/30 bg-white/70 px-4 py-2"><Sparkles size={13} /> New: Barrier-first skincare rituals</p>
          <h1 className="h-serif mt-5 text-[42px] leading-[1.05] text-cocoa sm:text-6xl lg:text-[68px]">Your Skin.<br /><em className="text-gold-dark not-italic font-medium">Your Ritual.</em><br />Your Glow.</h1>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-muted">Thoughtfully selected skincare and beauty essentials for your everyday glow.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/shop?filter=best" className="btn-primary">Shop Best Sellers <ArrowRight size={15} /></Link>
            <Link href="#routine" className="btn-secondary">Discover Your Routine</Link>
          </div>
          <div className="mt-8 flex items-center gap-5 text-sm">
            <div className="flex -space-x-2">{["NJ", "PS", "SK", "MH"].map((a) => <span key={a} className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-ivory bg-nude text-[11px] font-semibold text-cocoa">{a}</span>)}</div>
            <div><Stars value={5} size={13} /><p className="mt-0.5 text-muted"><b className="text-cocoa">4.9/5</b> from 12,400+ reviews</p></div>
          </div>
        </div>
        <div className="relative">
          <div className="overflow-hidden rounded-t-[160px] rounded-b-2xl border-[6px] border-white shadow-lift">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={HERO_IMG} alt="Premium skincare ritual" className="aspect-[4/5] w-full object-cover" />
          </div>
          <div className="absolute -left-4 top-10 animate-fadeUp rounded-xl border border-line bg-white/95 p-4 shadow-lift backdrop-blur sm:-left-8">
            <p className="text-[11px] uppercase tracking-widest text-muted">Featured</p>
            <p className="font-serif text-lg">Glow Barrier Cream</p>
            <p className="text-sm font-semibold text-gold-dark">৳1,290 · ★ 4.9</p>
          </div>
          <div className="absolute -right-3 bottom-10 rounded-xl border border-line bg-white/95 p-4 shadow-lift backdrop-blur sm:-right-6">
            <p className="flex items-center gap-2 text-sm font-medium"><ShieldCheck size={16} className="text-emerald-600" /> 100% Authentic</p>
            <p className="text-xs text-muted">Sourced directly from brands</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function CategoryGrid() {
  return (
    <section className="container-luxe py-16">
      <SectionHead eyebrow="Curated for you" title="Shop by Category" sub="Six edits, one glow — explore skincare, makeup and beyond." />
      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-3">
        {categories.map((c) => (
          <Link key={c.id} href={`/shop?category=${encodeURIComponent(c.name)}`} className="group relative overflow-hidden rounded-xl bg-cream">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={c.image} alt={c.name} loading="lazy" className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-cocoa/70 via-cocoa/10 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
              <div><h3 className="font-serif text-xl text-white sm:text-2xl">{c.name}</h3><p className="text-[13px] text-white/75">{c.description} · {c.count} products</p></div>
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ivory text-cocoa transition group-hover:translate-x-1 group-hover:bg-gold group-hover:text-white"><ArrowRight size={17} /></span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function BestSellers() {
  const best = products.filter((p) => p.isBestSeller || p.badge).slice(0, 8);
  return (
    <section className="bg-cream/60 py-16">
      <div className="container-luxe">
        <SectionHead eyebrow="Customer favourites" title="Loved by Thousands" sub="Discover the products our customers keep coming back for." />
        <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {best.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
        <div className="mt-10 text-center"><Link href="/shop" className="btn-secondary">View All Products <ArrowRight size={15} /></Link></div>
      </div>
    </section>
  );
}

export function ConcernSection() {
  return (
    <section className="container-luxe py-16">
      <SectionHead eyebrow="Personalised care" title="Find What Your Skin Needs" sub="Shop by concern — targeted solutions, dermat-reviewed." />
      <div className="mt-10 grid grid-cols-2 gap-4 lg:grid-cols-4">
        {concerns.map((c) => (
          <Link key={c.slug} href={`/shop?concern=${encodeURIComponent(c.name)}`} className="group overflow-hidden rounded-xl border border-line bg-white shadow-card transition hover:shadow-lift">
            <div className="overflow-hidden">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={c.image} alt={c.name} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" /></div>
            <div className="flex items-center justify-between p-4">
              <div><h3 className="font-serif text-lg text-cocoa">{c.name}</h3><p className="text-[13px] text-muted line-clamp-1">{c.description}</p></div>
              <ArrowUpRight size={18} className="shrink-0 text-gold-dark transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

const SKIN_TYPES = ["Dry", "Oily", "Combination", "Normal", "Sensitive"];
const CONCERNS = ["Acne", "Dark Spots", "Dryness", "Dullness", "Aging", "Redness"];
const LEVELS = ["Beginner", "Intermediate", "Advanced"];

export function RoutineBuilder() {
  const { addToCart, toast } = useStore();
  const [step, setStep] = useState(0);
  const [skin, setSkin] = useState("");
  const [concern, setConcern] = useState("");
  const [level, setLevel] = useState("");
  const [done, setDone] = useState(false);
  const recs = (() => {
    const pick = (names: string[]) => products.filter((p) => names.includes(p.slug));
    if (!done) return null;
    const map: Record<string, string[]> = {
      Acne: ["gentle-foam-cleanser", "salicylic-clarifying-serum", "water-gel-moisturizer", "invisible-sunscreen-spf50"],
      "Dark Spots": ["ceramide-cleansing-balm", "vitamin-c-glow-serum", "glow-barrier-cream", "invisible-sunscreen-spf50"],
      Dryness: ["ceramide-cleansing-balm", "hyaluronic-hydra-serum", "glow-barrier-cream", "invisible-sunscreen-spf50"],
      Dullness: ["gentle-foam-cleanser", "vitamin-c-glow-serum", "glow-barrier-cream", "invisible-sunscreen-spf50"],
      Aging: ["gentle-foam-cleanser", "retinol-renewal-02", "peptide-eye-cream", "glow-barrier-cream"],
      Redness: ["gentle-foam-cleanser", "azelaic-even-tone", "oat-calm-moisturizer", "invisible-sunscreen-spf50"],
    };
    return pick(map[concern] ?? ["gentle-foam-cleanser", "niacinamide-10-serum", "glow-barrier-cream", "invisible-sunscreen-spf50"]);
  })();
  const chip = (active: boolean) => `rounded-full border px-5 py-2.5 text-sm transition ${active ? "border-cocoa bg-cocoa text-ivory" : "border-line bg-white hover:border-cocoa"}`;
  return (
    <section id="routine" className="bg-cocoa py-16 text-ivory">
      <div className="container-luxe grid gap-10 lg:grid-cols-2">
        <div>
          <p className="eyebrow !text-gold-light">Interactive guide</p>
          <h2 className="h-serif mt-3 text-3xl sm:text-4xl lg:text-[44px] leading-tight">Build Your Perfect Routine</h2>
          <p className="mt-3 text-ivory/70">Answer 3 quick questions — get a dermat-inspired AM/PM ritual matched to <b className="text-ivory">{skin || "your skin"}</b>.</p>
          <div className="mt-6 flex gap-2">{[0, 1, 2, 3].map((i) => <span key={i} className={`h-1.5 flex-1 rounded-full ${i <= step ? "bg-gold" : "bg-ivory/20"}`} />)}</div>
          {!done ? (
            <div className="mt-6 rounded-2xl bg-ivory p-6 text-cocoa sm:p-8">
              {step === 0 && (<><h3 className="font-serif text-2xl">What&apos;s your skin type?</h3><div className="mt-4 flex flex-wrap gap-2">{SKIN_TYPES.map((s) => <button key={s} onClick={() => setSkin(s)} className={chip(skin === s)}>{s}</button>)}</div></>)}
              {step === 1 && (<><h3 className="font-serif text-2xl">What&apos;s your main concern?</h3><div className="mt-4 flex flex-wrap gap-2">{CONCERNS.map((s) => <button key={s} onClick={() => setConcern(s)} className={chip(concern === s)}>{s}</button>)}</div></>)}
              {step === 2 && (<><h3 className="font-serif text-2xl">How experienced are you?</h3><div className="mt-4 flex flex-wrap gap-2">{LEVELS.map((s) => <button key={s} onClick={() => setLevel(s)} className={chip(level === s)}>{s}</button>)}</div></>)}
              <div className="mt-6 flex gap-3">
                {step > 0 && <button onClick={() => setStep(step - 1)} className="btn-secondary">Back</button>}
                <button
                  onClick={() => { if (step < 2) setStep(step + 1); else { if (!skin || !concern || !level) return toast("Please answer all steps", "error"); setDone(true); setStep(3); } }}
                  className="btn-primary flex-1">{step === 2 ? "See My Routine" : "Continue"} <ArrowRight size={15} /></button>
              </div>
            </div>
          ) : (
            <div className="mt-6 rounded-2xl bg-ivory p-6 text-cocoa sm:p-8 animate-fadeUp">
              <h3 className="font-serif text-2xl">Your Recommended Routine</h3>
              <p className="text-sm text-muted">{skin} · {concern} · {level}</p>
              <div className="mt-4 grid gap-2 sm:grid-cols-2">
                <div className="rounded-xl bg-blush/60 p-4"><p className="text-xs font-semibold uppercase tracking-widest">Morning</p><p className="mt-2 text-sm">Cleanser ↓ Serum ↓ Moisturizer ↓ Sunscreen</p></div>
                <div className="rounded-xl bg-sage/70 p-4"><p className="text-xs font-semibold uppercase tracking-widest">Night</p><p className="mt-2 text-sm">Cleanser ↓ Treatment ↓ Moisturizer</p></div>
              </div>
              <button onClick={() => setDone(false)} className="mt-3 text-xs underline underline-offset-4">Retake quiz</button>
            </div>
          )}
        </div>
        <div className="rounded-2xl bg-ivory/10 p-6 backdrop-blur">
          <h4 className="text-sm uppercase tracking-[0.2em] text-gold-light">Recommended for you</h4>
          {!recs ? <p className="mt-4 text-ivory/60 text-sm">Complete the quiz to unlock your matched products.</p> : (
            <div className="mt-4 space-y-3">
              {recs.map((p, i) => (
                <div key={p.id} className="flex items-center gap-3 rounded-xl bg-ivory p-3 text-cocoa">
                  <span className="font-serif text-lg text-gold-dark">0{i + 1}</span>
                  {/* eslint-disable-next-line @next/next/no-img-element */}<img src={p.image} alt={p.name} className="h-14 w-14 rounded-lg object-cover" />
                  <div className="flex-1"><p className="text-sm font-semibold">{p.name}</p><p className="text-xs text-muted">{taka(p.price)}</p></div>
                  <button onClick={() => addToCart(p)} className="rounded-full bg-cocoa px-4 py-2 text-xs uppercase tracking-wider text-ivory hover:bg-ink">Add</button>
                </div>
              ))}
              <button onClick={() => { recs.forEach((p) => addToCart(p)); toast("Complete routine added to bag"); }} className="btn-gold w-full">Add Complete Routine to Bag</button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function IngredientSpotlight() {
  return (
    <section className="container-luxe py-16">
      <SectionHead eyebrow="Learn & glow" title="Know Your Ingredients" sub="No jargon — just what works, for whom, and why." />
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {ingredients.slice(0, 5).map((ing, i) => (
          <div key={ing.name} className={`rounded-2xl border border-line p-6 transition hover:shadow-lift hover:-translate-y-1 ${i % 2 ? "bg-sage/40" : "bg-blush/40"}`}>
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-white shadow-card"><FlaskConical size={19} className="text-cocoa" /></span>
            <h3 className="h-serif mt-4 text-xl text-cocoa">{ing.name}</h3>
            <p className="text-[13px] font-medium text-gold-dark">{ing.tagline}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-muted">{ing.description}</p>
            <ul className="mt-3 space-y-1">{ing.benefits.slice(0, 2).map((b) => <li key={b} className="flex items-center gap-1.5 text-[13px]"><Check size={13} className="text-emerald-600" />{b}</li>)}</ul>
            <Link href="/shop" className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-widest text-cocoa hover:text-gold-dark">Shop ingredient <ArrowRight size={13} /></Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export function FeaturedProduct() {
  const { addToCart } = useStore();
  const p = products[0];
  return (
    <section className="bg-cream/70 py-16">
      <div className="container-luxe grid items-center gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl shadow-lift">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={FEATURED_IMG} alt={p.name} className="aspect-[4/3] w-full object-cover" /></div>
        <div>
          <p className="eyebrow">Featured favourite</p>
          <h2 className="h-serif mt-2 text-4xl sm:text-5xl">{p.name}</h2>
          <div className="mt-3 flex items-center gap-2"><Stars value={p.rating} /><span className="text-sm font-medium">{p.rating}</span><span className="text-sm text-muted">· 326 reviews</span></div>
          <p className="mt-3 text-2xl font-semibold">{taka(p.price)} <span className="text-base font-normal text-muted line-through">{taka(p.compareAt!)}</span> <Badge tone="blush">20% off</Badge></p>
          <p className="h-serif mt-4 text-xl italic text-cocoa/80">Deeply hydrating. Lightweight. Barrier-friendly.</p>
          <ul className="mt-5 grid gap-2 sm:grid-cols-2">{p.benefits.map((b) => <li key={b} className="flex items-center gap-2 text-sm"><span className="flex h-6 w-6 items-center justify-center rounded-full bg-sage"><Check size={14} /></span>{b}</li>)}</ul>
          <div className="mt-7 flex flex-wrap gap-3"><button onClick={() => addToCart(p)} className="btn-primary flex-1 sm:flex-none sm:px-12">Add to Bag</button><Link href={`/products/${p.slug}`} className="btn-secondary flex-1 sm:flex-none">Buy Now</Link></div>
        </div>
      </div>
    </section>
  );
}

export function ReviewSection() {
  const [filter, setFilter] = useState("All");
  const list = reviews.filter((r) => r.featured).filter((r) => filter === "All" || r.skinType === filter).slice(0, 4);
  return (
    <section className="container-luxe py-16">
      <SectionHead eyebrow="Community love" title="Real Skin. Real Stories." />
      <div className="mt-6 flex justify-center gap-2 flex-wrap">{["All", "Dry", "Oily", "Combination", "Sensitive"].map((f) => <button key={f} onClick={() => setFilter(f)} className={`rounded-full border px-4 py-2 text-xs uppercase tracking-widest ${filter === f ? "border-cocoa bg-cocoa text-ivory" : "border-line bg-white"}`}>{f === "All" ? "All" : `${f} Skin`}</button>)}</div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((r) => (
          <figure key={r.id} className="rounded-2xl border border-line bg-white p-6 shadow-card">
            <Stars value={r.rating} />
            <blockquote className="mt-3 text-sm leading-relaxed text-cocoa/85">“{r.body}”</blockquote>
            <figcaption className="mt-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-blush text-xs font-bold">{r.avatar}</span>
              <div><p className="text-sm font-semibold">{r.customer}</p><p className="flex items-center gap-1 text-xs text-muted"><Check size={11} className="text-emerald-600" /> Verified · {r.productName}</p></div>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export function Gallery() {
  const imgs = [products[0].image, products[2].image, products[7].image, products[13].image, products[17].image, products[20].image];
  return (
    <section className="bg-cream/60 py-16">
      <div className="container-luxe">
        <SectionHead eyebrow="@lumierebeauty" title="Glow With Us" sub="Routines, textures and real-life glow — from our community." />
        <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {imgs.map((src, i) => (
            <div key={i} className="group relative overflow-hidden rounded-xl">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={src} alt="Community glow" loading="lazy" className="aspect-square w-full object-cover transition duration-700 group-hover:scale-108 group-hover:scale-105" />
              <div className="absolute inset-0 flex flex-col items-center justify-center gap-1 bg-cocoa/60 opacity-0 transition group-hover:opacity-100"><Heart size={20} className="text-white" fill="currentColor" /><span className="px-3 text-center text-xs text-white/90">Morning ritual ✨</span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function JournalPreview() {
  return (
    <section className="container-luxe py-16">
      <div className="flex items-end justify-between"><div><p className="eyebrow">Beauty journal</p><h2 className="h-serif mt-2 text-3xl sm:text-4xl">Learn, Ritual, Repeat</h2></div><Link href="/blog" className="hidden sm:inline-flex items-center gap-1 text-sm font-medium link-underline">All articles <ArrowRight size={15} /></Link></div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.slice(0, 3).map((a) => (
          <Link key={a.slug} href={`/blog/${a.slug}`} className="group overflow-hidden rounded-2xl border border-line bg-white shadow-card hover:shadow-lift transition">
            <div className="overflow-hidden">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={a.image} alt={a.title} loading="lazy" className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" /></div>
            <div className="p-6"><Badge tone="sage">{a.category}</Badge><h3 className="h-serif mt-2 text-xl leading-snug">{a.title}</h3><p className="mt-2 text-sm text-muted line-clamp-2">{a.excerpt}</p><span className="mt-4 inline-flex items-center gap-1 text-[12px] font-semibold uppercase tracking-widest text-gold-dark">Read article <ArrowRight size={13} /></span></div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function BundleOffer() {
  const { addToCart } = useStore();
  const bundle = [products[1], products[2], products[0]];
  return (
    <section className="container-luxe pb-16">
      <div className="grid overflow-hidden rounded-3xl bg-gradient-to-br from-blush via-ivory to-sage lg:grid-cols-2">
        <div className="p-8 sm:p-12">
          <p className="eyebrow">Limited bundle</p>
          <h2 className="h-serif mt-2 text-4xl sm:text-5xl">Glow More,<br />Save More.</h2>
          <p className="mt-3 text-muted">Cleanser + Serum + Moisturizer — the complete starter ritual.</p>
          <div className="mt-6 flex items-center gap-3 text-lg"><span className="font-serif text-3xl font-semibold">৳2,750</span><span className="line-through text-muted">৳3,200</span><Badge tone="dark">Save ৳450</Badge></div>
          <div className="mt-6 flex gap-3 flex-wrap">
            <button onClick={() => bundle.forEach((p) => addToCart(p))} className="btn-primary">Shop Bundle</button>
            <Link href="/shop" className="btn-secondary !border-cocoa/30">Explore More</Link>
          </div>
        </div>
        <div className="flex items-center gap-4 bg-white/50 p-8">
          {bundle.map((p, i) => (
            <div key={p.id} className="flex flex-1 flex-col items-center text-center">
              {/* eslint-disable-next-line @next/next/no-img-element */}<img src={p.image} alt={p.name} className="aspect-square w-full rounded-2xl object-cover shadow-card" />
              <p className="mt-2 text-xs font-medium">{p.name}</p>
              {i < 2 && <span className="mt-1 text-xl font-light text-gold-dark">+</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const items = [
    { icon: Truck, t: "Fast Delivery", s: "Across Bangladesh" },
    { icon: ShieldCheck, t: "Authentic Products", s: "100% Genuine" },
    { icon: CreditCard, t: "Secure Payment", s: "Safe Checkout" },
    { icon: RotateCcw, t: "Easy Returns", s: "Simple Return Policy" },
    { icon: Headset, t: "Beauty Support", s: "We're Here to Help" },
  ];
  return (
    <section className="border-t border-line bg-white">
      <div className="container-luxe grid grid-cols-2 gap-6 py-10 lg:grid-cols-5">
        {items.map((x) => <div key={x.t} className="flex items-center gap-3"><span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-blush"><x.icon size={20} className="text-cocoa" /></span><div><p className="text-sm font-semibold">{x.t}</p><p className="text-xs text-muted">{x.s}</p></div></div>)}
      </div>
    </section>
  );
}
