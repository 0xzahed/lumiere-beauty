import Link from "next/link";
import { notFound } from "next/navigation";
import { Check, ArrowLeft } from "lucide-react";
import { orders } from "@/data/extras";
import { taka } from "@/lib/utils";
import { StatusBadge } from "@/components/ui";

const STEPS = ["Order Placed", "Confirmed", "Processing", "Shipped", "Delivered"];
export default function OrderDetail({ params }: { params: { id: string } }) {
  const o = orders.find((x) => x.id === params.id);
  if (!o) return notFound();
  const idx = o.status === "Pending" ? 1 : o.status === "Processing" ? 2 : o.status === "Shipped" ? 3 : o.status === "Delivered" ? 4 : 1;
  return (
    <div>
      <Link href="/account/orders" className="inline-flex items-center gap-1 text-sm text-muted hover:text-cocoa"><ArrowLeft size={15} /> Back to orders</Link>
      <div className="mt-3 flex flex-wrap items-center justify-between gap-3"><h1 className="h-serif text-3xl">Order #{o.id}</h1><StatusBadge status={o.status} /></div>
      <div className="mt-5 rounded-2xl border border-line bg-white p-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          {STEPS.map((s, i) => (
            <div key={s} className="flex flex-1 items-center gap-2">
              <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${i <= idx ? "bg-cocoa text-ivory" : "bg-cream text-muted"}`}>{i <= idx ? <Check size={15} /> : <span className="h-2 w-2 rounded-full bg-current" />}</span>
              <span className={`text-xs font-medium ${i <= idx ? "text-cocoa" : "text-muted"}`}>{s}</span>
              {i < 4 && <span className="mx-1 hidden h-px flex-1 bg-line sm:block" />}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-4 grid gap-4 lg:grid-cols-[1fr_300px]">
        <div className="rounded-2xl border border-line bg-white p-6">
          <h3 className="font-serif text-xl">Items</h3>
          <div className="mt-3 space-y-3">{o.items.map((it, i) => <div key={i} className="flex justify-between text-sm"><span>{it.name} × {it.qty}</span><span className="font-medium">{taka(it.price * it.qty)}</span></div>)}</div>
          <div className="mt-4 space-y-1.5 border-t border-line pt-4 text-sm"><div className="flex justify-between text-muted"><span>Subtotal</span><span>{taka(o.subtotal)}</span></div><div className="flex justify-between text-muted"><span>Discount</span><span>− {taka(o.discount)}</span></div><div className="flex justify-between text-muted"><span>Delivery</span><span>{taka(o.delivery)}</span></div><div className="flex justify-between font-bold text-base"><span>Total</span><span>{taka(o.total)}</span></div></div>
        </div>
        <div className="space-y-4">
          <div className="rounded-2xl border border-line bg-white p-6 text-sm"><h3 className="font-serif text-lg">Delivery</h3><p className="mt-2">{o.customer}<br />{o.address}<br />{o.city}<br />{o.phone}</p></div>
          <div className="rounded-2xl border border-line bg-white p-6 text-sm"><h3 className="font-serif text-lg">Payment</h3><p className="mt-2">{o.payment} · {o.date}</p></div>
        </div>
      </div>
    </div>
  );
}
