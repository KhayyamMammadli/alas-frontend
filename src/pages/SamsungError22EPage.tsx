import { FaqFooter } from '../components/sections/FaqFooter';
import { SamsungError22EDetails } from '../components/sections/SamsungError22EDetails';
import { SamsungError22EFix } from '../components/sections/SamsungError22EFix';
import { SamsungError22EHelpCta } from '../components/sections/SamsungError22EHelpCta';
import { SamsungError22EHero } from '../components/sections/SamsungError22EHero';
import { SamsungError22EMeaning } from '../components/sections/SamsungError22EMeaning';
import { SamsungError22EProfessionalRepair } from '../components/sections/SamsungError22EProfessionalRepair';
import { SamsungRepairCta } from '../components/sections/SamsungRepairCta';
import { homePageData } from '../data/homePageData';

export function SamsungError22EPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <SamsungError22EHero />
      <SamsungError22EMeaning />
      <SamsungError22EDetails />
      <SamsungError22EFix />
      <SamsungError22EProfessionalRepair />
      <SamsungError22EHelpCta />
      <FaqFooter faq={homePageData.faq} />
      <SamsungRepairCta />
    </main>
  );
}
