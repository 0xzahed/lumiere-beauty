import Link from "next/link";
import { Facebook, Instagram, Youtube, Phone, Mail, MessageCircle, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-cocoa text-ivory/85">
      <div className="container-luxe grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.3fr]">
        <div>
          <div className="flex items-center gap-2"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory font-serif text-lg text-cocoa">L</span><span className="font-serif text-xl tracking-[0.2em] text-ivory">LUMIÈRE</span></div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/65">Thoughtfully selected skincare & beauty essentials for your everyday glow. 100% authentic, dermat-approved picks.</p>
          <div className="mt-5 flex gap-2">
            {[Instagram, Facebook, Youtube].map((I, i) => <a key={i} href="#" aria-label="Social" className="flex h-10 w-10 items-center justify-center rounded-full border border-ivory/20 transition hover:border-gold hover:text-gold"><I size={17} /></a>)}
          </div>
        </div>
        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">Shop</h4>
          <ul className="mt-4 space-y-2.5 text-sm">{["Skincare", "Makeup", "Body Care", "Best Sellers", "New Arrivals"].map((x) => <li key={x}><Link href="/shop" className="hover:text-ivory">{x}</Link></li>)}</ul>
        </div>
        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">Help</h4>
          <ul className="mt-4 space-y-2.5 text-sm">{["Contact", "FAQ", "Shipping", "Returns", "Order Tracking"].map((x) => <li key={x}><Link href="/account/orders" className="hover:text-ivory">{x}</Link></li>)}</ul>
        </div>
        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm">{["About Us", "Beauty Journal", "Careers", "Privacy", "Terms"].map((x) => <li key={x}><Link href="/blog" className="hover:text-ivory">{x}</Link></li>)}</ul>
        </div>
        <div>
          <h4 className="text-[12px] font-semibold uppercase tracking-[0.2em] text-gold">Join our beauty community</h4>
          <p className="mt-4 text-sm text-ivory/65">Skincare tips, new launches and exclusive offers.</p>
          <form className="mt-4 flex" onSubmit={(e) => e.preventDefault()}>
            <input placeholder="Your email" className="w-full bg-ivory/10 px-4 py-3 text-sm placeholder:text-ivory/40 outline-none focus:bg-ivory/15" aria-label="Email" />
            <button className="bg-gold px-5 text-[12px] font-semibold uppercase tracking-widest text-white hover:bg-gold-dark">Join</button>
          </form>
          <div className="mt-5 space-y-2 text-sm text-ivory/70">
            <p className="flex items-center gap-2"><Phone size={14} /> 09612-345678</p>
            <p className="flex items-center gap-2"><Mail size={14} /> hello@lumierebeauty.com</p>
            <p className="flex items-center gap-2"><MessageCircle size={14} /> WhatsApp: 01711-000000</p>
            <p className="flex items-center gap-2"><MapPin size={14} /> Gulshan, Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
      <div className="border-t border-ivory/15"><div className="container-luxe flex flex-col items-center justify-between gap-2 py-5 text-xs text-ivory/50 sm:flex-row"><span>© 2026 Lumière Beauty. All rights reserved.</span><span>Cash on Delivery · bKash · Nagad · Cards</span></div></div>
    </footer>
  );
}
