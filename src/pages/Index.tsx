import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import CursorEffect from "@/components/CursorEffect";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import Navbar from "@/components/Navbar";
import SkillsSection from "@/components/SkillsSection";
import TravelSection from "@/components/TravelSection";
import WorkSection from "@/components/WorkSection";

const Index = () => {
    return (
        <div className="min-h-screen bg-background">
            {/* <CursorEffect /> */}
            <Navbar />
            <HeroSection />
            <AboutSection />
            <WorkSection />
            <SkillsSection />
            <JourneySection />
            <TravelSection />
            <ContactSection />
            <Footer /> 
        </div>
    )
}

export default Index;