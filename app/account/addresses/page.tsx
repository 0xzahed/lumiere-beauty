"use client";
import { useState } from "react";
import { Plus, Pencil, Trash2 } from "lucide-react";
import { useStore } from "@/lib/store";

export default function AddressesPage() {
  const { toast } = useStore();
  const [list, setList] = useState([
    { id: 1, label: "Home", name: "Sarah Khan", addr: "House 12, Road 5, Dhanmondi, Dhaka 1205", phone: "01711-234567", def: true },
    { id: 2, label: "Office", name: "Sarah Khan", addr: "Gulshan Avenue, Gulshan 1, Dhaka", phone: "01711-234567", def: false },
  ]);
  return (
    <div>
      <div className="flex items-center justify-between"><h1 className="h-serif text-3xl">Addresses</h1><button onClick={() => toast("Address form opened")} className="btn-primary !px-5 !py-2.5 inline-flex items-center gap-1.5"><Plus size={15} /> Add Address</button></div>
      <div className="mt-5 grid gap-4 sm:grid-cols-2">
        {list.map((a) => (
          <div key={a.id} className="rounded-2xl border border-line bg-white p-6">
            <div className="flex items-center justify-between"><span className="badge-soft bg-blush text-cocoa">{a.label}</span>{a.def && <span className="badge-soft bg-sage text-cocoa">Default</span>}</div>
            <p className="mt-3 font-semibold">{a.name}</p><p className="text-sm text-muted">{a.addr}<br />{a.phone}</p>
            <div className="mt-4 flex gap-2"><button onClick={() => toast("Address editing")} className="inline-flex items-center gap-1 text-xs font-medium underline underline-offset-4"><Pencil size={12} /> Edit</button><button onClick={() => { setList(list.filter((x) => x.id !== a.id)); toast("Address removed"); }} className="inline-flex items-center gap-1 text-xs text-red-600 underline underline-offset-4"><Trash2 size={12} /> Delete</button>{!a.def && <button onClick={() => { setList(list.map((x) => ({ ...x, def: x.id === a.id }))); toast("Default address updated"); }} className="text-xs underline underline-offset-4">Set default</button>}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
