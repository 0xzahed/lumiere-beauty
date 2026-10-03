import { Review, Order, Customer, Coupon, Article } from "@/types";

export const reviews: Review[] = [
  { id: "r1", productId: "p1", productName: "Glow Barrier Cream", customer: "Nusrat J.", avatar: "NJ", skinType: "Combination", rating: 5, title: "Holy grail for humid weather", body: "Finally a moisturizer that hydrates without making me oily by noon. My barrier feels repaired in a week. No breakouts at all.", date: "2026-09-10", verified: true, status: "approved", featured: true },
  { id: "r2", productId: "p1", productName: "Glow Barrier Cream", customer: "Priya S.", avatar: "PS", skinType: "Dry", rating: 5, title: "Saved my winter skin", body: "My flaky cheeks are gone. Layers beautifully under sunscreen. A little goes a long way.", date: "2026-09-08", verified: true, status: "approved", featured: true },
  { id: "r3", productId: "p3", productName: "Niacinamide 10% + Zinc Serum", customer: "Tanisha R.", avatar: "TR", skinType: "Oily", rating: 5, title: "Pores visibly smaller", body: "3 weeks in and my nose pores look blurred. Oil control is real — I blot half as much now.", date: "2026-09-05", verified: true, status: "approved", featured: true },
  { id: "r4", productId: "p8", productName: "Invisible Sunscreen SPF 50+", customer: "Mim H.", avatar: "MH", skinType: "Combination", rating: 5, title: "Zero white cast, finally!", body: "As a brown skin girl I have tried everything. This truly disappears. No pilling under makeup either.", date: "2026-09-02", verified: true, status: "approved", featured: true },
  { id: "r5", productId: "p5", productName: "Hyaluronic Hydra Serum", customer: "Sarah K.", avatar: "SK", skinType: "Dry", rating: 5, title: "Glass skin in a bottle", body: "My skin drinks this up. Plump and dewy even in AC all day.", date: "2026-08-28", verified: true, status: "approved" },
  { id: "r6", productId: "p2", productName: "Cloud Gentle Foam Cleanser", customer: "Anika T.", avatar: "AT", skinType: "Sensitive", rating: 5, title: "Gentle but effective", body: "Does not sting my eyes, removes my sunscreen fully. My redness calmed down.", date: "2026-08-25", verified: true, status: "approved" },
  { id: "r7", productId: "p8", productName: "Invisible Sunscreen SPF 50+", customer: "Farah D.", avatar: "FD", skinType: "Oily", rating: 4, title: "Great, slight dew", body: "Love the finish, just need a tissue blot at noon. Otherwise perfect.", date: "2026-08-20", verified: true, status: "approved" },
  { id: "r8", productId: "p6", productName: "Retinol 0.3% Renewal Serum", customer: "Ritu M.", avatar: "RM", skinType: "Normal", rating: 5, title: "Beginner friendly", body: "No peeling at all with the sandwich method. Texture is so much smoother.", date: "2026-08-18", verified: true, status: "approved" },
  { id: "r9", productId: "p4", productName: "Vitamin C 15% Glow Serum", customer: "Dina A.", avatar: "DA", skinType: "Combination", rating: 5, title: "Glow is unreal", body: "Two weeks and my dullness lifted. No sting, no weird smell.", date: "2026-08-15", verified: true, status: "approved" },
  { id: "r10", productId: "p9", productName: "Salicylic 2% Clarifying Serum", customer: "Nabila F.", avatar: "NF", skinType: "Oily", rating: 4, title: "Cleared my chin breakouts", body: "Purged a little week one, then clear. Use only 2x a week as told.", date: "2026-08-10", verified: true, status: "approved" },
  { id: "r11", productId: "p14", productName: "Silk Skin Tint SPF 20", customer: "Ishrat J.", avatar: "IJ", skinType: "Dry", rating: 5, title: "My everyday base", body: "Looks like skin, shade range suits warm undertones. Does not cling to dry patches.", date: "2026-08-05", verified: true, status: "approved" },
  { id: "r12", productId: "p25", productName: "Ceramide Cleansing Balm", customer: "Sabrina Y.", avatar: "SY", skinType: "Combination", rating: 5, title: "Melts everything", body: "Waterproof mascara gone in seconds. Rinses clean, no film.", date: "2026-07-30", verified: true, status: "approved" },
  { id: "r13", productId: "p3", productName: "Niacinamide 10% + Zinc Serum", customer: "Keya P.", avatar: "KP", skinType: "Sensitive", rating: 4, title: "Good, start slow", body: "Strong at first, but every other day works for my sensitive skin. Marks fading.", date: "2026-07-22", verified: false, status: "pending" },
  { id: "r14", productId: "p6", productName: "Retinol 0.3% Renewal Serum", customer: "Maliha R.", avatar: "MR", skinType: "Oily", rating: 3, title: "Too early to tell", body: "Only used twice, slight dryness. Will update after a month.", date: "2026-07-20", verified: true, status: "pending" },
  { id: "r15", productId: "p10", productName: "Azelaic 10% Even Tone Cream", customer: "Tania S.", avatar: "TS", skinType: "Sensitive", rating: 5, title: "Redness gone", body: "My post-acne red marks faded so much. So gentle.", date: "2026-07-15", verified: true, status: "approved" },
  ...Array.from({ length: 20 }).map((_, i) => ({
    id: `rx${i}`, productId: "p1", productName: "Glow Barrier Cream",
    customer: ["Ayesha K.", "Riya D.", "Shreya M.", "Lamia H.", "Oishi T."][i % 5],
    avatar: ["AK", "RD", "SM", "LH", "OT"][i % 5],
    skinType: (["Dry", "Oily", "Combination", "Sensitive"] as const)[i % 4],
    rating: 4 + (i % 2), title: "Repurchased twice",
    body: "Lightweight, hydrating, perfect under makeup. Delivery was fast and packaging felt premium.",
    date: "2026-06-10", verified: true, status: "approved" as const,
  })),
];

