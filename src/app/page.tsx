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
  AtmosphericSeparator,
  Trajectory,
  VaultPreview,
  LandMandate,
  ProjectRoadmap,
  TactileDNA
} from "@/components/Sections";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen relative selection:bg-torridon-gold selection:text-white bg-torridon-cream">
      <Header />
      <SideNav />
      <BrandHUD />
      
      {/* PHASE 1: THE GENESIS & VISION */}
      <Hero />
      <Philosophy />
      
      <AtmosphericSeparator />
      
      {/* PHASE 2: THE CRAFT & MATERIALITY (EDITORIAL FOCUS) */}
      <div className="bg-white py-20">
        <TactileDNA />
        <CraftsmanDetail />
        <Specification />
      </div>

      <AtmosphericSeparator />

      {/* PHASE 3: THE ARCHITECTURAL INTELLIGENCE */}
      <LivingBlueprint />
      <ImmersiveGallery />
      <Sustainability />
      
      <AtmosphericSeparator />

      {/* PHASE 4: THE ESTATE PORTFOLIO (ASSET FOCUS) */}
      <Developments />
      <StrategicLocations />
      <InteractiveMap />
      <RegionalExpertise />

      <AtmosphericSeparator />

      {/* PHASE 5: THE STRATEGIC MANDATE (B2B FOCUS) */}
      <LandMandate />
      <LandAcquisition />
      <JointVentures />
      <LandJourney />
      <ProjectRoadmap />

      <AtmosphericSeparator />

      {/* PHASE 6: THE AUTHORITY & DIALOGUE */}
      <Director />
      <SubtleStats />
      <Trajectory />
      <VaultPreview />
      <PriorityInvestor />
      <Insights />
      <Collaborations />
      <FAQs />
      <Newsletter />

      <Contact />
      <Footer />
    </main>
  );
}
