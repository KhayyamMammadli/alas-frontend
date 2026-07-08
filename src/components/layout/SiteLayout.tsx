import type { ReactNode } from 'react';
import type { HomePageData } from '../../data/homePageData';
import { Header } from '../sections/Header';
import { Footer } from '../sections/Footer';

type SiteLayoutProps = {
  navigation: HomePageData['navigation'];
  footer: HomePageData['footer'];
  children: ReactNode;
};

export function SiteLayout({ navigation, footer, children }: SiteLayoutProps) {
  return (
    <div className="min-h-screen bg-white text-ink-900">
      <Header data={navigation} />
      {children}
      <Footer data={footer} />
    </div>
  );
}
