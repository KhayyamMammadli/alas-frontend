import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const siteUrl = 'https://alasappliance.com';

const routeMeta: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'ALAS Appliance Service | Same-Day Appliance Repair Near You',
    description: 'Same-day appliance, refrigeration, and HVAC repair for homes and businesses across Plano and nearby DFW communities.',
  },
  '/services/appliance-repair': {
    title: 'Appliance Repair Services in Plano, TX | ALAS',
    description: 'Professional residential and commercial appliance repair with same-day availability, transparent pricing, and a 90-day warranty.',
  },
  '/services/hvac-repair': {
    title: 'HVAC Repair Services in Plano, TX | ALAS',
    description: 'Residential and commercial HVAC diagnostics, repair, emergency service, and preventive maintenance from local ALAS technicians.',
  },
  '/protection-plans': {
    title: 'Refrigeration Repair Services & Protection Plans | ALAS',
    description: 'Schedule refrigerator and refrigeration repair or explore ALAS protection plans for reliable ongoing appliance coverage.',
  },
  '/about': {
    title: 'About ALAS Appliance Services | Licensed DFW Technicians',
    description: 'Learn about ALAS Appliance Services, our licensed technicians, service standards, warranty, and commitment to DFW communities.',
  },
  '/brands/samsung-appliance-repair': {
    title: 'Samsung Appliance Repair Services in Plano, TX | ALAS',
    description: 'Fast Samsung refrigerator, washer, dryer, and appliance repair for residential and commercial customers, with same-day service and a 90-day warranty.',
  },
  '/guides/samsung-refrigerator-error-codes': {
    title: 'Samsung Refrigerator Error Codes: Meanings & Fixes | ALAS',
    description: 'Understand common Samsung refrigerator error codes, what they mean, troubleshooting steps, and when professional repair is needed.',
  },
  '/guides/samsung-refrigerator-error-code-22e': {
    title: 'Samsung Refrigerator Error Code 22E: Meaning & Fix | ALAS',
    description: 'Learn what Samsung refrigerator error code 22E means, common symptoms and causes, safe troubleshooting steps, and when to schedule repair.',
  },
};

export function RouteMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = routeMeta[pathname] ?? routeMeta['/'];
    const canonicalUrl = `${siteUrl}${pathname === '/' ? '/' : pathname}`;

    document.title = meta.title;
    setMetaContent('meta[name="description"]', 'name', 'description', meta.description);
    setMetaContent('meta[property="og:title"]', 'property', 'og:title', meta.title);
    setMetaContent('meta[property="og:description"]', 'property', 'og:description', meta.description);
    setMetaContent('meta[property="og:url"]', 'property', 'og:url', canonicalUrl);
    setMetaContent('meta[name="twitter:title"]', 'name', 'twitter:title', meta.title);
    setMetaContent('meta[name="twitter:description"]', 'name', 'twitter:description', meta.description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;
  }, [pathname]);

  return null;
}

function setMetaContent(selector: string, attribute: 'name' | 'property', key: string, content: string) {
  let element = document.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}
