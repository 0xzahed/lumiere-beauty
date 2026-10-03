import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "@/data/extras";
import { Badge } from "@/components/ui";
import { ArrowLeft } from "lucide-react";

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const a = articles.find((x) => x.slug === params.slug);
  if (!a) return notFound();
  return (
    <article className="container-luxe max-w-3xl py-10">
      <Link href="/blog" className="inline-flex items-center gap-1 text-sm link-underline"><ArrowLeft size={15} /> All articles</Link>
      <Badge tone="sage">{a.category}</Badge>
      <h1 className="h-serif mt-3 text-4xl sm:text-5xl leading-tight">{a.title}</h1>
      <p className="mt-3 text-sm text-muted">{a.author} · {a.date} · {a.readTime}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}<img src={a.image} alt={a.title} className="mt-6 aspect-[16/9] w-full rounded-2xl object-cover" />
      <p className="mt-6 font-serif text-xl italic leading-relaxed text-cocoa/80">{a.excerpt}</p>
      <div className="mt-4 space-y-4 text-[16px] leading-relaxed text-cocoa/85">
        <p>Great skincare does not need ten steps. It needs the right steps, done consistently. Whether you are dealing with breakouts in humid Dhaka weather or winter dryness, the principles stay the same — cleanse gently, treat with one active at a time, moisturize to seal, and protect with SPF every single morning.</p>
        {a.content.map((p, i) => <p key={i}>{p} Layer thin to thick, wait a minute between actives, and give any new product at least 3–4 weeks before judging. Your barrier will thank you.</p>)}
        <div className="rounded-2xl bg-blush/50 p-6"><p className="font-serif text-xl">Try this routine</p><p className="mt-1 text-sm">Cloud Cleanser → Niacinamide Serum → Glow Barrier Cream → Invisible SPF 50+. <Link href="/shop" className="font-semibold underline underline-offset-4">Shop the ritual →</Link></p></div>
      </div>
    </article>
  );
}
