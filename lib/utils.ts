export const taka = (n: number) => `৳${n.toLocaleString("en-IN")}`;
export const cx = (...c: (string | false | null | undefined)[]) => c.filter(Boolean).join(" ");
export const discountPct = (price: number, compareAt?: number) =>
  compareAt && compareAt > price ? Math.round(((compareAt - price) / compareAt) * 100) : 0;
export const slugify = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