export const customers: Customer[] = [
  { id: "cu1", name: "Sarah Khan", email: "sarah@gmail.com", phone: "01711-234567", avatar: "SK", orders: 12, spent: 18450, lastOrder: "2026-09-20", status: "active", skinType: "Combination", city: "Dhaka" },
  { id: "cu2", name: "Nusrat Jahan", email: "nusrat.j@gmail.com", phone: "01812-345678", avatar: "NJ", orders: 8, spent: 12300, lastOrder: "2026-09-18", status: "active", skinType: "Oily", city: "Dhaka" },
  { id: "cu3", name: "Priya Sharma", email: "priya.s@gmail.com", phone: "01911-456789", avatar: "PS", orders: 15, spent: 24900, lastOrder: "2026-09-19", status: "active", skinType: "Dry", city: "Chattogram" },
  { id: "cu4", name: "Tanisha Rahman", email: "tanisha.r@gmail.com", phone: "01611-567890", avatar: "TR", orders: 5, spent: 7820, lastOrder: "2026-09-12", status: "active", skinType: "Oily", city: "Sylhet" },
  { id: "cu5", name: "Mim Hossain", email: "mim.h@gmail.com", phone: "01722-678901", avatar: "MH", orders: 9, spent: 14200, lastOrder: "2026-09-15", status: "active", skinType: "Combination", city: "Dhaka" },
  { id: "cu6", name: "Anika Tabassum", email: "anika.t@gmail.com", phone: "01833-789012", avatar: "AT", orders: 3, spent: 3450, lastOrder: "2026-08-28", status: "active", skinType: "Sensitive", city: "Khulna" },
  { id: "cu7", name: "Farah Diba", email: "farah.d@gmail.com", phone: "01944-890123", avatar: "FD", orders: 7, spent: 11200, lastOrder: "2026-09-05", status: "active", skinType: "Normal", city: "Dhaka" },
  { id: "cu8", name: "Ritu Mallick", email: "ritu.m@gmail.com", phone: "01555-901234", avatar: "RM", orders: 4, spent: 6200, lastOrder: "2026-08-30", status: "inactive", skinType: "Dry", city: "Rajshahi" },
  { id: "cu9", name: "Dina Ahmed", email: "dina.a@gmail.com", phone: "01766-012345", avatar: "DA", orders: 11, spent: 19800, lastOrder: "2026-09-17", status: "active", skinType: "Combination", city: "Dhaka" },
  { id: "cu10", name: "Nabila Ferdous", email: "nabila.f@gmail.com", phone: "01877-123456", avatar: "NF", orders: 6, spent: 8940, lastOrder: "2026-09-10", status: "active", skinType: "Oily", city: "Barishal" },
  { id: "cu11", name: "Ishrat Jabin", email: "ishrat.j@gmail.com", phone: "01988-234567", avatar: "IJ", orders: 2, spent: 2180, lastOrder: "2026-08-15", status: "active", skinType: "Normal", city: "Dhaka" },
  { id: "cu12", name: "Tania Sultana", email: "tania.s@gmail.com", phone: "01699-345678", avatar: "TS", orders: 10, spent: 16500, lastOrder: "2026-09-14", status: "active", skinType: "Sensitive", city: "Chattogram" },
  { id: "cu13", name: "Keya Paul", email: "keya.p@gmail.com", phone: "01700-456789", avatar: "KP", orders: 1, spent: 1090, lastOrder: "2026-07-22", status: "active", skinType: "Dry", city: "Rangpur" },
  { id: "cu14", name: "Ayesha Karim", email: "ayesha.k@gmail.com", phone: "01811-567890", avatar: "AK", orders: 13, spent: 21400, lastOrder: "2026-09-21", status: "active", skinType: "Combination", city: "Dhaka" },
  { id: "cu15", name: "Lamia Hasan", email: "lamia.h@gmail.com", phone: "01922-678901", avatar: "LH", orders: 5, spent: 7390, lastOrder: "2026-09-08", status: "active", skinType: "Normal", city: "Mymensingh" },
];

