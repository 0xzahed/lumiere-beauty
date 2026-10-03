"use client";
import Link from "next/link";
import { useStore } from "@/lib/store";
export default function Page() {
  const { toast } = useStore();
  return (
    <div className="container-luxe max-w-md py-16 text-center">
      <h1 className="h-serif text-4xl">Reset password</h1>
      <p className="mt-2 text-muted">Enter your email — we will send a reset link.</p>
      <input className="input-luxe mt-6" placeholder="you@email.com" aria-label="Email" />
      <button onClick={() => toast("Reset link sent to your email")} className="btn-primary mt-4 w-full">Send Reset Link</button>
      <Link href="/login" className="mt-4 inline-block text-sm underline underline-offset-4">Back to login</Link>
    </div>
  );
}
