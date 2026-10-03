"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Package, Heart, Star, UserRound, Sparkles, MapPin, Ticket, Bell, Settings, LogOut, Menu, X } from "lucide-react";
import { useState } from "react";

const LINKS = [
  { href: "/account", label: "Overview", icon: LayoutDashboard },
  { href: "/account/orders", label: "My Orders", icon: Package },
  { href: "/account/wishlist", label: "Wishlist", icon: Heart },
  { href: "/account/reviews", label: "My Reviews", icon: Star },
  { href: "/account/skin-profile", label: "My Skin Profile", icon: UserRound },
  { href: "/account/routine", label: "My Routine", icon: Sparkles },
  { href: "/account/addresses", label: "Addresses", icon: MapPin },
  { href: "/account/coupons", label: "Coupons & Offers", icon: Ticket },
  { href: "/account/notifications", label: "Notifications", icon: Bell },
  { href: "/account/settings", label: "Settings", icon: Settings },
];

export default function AccountLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const nav = (
    <nav className="space-y-1">
      {LINKS.map((l) => {
        const active = path === l.href;
        return <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={`flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition ${active ? "bg-cocoa text-ivory" : "text-cocoa/75 hover:bg-blush/60"}`}><l.icon size={17} />{l.label}</Link>;
      })}
      <Link href="/login" className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium text-red-600 hover:bg-red-50"><LogOut size={17} />Logout</Link>
    </nav>
  );
  return (
    <div className="container-luxe py-8">
      <div className="mb-6 flex items-center justify-between lg:hidden">
        <h1 className="font-serif text-2xl">My Account</h1>
        <button onClick={() => setOpen(!open)} className="rounded-full border border-line bg-white p-2.5" aria-label="Account menu">{open ? <X size={19} /> : <Menu size={19} />}</button>
      </div>
      {open && <div className="mb-4 rounded-2xl border border-line bg-white p-4 lg:hidden">{nav}</div>}
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 rounded-2xl border border-line bg-white p-4">
            <div className="flex items-center gap-3 rounded-xl bg-cream p-4"><span className="flex h-11 w-11 items-center justify-center rounded-full bg-cocoa text-sm font-bold text-gold">SK</span><div><p className="text-sm font-semibold">Sarah Khan</p><p className="text-xs text-muted">sarah@gmail.com</p></div></div>
            <div className="mt-3">{nav}</div>
          </div>
        </aside>
        <div className="min-w-0">{children}</div>
      </div>
    </div>
  );
}