export const orders: Order[] = [
  { id: "BF1024", date: "2026-09-21", customer: "Ayesha Karim", email: "ayesha.k@gmail.com", phone: "01811-567890", items: [{ productId: "p1", name: "Glow Barrier Cream", image: "", price: 1290, qty: 1 }, { productId: "p8", name: "Invisible Sunscreen SPF 50+", image: "", price: 1190, qty: 1 }], subtotal: 2480, discount: 200, delivery: 80, total: 2360, payment: "bKash", status: "Delivered", address: "House 12, Road 5, Dhanmondi", city: "Dhaka" },
  { id: "BF1023", date: "2026-09-20", customer: "Sarah Khan", email: "sarah@gmail.com", phone: "01711-234567", items: [{ productId: "p3", name: "Niacinamide 10% Serum", image: "", price: 1090, qty: 1 }, { productId: "p2", name: "Cloud Cleanser", image: "", price: 790, qty: 1 }], subtotal: 1880, discount: 0, delivery: 80, total: 1960, payment: "Cash on Delivery", status: "Shipped", address: "Banani DOHS, Road 11", city: "Dhaka" },
  { id: "BF1022", date: "2026-09-19", customer: "Priya Sharma", email: "priya.s@gmail.com", phone: "01911-456789", items: [{ productId: "p4", name: "Vitamin C Serum", image: "", price: 1850, qty: 1 }], subtotal: 1850, discount: 185, delivery: 120, total: 1785, payment: "Nagad", status: "Processing", address: "GEC Circle, Nasirabad", city: "Chattogram" },
  { id: "BF1021", date: "2026-09-18", customer: "Nusrat Jahan", email: "nusrat.j@gmail.com", phone: "01812-345678", items: [{ productId: "p5", name: "Hyaluronic Serum", image: "", price: 990, qty: 2 }], subtotal: 1980, discount: 0, delivery: 80, total: 2060, payment: "Card", status: "Pending", address: "Uttara Sector 7", city: "Dhaka" },
  { id: "BF1020", date: "2026-09-17", customer: "Dina Ahmed", email: "dina.a@gmail.com", phone: "01766-012345", items: [{ productId: "p1", name: "Glow Barrier Cream", image: "", price: 1290, qty: 1 }, { productId: "p6", name: "Retinol Serum", image: "", price: 1490, qty: 1 }], subtotal: 2780, discount: 278, delivery: 0, total: 2502, payment: "bKash", status: "Delivered", address: "Mirpur 10", city: "Dhaka" },
  ...Array.from({ length: 18 }).map((_, i) => ({
    id: `BF10${19 - i}`,
    date: `2026-09-${String(16 - (i % 14)).padStart(2, "0")}`,
    customer: ["Mim Hossain", "Tania Sultana", "Nabila Ferdous", "Farah Diba", "Lamia Hasan"][i % 5],
    email: "customer@gmail.com", phone: "01700-000000",
    items: [{ productId: "p1", name: "Glow Barrier Cream", image: "", price: 1290, qty: 1 }],
    subtotal: 1290, discount: 0, delivery: 80, total: 1370,
    payment: (["Cash on Delivery", "bKash", "Nagad", "Card"] as const)[i % 4],
    status: (["Pending", "Processing", "Shipped", "Delivered", "Delivered", "Cancelled"] as const)[i % 6] as Order["status"],
    address: "House 5, Road 2, Gulshan", city: "Dhaka",
  })),
];

