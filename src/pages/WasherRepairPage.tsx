import { CommonApplianceEmergencies } from '../components/sections/CommonApplianceEmergencies';
import { EmergencyQuickChecks } from '../components/sections/EmergencyQuickChecks';
import { FaqFooter } from '../components/sections/FaqFooter';
import { RefrigeratorNoCoolingEmergencyHero } from '../components/sections/RefrigeratorNoCoolingEmergencyHero';
import { RefrigeratorRepairCost } from '../components/sections/RefrigeratorRepairCost';
import { ServiceCategorySeoText } from '../components/sections/ServiceCategorySeoText';
import { homePageData, serviceCategoryPageData } from '../data/homePageData';

export function WasherRepairPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <RefrigeratorNoCoolingEmergencyHero />
      <EmergencyQuickChecks />
      <CommonApplianceEmergencies />
      <RefrigeratorRepairCost />
      <ServiceCategorySeoText data={serviceCategoryPageData.seoTextArea} />
      <FaqFooter faq={homePageData.faq} />
    </main>
  );
}
