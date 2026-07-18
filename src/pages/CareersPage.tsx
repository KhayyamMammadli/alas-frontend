import { CareersCommercialHero } from '../components/sections/CareersCommercialHero';
import { CommercialBusinessProblems } from '../components/sections/CommercialBusinessProblems';
import { CommercialCoverageComparison } from '../components/sections/CommercialCoverageComparison';
import { CommercialFinalCta } from '../components/sections/CommercialFinalCta';
import { CommercialFaq } from '../components/sections/CommercialFaq';
import { CommercialIndustries } from '../components/sections/CommercialIndustries';
import { CommercialTestimonials } from '../components/sections/CommercialTestimonials';
import { CommercialSavingsCalculator } from '../components/sections/CommercialSavingsCalculator';
import { CommercialTrustBar } from '../components/sections/CommercialTrustBar';
import { CommercialWhatWeCover } from '../components/sections/CommercialWhatWeCover';

export function CareersPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <CareersCommercialHero />
      <CommercialTrustBar />
      <CommercialBusinessProblems />
      <CommercialCoverageComparison />
      <CommercialIndustries />
      <CommercialTestimonials />
      <CommercialSavingsCalculator />
      <CommercialWhatWeCover />
      <CommercialFaq />
      <CommercialFinalCta />
    </main>
  );
}
