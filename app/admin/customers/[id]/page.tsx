import Link from "next/link";
import { notFound } from "next/navigation";
import { customers, orders } from "@/data/extras";
import { taka } from "@/lib/utils";

export default function CustomerDetail({ params }: { params: { id: string } }) {
  const c = customers.find((x) => x.id === params.id);
  if (!c) return notFound();
  const co = orders.filter((o) => o.customer === c.name);
  return (
    <div>
      <Link href="/admin/customers" className="text-sm text-muted">← All customers</Link>
      <div className="mt-3 flex items-center gap-4 rounded-2xl border border-line bg-ivory p-6"><span className="flex h-14 w-14 items-center justify-center rounded-full bg-cocoa font-bold text-gold">{c.avatar}</span><div><h1 className="font-serif text-2xl">{c.name}</h1><p className="text-sm text-muted">{c.email} · {c.phone} · {c.city} · {c.skinType} skin</p></div><div className="ml-auto text-right"><p className="font-serif text-2xl">{taka(c.spent)}</p><p className="text-xs text-muted">{c.orders} orders</p></div></div>
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <div className="rounded-2xl border border-line bg-ivory p-5"><h3 className="font-semibold">Orders ({co.length || c.orders})</h3>{(co.length ? co : orders.slice(0, 3)).map((o) => <div key={o.id} className="mt-2 flex justify-between border-b border-line/60 py-2 text-sm"><span>#{o.id} · {o.date}</span><span className="font-medium">{taka(o.total)} · {o.status}</span></div>)}</div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-line bg-ivory p-5 text-sm"><h3 className="font-semibold">Skin Profile</h3><p className="mt-1 text-muted">Type: {c.skinType} · Concerns: Acne, Dullness · Prefers fragrance-free</p></div>
          <div className="rounded-2xl border border-line bg-ivory p-5 text-sm"><h3 className="font-semibold">Wishlist & Addresses</h3><p className="mt-1 text-muted">4 wishlist items · Default: Dhanmondi, Dhaka</p></div>
        </div>
      </div>
    </div>
  );
}
