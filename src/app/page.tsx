import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SideNav from "@/components/SideNav";
import BrandHUD from "@/components/BrandHUD";
import LivingBlueprint from "@/components/LivingBlueprint";
import { 
  LandAcquisition, 
  JointVentures, 
  Developments, 
  Philosophy, 
  StrategicLocations, 
  PriorityInvestor, 
  Specification, 
  LandJourney, 
  Director, 
  RegionalExpertise, 
  Sustainability, 
  Insights, 
  ImmersiveGallery, 
  Collaborations, 
  FAQs,
  InteractiveMap,
  Newsletter,
  CraftsmanDetail,
  SubtleStats,
  IndustryTrust,
  AtmosphericSeparator,
  Trajectory,
  VaultPreview,
  LandMandate,
  ProjectRoadmap
} from "@/components/Sections";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-torridon-gold selection:text-white">
      <Header />
      <SideNav />
      <BrandHUD />
      <Hero />
      <Philosophy />
      <TactileDNA />
      <LivingBlueprint />
      <ImmersiveGallery />
      <CraftsmanDetail />
      <AtmosphericSeparator />
      <Specification />
      <Trajectory />
      <Sustainability />
      <Collaborations />
      <RegionalExpertise />
      <InteractiveMap />
      <StrategicLocations />
      <LandMandate />
      <ProjectRoadmap />
      <SubtleStats />
      <LandAcquisition />
      <LandJourney />
      <Director />
      <JointVentures />
      <VaultPreview />
      <PriorityInvestor />
      <Insights />
      <Developments />
      <FAQs />
      <IndustryTrust />
      <Newsletter />
      <Contact />
      <Footer />
    </main>
  );
}
