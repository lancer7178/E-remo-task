import About from "@/components/Home/About";
import HeroSection from "@/components/Home/HeroSection";
import Hybirdwork from "@/components/Home/Hybirdwork";
import LatestListings from "@/components/Home/LatestListings";
import LocationApp from "@/components/Home/LocationApp";
import WorkFlow from "@/components/Home/WorkFlow";
import WorkSpace from "@/components/Home/WorkSpace";

export default function Home() {
  return (
 <>
 <HeroSection />
 <About />
 <LatestListings />
 <WorkSpace />
 <WorkFlow />
 <Hybirdwork />
 <LocationApp />
 
 </>
  );
}
