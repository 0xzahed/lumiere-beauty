import { Hero, CategoryGrid, BestSellers, ConcernSection, RoutineBuilder, IngredientSpotlight, FeaturedProduct, ReviewSection, Gallery, JournalPreview, BundleOffer, TrustBar } from "@/components/home";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <CategoryGrid />
      <BestSellers />
      <ConcernSection />
      <RoutineBuilder />
      <IngredientSpotlight />
      <FeaturedProduct />
      <ReviewSection />
      <Gallery />
      <JournalPreview />
      <BundleOffer />
    </>
  );
}