export const coupons: Coupon[] = [
  { code: "GLOW10", type: "percent", value: 10, minOrder: 1000, maxDiscount: 500, expiry: "2026-12-31", usageLimit: 1000, used: 342, active: true },
  { code: "WELCOME15", type: "percent", value: 15, minOrder: 1500, maxDiscount: 750, expiry: "2026-12-31", usageLimit: 5000, used: 1280, active: true },
  { code: "FLAT200", type: "flat", value: 200, minOrder: 2000, expiry: "2026-10-31", usageLimit: 500, used: 210, active: true },
  { code: "EIDGLOW", type: "percent", value: 20, minOrder: 2500, maxDiscount: 1000, expiry: "2026-06-30", usageLimit: 2000, used: 1990, active: false },
  { code: "FREESHIP", type: "flat", value: 80, minOrder: 1500, expiry: "2026-12-31", usageLimit: 10000, used: 4520, active: true },
];

const aimg = (id: string) => `https://images.unsplash.com/${id}?q=80&w=800&auto=format&fit=crop`;

export const articles: Article[] = [
  { slug: "how-to-build-a-simple-skincare-routine", title: "How to Build a Simple Skincare Routine", category: "Routine", excerpt: "Cleanser, serum, moisturizer, SPF — the only four steps most skin really needs.", image: aimg("photo-1556228578-8c89e6adf883"), author: "Dr. Laila Hossain", date: "Sep 12, 2026", readTime: "6 min read", content: ["Start with a gentle cleanser...", "Add one active serum...", "Seal with moisturizer...", "Never skip SPF..."] },
  { slug: "5-ingredients-for-hydrated-skin", title: "5 Ingredients for Deeply Hydrated Skin", category: "Ingredients", excerpt: "Hyaluronic acid, ceramides, glycerin and more — explained simply.", image: aimg("photo-1556228453-efd6c1ff04f6"), author: "Nabila Karim", date: "Sep 08, 2026", readTime: "5 min read", content: ["Hydration vs moisturization...", "Layer from thinnest to thickest..."] },
  { slug: "niacinamide-vs-vitamin-c", title: "Niacinamide vs Vitamin C: Which First?", category: "Ingredients", excerpt: "Can you use both? Yes — here is exactly how to layer them.", image: aimg("photo-1620916566398-39f1143ab7be"), author: "Dr. Laila Hossain", date: "Sep 01, 2026", readTime: "7 min read", content: ["Use vitamin C in the morning...", "Niacinamide morning or night..."] },
  { slug: "morning-vs-night-skincare", title: "Morning vs Night Skincare: What's Different?", category: "Routine", excerpt: "Protect by day, repair by night. A simple split that works.", image: aimg("photo-1570172619644-dfd03ed5d881"), author: "Editorial Team", date: "Aug 25, 2026", readTime: "4 min read", content: ["Morning = protection...", "Night = repair..."] },
  { slug: "how-to-choose-moisturizer", title: "How to Choose the Right Moisturizer", category: "Guides", excerpt: "Gel vs lotion vs cream — match texture to your skin type.", image: aimg("photo-1556228720-195a672e8a03"), author: "Nabila Karim", date: "Aug 18, 2026", readTime: "5 min read", content: ["Oily skin loves gels...", "Dry skin loves creams..."] },
  { slug: "beginners-guide-to-retinol", title: "Beginner's Guide to Retinol (Without Fear)", category: "Guides", excerpt: "Start low, go slow, always use SPF. Your future skin thanks you.", image: aimg("photo-1571781926291-c477ebfd024b"), author: "Dr. Laila Hossain", date: "Aug 10, 2026", readTime: "8 min read", content: ["Start 2x a week...", "Sandwich method...", "Expect patience..."] },
  { slug: "sunscreen-bangladesh-guide", title: "Sunscreen in Bangladesh: Reapplying in Humidity", category: "Guides", excerpt: "How to reapply SPF over makeup when it is 38°C outside.", image: aimg("photo-1552046122-03184de85e08"), author: "Editorial Team", date: "Aug 02, 2026", readTime: "5 min read", content: ["Two fingers rule...", "Mist and stick formats..."] },
  { slug: "barrier-repair-signs", title: "5 Signs Your Skin Barrier Is Damaged", category: "Skin Health", excerpt: "Stinging, redness, tightness? Time for a barrier reset.", image: aimg("photo-1596704017254-9b121068fb31"), author: "Dr. Laila Hossain", date: "Jul 28, 2026", readTime: "6 min read", content: ["Strip back actives...", "Ceramides and oat..."] },
];
