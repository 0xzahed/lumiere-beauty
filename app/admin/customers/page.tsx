import Link from "next/link";
import { Search } from "lucide-react";
import { customers } from "@/data/extras";
import { taka } from "@/lib/utils";
import { StatusBadge } from "@/components/ui";

export default function AdminCustomers() {
  return (
    <div>
      <h1 className="font-serif text-3xl">Customers <span className="text-base text-muted">({customers.length})</span></h1>
      <div className="mt-4 flex items-center gap-2 rounded-xl border border-line bg-ivory px-4 py-3"><Search size={16} className="text-muted" /><input placeholder="Search name, email, phone..." className="w-full bg-transparent text-sm outline-none" aria-label="Search customers" /></div>
      <div className="mt-4 overflow-hidden rounded-2xl border border-line bg-ivory">
        <div className="overflow-x-auto"><table className="w-full min-w-[820px] text-left text-sm">
          <thead><tr className="border-b border-line bg-cream/60 text-xs uppercase tracking-widest text-muted"><th className="px-4 py-3">Customer</th><th className="px-4 py-3">Contact</th><th className="px-4 py-3">Orders</th><th className="px-4 py-3">Spent</th><th className="px-4 py-3">Last Order</th><th className="px-4 py-3">Status</th></tr></thead>
          <tbody>{customers.map((c) => <tr key={c.id} className="border-b border-line/60 hover:bg-cream/40"><td className="px-4 py-3"><Link href={`/admin/customers/${c.id}`} className="flex items-center gap-2.5"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-blush text-xs font-bold">{c.avatar}</span><span className="font-medium hover:underline">{c.name}</span></Link></td><td className="px-4 py-3 text-muted text-[13px]">{c.email}<br />{c.phone}</td><td className="px-4 py-3">{c.orders}</td><td className="px-4 py-3 font-semibold">{taka(c.spent)}</td><td className="px-4 py-3 text-muted">{c.lastOrder}</td><td className="px-4 py-3"><StatusBadge status={c.status} /></td></tr>)}</tbody></table></div>
      </div>
    </div>
  );
}
