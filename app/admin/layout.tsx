"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { LayoutDashboard, Package, ShoppingCart, Users, Star, FlaskConical, Ticket, Megaphone, BookOpen, Home, BarChart3, Bell, Settings, Menu, X, Boxes } from "lucide-react";

const LINKS = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/products", label: "Products", icon: Package },
  { href: "/admin/inventory", label: "Inventory", icon: Boxes },
  { href: "/admin/orders", label: "Orders", icon: ShoppingCart },
  { href: "/admin/customers", label: "Customers", icon: Users },
  { href: "/admin/reviews", label: "Reviews", icon: Star },
  { href: "/admin/routine", label: "Skin & Routine", icon: FlaskConical },
  { href: "/admin/coupons", label: "Coupons", icon: Ticket },
  { href: "/admin/journal", label: "Beauty Journal", icon: BookOpen },
  { href: "/admin/content", label: "Homepage Content", icon: Home },
  { href: "/admin/analytics", label: "Analytics", icon: BarChart3 },
  { href: "/admin/marketing", label: "Marketing", icon: Megaphone },
  { href: "/admin/settings", label: "Settings", icon: Settings },
];

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const side = (
    <nav className="space-y-0.5">
      {LINKS.map((l) => {
        const active = path === l.href;
        return <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className={`flex items-center gap-3 rounded-lg px-3.5 py-2.5 text-[13.5px] font-medium transition ${active ? "bg-cocoa text-ivory" : "text-ink/70 hover:bg-cream hover:text-ink"}`}><l.icon size={17} className={active ? "text-gold" : "text-muted"} />{l.label}</Link>;
      })}
      <Link href="/" className="mt-2 flex items-center gap-3 rounded-lg border border-line px-3.5 py-2.5 text-[13px] text-muted hover:text-ink">← View Store</Link>
    </nav>
  );
  return (
    <div className="min-h-screen w-full bg-[#F7F3ED]">
      <div className="sticky top-0 z-40 border-b border-line bg-ivory/95 backdrop-blur">
        <div className="flex h-16 w-full items-center gap-3 px-4 lg:px-8">
          <button className="lg:hidden" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X size={20} /> : <Menu size={20} />}</button>
          <Link href="/admin" className="flex items-center gap-2"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-cocoa font-serif text-gold">L</span><span className="font-serif tracking-[0.18em]">LUMIÈRE <span className="rounded bg-cocoa px-1.5 py-0.5 font-sans text-[10px] tracking-normal text-gold">ADMIN</span></span></Link>
          <div className="ml-auto flex items-center gap-2">
            <button className="relative rounded-full border border-line bg-white p-2.5" aria-label="Notifications"><Bell size={17} /><span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" /></button>
            <span className="hidden sm:flex h-9 w-9 items-center justify-center rounded-full bg-cocoa text-xs font-bold text-gold">AD</span>
          </div>
        </div>
      </div>
      {open && <div className="border-b border-line bg-ivory p-4 lg:hidden">{side}</div>}
      <div className="grid w-full gap-6 px-4 py-6 lg:grid-cols-[270px_minmax(0,1fr)] lg:px-8">
        <aside className="hidden lg:block"><div className="sticky top-24 rounded-2xl border border-line bg-ivory p-4">{side}</div></aside>
        <div className="min-w-0 w-full">{children}</div>
      </div>
    </div>
  );
}
