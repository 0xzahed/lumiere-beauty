"use client";
import { useStore } from "@/lib/store";
export default function SettingsPage() {
  const { toast } = useStore();
  return (
    <div><h1 className="h-serif text-3xl">Settings</h1><div className="mt-5 max-w-xl space-y-4 rounded-2xl border border-line bg-white p-6">
      <div><label className="label-luxe">Full Name</label><input defaultValue="Sarah Khan" className="input-luxe" /></div>
      <div className="grid grid-cols-2 gap-3"><div><label className="label-luxe">Email</label><input defaultValue="sarah@gmail.com" className="input-luxe" /></div><div><label className="label-luxe">Phone</label><input defaultValue="01711-234567" className="input-luxe" /></div></div>
      <label className="flex items-center justify-between text-sm">SMS order updates <input type="checkbox" defaultChecked className="h-5 w-5 accent-[#352824]" /></label>
      <label className="flex items-center justify-between text-sm">Beauty newsletter <input type="checkbox" defaultChecked className="h-5 w-5 accent-[#352824]" /></label>
      <button onClick={() => toast("Profile updated")} className="btn-primary w-full">Save Changes</button>
    </div></div>
  );
}
