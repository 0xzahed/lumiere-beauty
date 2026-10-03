"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Heart, User, ShoppingBag, Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { useStore } from "@/lib/store";

const NAV = [
  { label: "Shop", href: "/shop" },
  { label: "Skincare", href: "/shop?category=Skincare" },
  { label: "Makeup", href: "/shop?category=Makeup" },
  { label: "Body Care", href: "/shop?category=Body Care" },
  { label: "Best Sellers", href: "/shop?filter=best" },
  { label: "New Arrivals", href: "/shop?filter=new" },
  { label: "Beauty Journal", href: "/blog" },
];

export default function Header() {
  const { cartCount, wishlist, setSearchOpen, setCartOpen } = useStore();
  const [mobile, setMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", f);
    return () => window.removeEventListener("scroll", f);
  }, []);
  useEffect(() => setMobile(false), [pathname]);
  if (pathname?.startsWith("/admin")) return null;
  return (
    <>
      <div className="bg-cocoa px-4 py-2 text-center text-[12px] tracking-wide text-ivory">
        <span className="inline-flex items-center gap-1.5"><Sparkles size={13} className="text-gold" /> Free Delivery on Orders Over ৳1,500 <span className="hidden sm:inline text-ivory/60">· Use code GLOW10 for 10% off</span></span>
      </div>
      <header className={`sticky top-0 z-40 border-b border-line bg-ivory/90 backdrop-blur-md transition-shadow ${scrolled ? "shadow-card" : ""}`}>
        <div className="container-luxe flex h-[68px] items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <button className="lg:hidden p-2 -ml-2" onClick={() => setMobile(true)} aria-label="Menu"><Menu size={22} /></button>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-cocoa font-serif text-lg text-gold">L</span>
              <span className="font-serif text-[22px] font-semibold tracking-[0.18em] text-cocoa">LUMIÈRE</span>
            </Link>
          </div>
          <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
            {NAV.map((n) => (
              <Link key={n.label} href={n.href} className="text-[13px] font-medium uppercase tracking-[0.1em] text-cocoa/80 transition hover:text-cocoa link-underline">{n.label}</Link>
            ))}
          </nav>
          <div className="flex items-center gap-1 sm:gap-2">
            <button onClick={() => setSearchOpen(true)} aria-label="Search" className="rounded-full p-2.5 transition hover:bg-blush"><Search size={19} /></button>
            <Link href="/account/wishlist" aria-label="Wishlist" className="relative hidden rounded-full p-2.5 transition hover:bg-blush sm:block">
              <Heart size={19} />
              {wishlist.length > 0 && <span className="absolute right-1 top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-cocoa px-1 text-[10px] text-ivory">{wishlist.length}</span>}
            </Link>
            <Link href="/account" aria-label="Account" className="hidden rounded-full p-2.5 transition hover:bg-blush sm:block"><User size={19} /></Link>
            <button onClick={() => setCartOpen(true)} aria-label="Cart" className="relative rounded-full p-2.5 transition hover:bg-blush">
              <ShoppingBag size={19} />
              {cartCount > 0 && <span className="absolute right-0.5 top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold px-1 text-[10px] font-semibold text-white">{cartCount}</span>}
            </button>
          </div>
        </div>
      </header>
      {/* Mobile drawer */}
      <div className={`fixed inset-0 z-50 lg:hidden ${mobile ? "" : "pointer-events-none"}`}>
        <div onClick={() => setMobile(false)} className={`absolute inset-0 bg-cocoa/40 transition-opacity ${mobile ? "opacity-100" : "opacity-0"}`} />
        <aside className={`absolute left-0 top-0 flex h-full w-[300px] flex-col bg-ivory shadow-lift transition-transform duration-300 ${mobile ? "translate-x-0" : "-translate-x-full"}`}>
          <div className="flex items-center justify-between border-b border-line p-5">
            <span className="font-serif text-lg tracking-[0.2em]">LUMIÈRE</span>
            <button onClick={() => setMobile(false)} aria-label="Close"><X size={20} /></button>
          </div>
          <nav className="flex-1 overflow-auto p-5 space-y-1">
            {NAV.map((n) => <Link key={n.label} href={n.href} className="block rounded-lg px-3 py-3 text-[15px] font-medium text-cocoa hover:bg-blush">{n.label}</Link>)}
            <div className="my-3 border-t border-line" />
            <Link href="/account" className="block rounded-lg px-3 py-3 text-[15px] text-cocoa hover:bg-blush">My Account</Link>
            <Link href="/account/wishlist" className="block rounded-lg px-3 py-3 text-[15px] text-cocoa hover:bg-blush">Wishlist</Link>
            <Link href="/account/routine" className="block rounded-lg px-3 py-3 text-[15px] text-cocoa hover:bg-blush">My Routine</Link>
          </nav>
          <div className="border-t border-line p-5 text-sm text-muted">Free delivery over ৳1,500 · 100% authentic</div>
        </aside>
      </div>
    </>
  );
}
