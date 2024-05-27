import Footer from "@/components/Foooter";
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import HomeProperties from "@/components/HomeProperties";

export default function HomePage() {
  return (
    <div className="text-blue-300">
      <Hero />
      <InfoBoxes />
      <HomeProperties />
      <Footer />
    </div>
  );
}
