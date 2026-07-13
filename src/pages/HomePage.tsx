import { AlertBar } from '../components/sections/AlertBar';
import { ApplianceServices } from '../components/sections/ApplianceServices';
import { BrandExpertise } from '../components/sections/BrandExpertise';
import { FaqFooter } from '../components/sections/FaqFooter';
import { FindTechnician } from '../components/sections/FindTechnician';
import { Hero } from '../components/sections/Hero';
import { MembershipPlans } from '../components/sections/MembershipPlans';
import { SeoTextArea } from '../components/sections/SeoTextArea';
import { ServiceOverview } from '../components/sections/ServiceOverview';
import { WhyChooseUs } from '../components/sections/WhyChooseUs';
import { homePageData } from '../data/homePageData';

export function HomePage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero data={homePageData.hero} />
      <AlertBar data={homePageData.alertBar} />
      <ServiceOverview data={homePageData.serviceOverview} />
      <ApplianceServices data={homePageData.applianceServices} />
      <WhyChooseUs data={homePageData.whyChooseUs} />
      <MembershipPlans data={homePageData.membershipPlans} />
      <FindTechnician data={homePageData.findTechnician} />
      <BrandExpertise data={homePageData.brandExpertise} />
      <SeoTextArea data={homePageData.seoTextArea} />
      <FaqFooter faq={homePageData.faq} />
    </main>
  );
}
