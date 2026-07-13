import { AboutHero } from '../components/sections/AboutHero';
import { AboutTrustBar } from '../components/sections/AboutTrustBar';
import { AboutWhoWeAre } from '../components/sections/AboutWhoWeAre';
import { AboutStory } from '../components/sections/AboutStory';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { FindTechnician } from '../components/sections/FindTechnician';
import { MembershipPlans } from '../components/sections/MembershipPlans';
import { BrandExpertise } from '../components/sections/BrandExpertise';
import { AboutProfessionalService } from '../components/sections/AboutProfessionalService';
import { AboutRefrigeratorFaq } from '../components/sections/AboutRefrigeratorFaq';
import { homePageData } from '../data/homePageData';

export function AboutPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <AboutHero />
      <AboutTrustBar />
      <AboutWhoWeAre />
      <AboutStory />
      <WhyChooseUs data={homePageData.whyChooseUs} />
      <MembershipPlans data={homePageData.membershipPlans} />
      <BrandExpertise data={homePageData.brandExpertise} />
      <FindTechnician data={homePageData.findTechnician} />
      <AboutProfessionalService />
      <AboutRefrigeratorFaq />
    </main>
  );
}
