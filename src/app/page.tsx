import HeroBanner from "@/components/HeroBanner/HeroBanner";
import EarPrintIntro from "@/components/EarPrintIntro/EarPrintIntro";
import ProductShowcase from "@/components/ProductShowcase";
import ChallengesPreview from "@/components/ChallengesPreview";
import CommunitySpotlight from "@/components/CommunitySpotlight";

export default function HomePage() {
  return (
    <>
      <HeroBanner />
      <EarPrintIntro />
      <ProductShowcase />
      <ChallengesPreview />
      <CommunitySpotlight />
    </>
  );
}

