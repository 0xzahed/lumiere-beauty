import Link from "next/link";
import { articles } from "@/data/extras";
export default function JournalAdmin() {
  return (
    <div>
      <div className="flex items-center justify-between"><h1 className="font-serif text-3xl">Beauty Journal</h1><button className="rounded-full bg-cocoa px-5 py-2.5 text-xs uppercase tracking-widest text-ivory">+ New Article</button></div>
      <div className="mt-4 space-y-3">{articles.map((a) => <div key={a.slug} className="flex items-center gap-4 rounded-2xl border border-line bg-ivory p-4">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={a.image} alt="" className="h-14 w-20 rounded-lg object-cover" /><div className="flex-1"><p className="font-medium">{a.title}</p><p className="text-xs text-muted">{a.category} · {a.date}</p></div><Link href={`/blog/${a.slug}`} className="text-xs underline underline-offset-4">View</Link></div>)}</div>
    </div>
  );
}
