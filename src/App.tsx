import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { homePageData } from './data/homePageData';
import { SiteLayout } from './components/layout/SiteLayout';
import { Hero } from './components/sections/Hero';
import { AlertBar } from './components/sections/AlertBar';
import { ServiceOverview } from './components/sections/ServiceOverview';
import { ApplianceServices } from './components/sections/ApplianceServices';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { MembershipPlans } from './components/sections/MembershipPlans';
import { FindTechnician } from './components/sections/FindTechnician';
import { BrandExpertise } from './components/sections/BrandExpertise';
import { SeoTextArea } from './components/sections/SeoTextArea';
import { FaqFooter } from './components/sections/FaqFooter';
import { ServicesPage } from './pages/ServicesPage';
import { HvacPage } from './pages/HvacPage';
import { RefrigerationPage } from './pages/RefrigerationPage';
import { AboutPage } from './pages/AboutPage';
import { SamsungRefrigeratorErrorCodesPage } from './pages/SamsungRefrigeratorErrorCodesPage';
import { SamsungRefrigeratorError22EPage } from './pages/SamsungRefrigeratorError22EPage';

export default function App() {
  return (
    <BrowserRouter>
      <SiteLayout navigation={homePageData.navigation} footer={homePageData.footer}>
        <Routes>
          <Route
            path="/"
            element={
              <main>
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
            }
          />

          <Route path="/services/appliance-repair" element={<ServicesPage />} />
          <Route path="/services/hvac-repair" element={<HvacPage />} />
          <Route path="/protection-plans" element={<RefrigerationPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/guides/samsung-refrigerator-error-codes" element={<SamsungRefrigeratorErrorCodesPage />} />
          <Route path="/locations/samsung-refrigerator-error-code-22e" element={<SamsungRefrigeratorError22EPage />} />
        </Routes>
      </SiteLayout>
    </BrowserRouter>
  );
}
