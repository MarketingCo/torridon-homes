import Header from "@/components/Header";
import Hero from "@/components/Hero";
import { LandAcquisition, JointVentures, Developments, Philosophy, StrategicLocations, PriorityInvestor } from "@/components/Sections";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Philosophy />
      <StrategicLocations />
      <LandAcquisition />
      <JointVentures />
      <PriorityInvestor />
      <Developments />
      <Contact />
      <Footer />
    </main>
  );
}
