"use client";
import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useStore } from "@/lib/store";

function Shell({ title, sub, children }: { title: string; sub: string; children: React.ReactNode }) {
  return (
    <div className="grid min-h-[85vh] lg:grid-cols-2">
      <div className="hidden flex-col justify-between bg-cocoa p-12 text-ivory lg:flex">
        <span className="font-serif text-xl tracking-[0.25em]">LUMIÈRE</span>
        <div><p className="eyebrow !text-gold-light">The beauty club</p><h2 className="h-serif mt-3 text-5xl leading-tight">Glow begins<br />with ritual.</h2><p className="mt-4 max-w-sm text-ivory/70">Track orders, save wishlists, earn glow points and get routines matched to your skin.</p></div>
        <p className="text-xs text-ivory/50">100% authentic · Fast delivery across Bangladesh</p>
      </div>
      <div className="flex items-center justify-center p-6 sm:p-12"><div className="w-full max-w-md"><h1 className="h-serif text-4xl">{title}</h1><p className="mt-2 text-muted">{sub}</p><div className="mt-6">{children}</div></div></div>
    </div>
  );
}

export function LoginForm() {
  const router = useRouter();
  const { toast } = useStore();
  const [email, setEmail] = useState("sarah@gmail.com");
  const [pass, setPass] = useState("password");
  return (
    <Shell title="Welcome back" sub="Log in to your glow account.">
      <label className="label-luxe" htmlFor="e">Email</label><input id="e" value={email} onChange={(e) => setEmail(e.target.value)} className="input-luxe" />
      <label className="label-luxe mt-4" htmlFor="p">Password</label><input id="p" type="password" value={pass} onChange={(e) => setPass(e.target.value)} className="input-luxe" />
      <div className="mt-3 flex justify-between text-sm"><label className="flex items-center gap-2"><input type="checkbox" defaultChecked className="accent-[#352824]" /> Remember me</label><Link href="/forgot-password" className="underline underline-offset-4">Forgot password?</Link></div>
      <button onClick={() => { toast("Welcome back, Sarah!"); router.push("/account"); }} className="btn-primary mt-6 w-full">Log In</button>
      <p className="mt-4 text-center text-sm text-muted">New here? <Link href="/register" className="font-semibold text-cocoa underline underline-offset-4">Create account</Link></p>
    </Shell>
  );
}

export function RegisterForm() {
  const router = useRouter();
  const { toast } = useStore();
  return (
    <Shell title="Join Lumière" sub="Create your beauty profile in seconds.">
      <div className="grid gap-4">
        <div><label className="label-luxe">Full Name</label><input className="input-luxe" placeholder="Sarah Khan" /></div>
        <div className="grid grid-cols-2 gap-3"><div><label className="label-luxe">Email</label><input className="input-luxe" placeholder="you@email.com" /></div><div><label className="label-luxe">Phone</label><input className="input-luxe" placeholder="01XXXXXXXXX" /></div></div>
        <div className="grid grid-cols-2 gap-3"><div><label className="label-luxe">Password</label><input type="password" className="input-luxe" placeholder="••••••••" /></div><div><label className="label-luxe">Confirm</label><input type="password" className="input-luxe" placeholder="••••••••" /></div></div>
      </div>
      <button onClick={() => { toast("Account created — welcome!"); router.push("/account"); }} className="btn-primary mt-6 w-full">Create Account</button>
      <p className="mt-4 text-center text-sm text-muted">Have an account? <Link href="/login" className="font-semibold text-cocoa underline underline-offset-4">Log in</Link></p>
    </Shell>
  );
}
