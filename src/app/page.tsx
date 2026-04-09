import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { LandAcquisition, JointVentures, Developments, Philosophy, StrategicLocations, PriorityInvestor, Specification, LandJourney, Director, RegionalExpertise, Sustainability, Insights, ImmersiveGallery, Collaborations, FAQs } from "@/components/Sections";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <ImmersiveGallery />
      <Specification />
      <Sustainability />
      <Collaborations />
      <RegionalExpertise />
      <StrategicLocations />
      <LandAcquisition />
      <LandJourney />
      <Director />
      <JointVentures />
      <PriorityInvestor />
      <Insights />
      <Developments />
      <FAQs />
      <Contact />
      <Footer />
    </main>
  );
}
