import Link from "next/link";
import { articles } from "@/data/extras";
import { Badge } from "@/components/ui";

export default function BlogPage() {
  return (
    <div className="container-luxe py-10">
      <p className="eyebrow">Beauty journal</p>
      <h1 className="h-serif mt-2 text-4xl sm:text-5xl">Stories & Rituals</h1>
      <p className="mt-3 max-w-xl text-muted">Skincare education, ingredient deep-dives and honest guides — written simply.</p>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((a) => (
          <Link key={a.slug} href={`/blog/${a.slug}`} className="group overflow-hidden rounded-2xl border border-line bg-white shadow-card hover:shadow-lift transition">
            <div className="overflow-hidden">{/* eslint-disable-next-line @next/next/no-img-element */}<img src={a.image} alt={a.title} className="aspect-[16/10] w-full object-cover transition duration-700 group-hover:scale-105" /></div>
            <div className="p-6"><Badge tone="sage">{a.category}</Badge><h2 className="h-serif mt-2 text-[22px] leading-snug">{a.title}</h2><p className="mt-2 text-sm text-muted line-clamp-2">{a.excerpt}</p><p className="mt-3 text-xs text-muted">{a.author} · {a.date} · {a.readTime}</p></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
