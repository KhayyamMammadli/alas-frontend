import { lazy, Suspense } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { homePageData } from './data/homePageData';
import { SiteLayout } from './components/layout/SiteLayout';
import { RouteMeta } from './components/seo/RouteMeta';
import { HomePage } from './pages/HomePage';

const ServicesPage = lazy(() => import('./pages/ServicesPage').then((module) => ({ default: module.ServicesPage })));
const HvacPage = lazy(() => import('./pages/HvacPage').then((module) => ({ default: module.HvacPage })));
const RefrigerationPage = lazy(() => import('./pages/RefrigerationPage').then((module) => ({ default: module.RefrigerationPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const SamsungErrorCodesPage = lazy(() => import('./pages/SamsungErrorCodesPage').then((module) => ({ default: module.SamsungErrorCodesPage })));
const SamsungError22EPage = lazy(() => import('./pages/SamsungError22EPage').then((module) => ({ default: module.SamsungError22EPage })));
const SamsungAppliancePage = lazy(() => import('./pages/SamsungAppliancePage').then((module) => ({ default: module.SamsungAppliancePage })));

export default function App() {
  return (
    <BrowserRouter>
      <RouteMeta />
      <SiteLayout navigation={homePageData.navigation} footer={homePageData.footer}>
        <Suspense fallback={<div className="min-h-[50vh] bg-white" aria-label="Loading page" />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services/appliance-repair" element={<ServicesPage />} />
            <Route path="/services/hvac-repair" element={<HvacPage />} />
            <Route path="/protection-plans" element={<RefrigerationPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/brands/samsung-appliance-repair" element={<SamsungAppliancePage />} />
            <Route path="/guides/samsung-refrigerator-error-codes" element={<SamsungErrorCodesPage />} />
            <Route path="/guides/samsung-refrigerator-error-code-22e" element={<SamsungError22EPage />} />
            <Route path="/locations/samsung-refrigerator-error-code-22e" element={<Navigate to="/guides/samsung-refrigerator-error-code-22e" replace />} />
          </Routes>
        </Suspense>
      </SiteLayout>
    </BrowserRouter>
  );
}
