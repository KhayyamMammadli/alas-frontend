export const asset = (fileName: string) => `/assets/${fileName}`;

export const homePageData = {
  navigation: {
    logo: asset('logo-main.png'),
    links: ['Services', 'Brands', 'Protection Plans', 'Service areas', 'About us'],
    expert: {
      avatar: asset('avatar.png'),
      label: 'Talk to an expert',
      phone: '(800) 555-1234',
    },
    cta: 'Schedule Service',
  },
  hero: {
    backgroundImage: asset('figma-home-hero-bg-desktop.png'),
    mobileBackgroundImage: asset('figma-home-hero-bg-mobile.png'),
    technicianImages: [asset('figma-home-hero-tech-primary.png'), asset('figma-home-hero-tech-secondary.png')],
    whatsappIcon: asset('figma-home-hero-whatsapp.svg'),
    title: 'Same-Day Appliance Repair Near You & Prevent Your Breakdowns',
    mobileTitle: 'Appliance Repair & Protection Plans You Can Trust',
    description:
      'Fast, reliable service for homeowners and businesses. Enter your ZIP code to connect with a local technician.',
    badges: ['Same-Day Service', '90-Day Warranty', 'Licensed & Insured'],
    actions: [
      { label: 'Schedule Service', variant: 'primary' },
      { label: 'Get Protection Plan Quote', variant: 'outline' },
    ],
  },
  alertBar: {
    text: 'Emergency Repair Available Today',
    action: 'Contact us now',
  },
  serviceOverview: {
    title: 'Everything Your Appliances Need, Under One Roof',
    description:
      'Schedule repair, maintenance, and protection plans for home appliances, commercial refrigeration, and HVAC systems with licensed local technicians.',
    cards: [
      {
        icon: asset('service-icon-1.svg'),
        title: 'Appliance Repair Services',
        description:
          'In-home repair for refrigerators, washers, dryers, dishwashers, ovens, ranges, cooktops, microwaves, and more. Same-day appointments are available in many service areas.',
      },
      {
        icon: asset('service-icon-2.svg'),
        title: 'Refrigeration Service',
        description:
          'Commercial refrigeration support for restaurants, hotels, offices, and facilities. Get priority scheduling when walk-in coolers, freezers, and prep-table units need repair.',
      },
      {
        icon: asset('service-icon-1.svg'),
        title: 'HVAC Service',
        description:
          'Heating and cooling service for homes and businesses, including diagnostic visits, preventive maintenance, and reliable repair recommendations.',
      },
    ],
  },
  applianceServices: {
    backgroundImage: asset('service-area-bg.png'),
    title: 'Appliance Repair Services We Handle Every Day',
    description:
      'ALAS technicians service the appliances homeowners and businesses rely on every day, from kitchen and laundry equipment to commercial refrigeration.',
    tabs: ['Residential', 'Commercial'],
    services: [
      ['Refrigerator', asset('appliance-fridge.svg')],
      ['Washer', asset('appliance-washer.svg')],
      ['Dishwasher', asset('appliance-dishwasher.svg')],
      ['Microwave', asset('appliance-microwave.svg')],
      ['Stove', asset('appliance-stove.svg')],
      ['CookTop', asset('appliance-cooktop.svg')],
      ['Ice Machine', asset('appliance-ice.svg')],
      ['Dryer', asset('appliance-washer.svg')],
      ['Oven', asset('appliance-stove.svg')],
      ['Wine Cooler', asset('appliance-fridge.svg')],
      ['Vent Hood', asset('appliance-cooktop.svg')],
      ['Garbage Disposal', asset('appliance-microwave.svg')],
    ].map(([name, icon]) => ({ name, icon })),
    commercial: {
      categories: [
        ['Refrigerator', asset('appliance-fridge.svg')],
        ['Cooking Line', asset('appliance-stove.svg')],
        ['Dishwasher', asset('appliance-dishwasher.svg')],
        ['Laundry', asset('appliance-washer.svg')],
        ['Ventilation', asset('appliance-cooktop.svg')],
      ].map(([name, icon], index) => ({ name, icon, active: index === 0 })),
      panelTitle: 'Refrigeration Equipment',
      panelSubtitle: 'Select an Appliance',
      options: [
        'Walk-in Coolers',
        'Walk-in Freezers',
        'Reach-in Refrigerators',
        'Reach-in Freezers',
        'Undercounter Refrigerators',
        'Bar Refrigerators',
        'Prep-Table Refrigerators',
        'Merchandiser Display Coolers',
        'Blast Chillers & Shock Freezers',
      ],
    },
  },
  whyChooseUs: {
    title: 'Why Customers Choose Us',
    quoteIcon: asset('figma-why-quote.svg'),
    starIcon: asset('figma-why-star.svg'),
    features: [
      {
        title: 'Fast Response Across Plano',
        description:
          'Same-day appointments available in most Plano neighborhoods — West Plano, Legacy, Willow Bend, and more.',
      },
      {
        title: 'Licensed, Experienced Technicians',
        description:
          'Fully licensed and insured technicians familiar with North Texas homes and commercial facilities — all major brands.',
      },
      {
        title: 'Licensed, Experienced Technicians',
        description:
          'Fully licensed and insured technicians familiar with Plano homes and commercial facilities — all major brands.',
      },
      {
        title: '90-Day Repair Warranty',
        description:
          'Every repair is backed by our warranty — if the issue returns within 90 days, we come back at no extra charge.',
      },
    ],
    testimonials: [
      {
        name: 'Niesha Phips',
        service: 'Refrigerator Repair',
        avatar: asset('figma-why-avatar.png'),
        quote: 'There are many variations of passage available the majority have suffered of alteration of the some humour words look even slightly form by the injected to default model believable.',
      },
      {
        name: 'Niesha Phips',
        service: 'Refrigerator Repair',
        avatar: asset('figma-why-avatar.png'),
        quote: 'There are many variations of passage available the majority have suffered of alteration of the some humour words look even slightly form by the injected to default model believable.',
      },
    ],
  },
  membershipPlans: {
    title: 'CHOOSE YOUR PLAN for Homes & Businesses',
    benefits: ['Priority Scheduling', 'Preventive Maintenance', 'Dedicated Support'],
    plans: [
      {
        icon: asset('figma-plan-house.svg'),
        title: 'Residential Membership',
        description:
          'Protect your home appliances with scheduled maintenance, priority service, and repair discounts — so a broken washer never ruins your week.',
        items: ['No service fees', 'No deductibles', 'Local technicians', 'Same-day service'],
        action: 'View Residential Plans',
        accent: 'blue',
      },
      {
        icon: asset('figma-plan-building.svg'),
        title: 'Commercial Membership',
        description:
          'Protect your home appliances with scheduled maintenance, priority service, and repair discounts — so a broken washer never ruins your week.',
        items: ['No service fees', 'No deductibles', 'Local technicians', 'Same-day service'],
        action: 'View Commercial Plans',
        accent: 'orange',
      },
    ],
  },
  findTechnician: {
    backgroundImage: asset('figma-find-tech-bg-desktop.png'),
    mobileBackgroundImage: asset('figma-find-tech-bg-mobile.png'),
    eyebrow: 'Find Your Location',
    title: 'Find Your Local Alas Technician',
    description: 'ZIP code routes you to the right franchise owner automatically via GHL ZIP router.',
    placeholder: 'Enter ZIP code',
    action: 'Find Service',
    cities: ['Plano', 'Dallas', 'Frisco', 'Allen', 'McKinney', 'Garland', 'Mesquite', 'All 50+ Cities ->'],
  },
  brandExpertise: {
    title: 'Our Expertise in Appliance Brands',
    brands: [
      'Whirlpool',
      'GE Appliances',
      'Samsung',
      'LG',
      'KitchenAid',
      'Maytag',
      'Frigidaire',
      'Bosch',
    ].map((name, index) => ({
      name,
      logo: index === 7 ? asset('brand-thumb-alt.png') : asset('brand-thumb.png'),
    })),
  },
  seoTextArea: {
    title: 'Appliance Repair Guides and Service Information',
    cards: Array.from({ length: 4 }, (_, index) => ({
      title:
        index === 0
          ? 'Same-Day Appliance Repair'
          : index === 1
            ? 'Residential Appliance Services'
            : index === 2
              ? 'Commercial Refrigeration Support'
              : 'Appliance Protection Plans',
      body:
        index === 0
          ? 'When an appliance stops working, fast diagnostics matter. ALAS helps homeowners and businesses schedule local appliance repair for refrigerators, washers, dryers, dishwashers, ovens, ranges, cooktops, microwaves, and ice machines.'
          : index === 1
            ? 'Residential service covers the appliances used every day in kitchens and laundry rooms. A technician can inspect the issue, explain repair options, and help you decide whether service or replacement makes the most sense.'
            : index === 2
              ? 'Commercial refrigeration downtime can interrupt operations quickly. ALAS supports walk-in coolers, freezers, reach-in units, prep tables, bar refrigerators, merchandisers, and other equipment used by food-service and facility teams.'
              : 'Protection plans help reduce surprise breakdowns with preventive maintenance, priority scheduling, and dedicated support. Plans are available for both home appliances and commercial equipment.',
      body2:
        index === 0
          ? 'Many appointments are available same day depending on location and technician availability. The goal is simple: clear communication, reliable scheduling, and repair work backed by a service warranty.'
          : index === 1
            ? 'Service areas include Plano, Dallas, Frisco, Allen, McKinney, Garland, Mesquite, and nearby cities. Enter your ZIP code to route your request to the correct local team.'
            : index === 2
              ? 'Priority scheduling is available for businesses where refrigeration, laundry, ventilation, or cooking equipment affects revenue and customer service.'
              : 'Membership options are designed to make ongoing appliance care easier for homeowners, landlords, restaurants, offices, and multi-location operators.',
    })),
  },
  faq: {
    title: 'General frequently asked questions',
    items: [
      {
        question: 'How Long Does A Service Take ?',
        mobileQuestion: 'How Long Does A Service ?',
        answer:
          'We denounce with righteous indignation and dislike men who are so major beguiled and demoralized by the charms of pleasure of the moment blinded by desire ante odio dignissim quam vitae pulvinar turpis. Generator tend to repeat predefined chunks necessary making this internet.',
      },
      {
        question: 'How Can I Become A Member ?',
        mobileQuestion: 'How Can I Become A Member ?',
        answer:
          'Choose the membership plan that fits your home or business, submit your contact details, and our support team will confirm your coverage, benefits, and first available service window.',
      },
      {
        question: 'What Payment Gateway You Support ?',
        mobileQuestion: 'How Can I Become A Member ?',
        answer:
          'We support secure card payments and common online payment methods for scheduled repairs, membership plans, and approved service invoices.',
      },
      {
        question: 'How Can I Cancel My Request ?',
        mobileQuestion: 'What Payment Gateway ?',
        answer:
          'You can cancel or reschedule a service request by contacting support before the technician is dispatched. Our team will update your appointment and confirm the change.',
      },
      {
        question: 'How Can I Cancel My Request ?',
        mobileQuestion: 'How Can I Cancel My Request ?',
        answer:
          'For membership-related requests, cancellation terms depend on the selected plan. Contact our team with your account details and we will review the available options.',
      },
      {
        question: 'How Can I Cancel My Request ?',
        mobileQuestion: 'How Can I Cancel My Request ?',
        answer:
          'If the request is urgent, call the service line directly so the dispatch team can stop or adjust the appointment as quickly as possible.',
      },
    ],
  },
  footer: {
    logo: asset('footer-logo.png'),
    description:
      'Professional appliance repair services across 50+ locations. Licensed, insured, and trusted by thousands.',
    services: [
      'Refrigerator Repair',
      'Washer Repair',
      'Dryer Repair',
      'Dishwasher Repair',
      'Oven & Range Repair',
      'Garbage Disposal Repair',
      '24/7 Emergency Service',
    ],
    company: [
      'About Us',
      'Our Locations',
      'Protection Plans',
      'Franchise Opportunities',
      'Careers',
      'Blog & Guides',
      'Contact',
    ],
    contact: {
      phone: '(469) 638-3215',
      support: '24/7 Customer Support',
      email: 'info@alasappliance.com',
      coverage: ['Serving 50+ Cities', 'Nationwide Coverage'],
    },
    copyright: '© 2026 ALAS Appliance Service. All rights reserved.',
    legal: ['Privacy Policy', 'Terms of Service', 'Sitemap'],
  },
} as const;

export type HomePageData = typeof homePageData;

export const serviceCategoryPageData = {
  banner: {
    exactImage: asset('figma-category-banner-exact.png'),
    exactMobileImage: asset('figma-category-banner-mobile-exact.png'),
    backgroundImage: asset('figma-category-hero-bg-desktop-clean.png'),
    mobileBackgroundImage: asset('figma-category-hero-bg-mobile-clean.png'),
    heroVisual: asset('figma-category-hero-person-fridge.png'),
    icons: {
      star: asset('figma-icon-star.png'),
      check: asset('figma-icon-check.png'),
      clock: asset('figma-breadcrumb-clock.svg'),
      pin: asset('figma-breadcrumb-pin.svg'),
      calendar: asset('figma-category-calendar-icon.svg'),
    },
    breadcrumbs: ['Home', 'Locations', 'Refrigerator Repair'],
    rating: '4.9 Average Rating',
    openStatus: 'Open Today · 7AM - 9PM',
    locationStatus: 'Serving Plano Since 2009',
    title: 'Professional Appliance Repair Services for Homes and Businesses',
    description:
      'Same-day refrigerator repair for homes and businesses across Plano. Fast diagnosis, reliable fixes, and service you can trust.',
    benefits: ['Same-day availability', 'Certified technicians', 'All major brands serviced'],
    action: 'Schedule Service',
    secondaryAction: 'Call Now',
    availabilityTitle: 'Same-day available',
    availabilityDescription: 'Book before noon · Plano',
  },
  intro: {
    title: 'Complete Appliance Repair — Residential and Commercial',
    mobileTitle: 'Trusted Refrigerator Repair Services in Plano',
    description: [
      { text: 'For Plano homeowners and businesses, we provide fast-response refrigerator repair for all major brands and ' },
      { text: 'models. Our experienced technicians deliver reliable repairs backed by a 90-day warranty. Whether you need ' },
      { text: 'routine ' },
      { text: 'appliance repair in Plano', href: '/services/appliance-repair' },
      { text: ' or urgent ' },
      { text: 'emergency repair in Plano', href: '/services/appliance-repair#schedule' },
      { text: ", we're here to help restore your refrigerator quickly and professionally." },
    ],
    cards: [
      {
        iconSrc: asset('figma-intro-service-icon-same-day.svg'),
        title: 'Same Day',
        description: 'Service Available',
      },
      {
        iconSrc: asset('figma-intro-service-icon-warranty.svg'),
        title: '90 Days',
        description: 'Parts & Labor Warranty',
      },
      {
        iconSrc: asset('figma-intro-service-icon-pricing.svg'),
        title: 'Upfront',
        description: 'Pricing — No Hidden Fees',
      },
      {
        iconSrc: asset('figma-intro-service-icon-plano.svg'),
        title: 'All Plano',
        description: 'Neighborhoods Covered',
      },
    ],
  },
  repairProcess: {
    backgroundImage: asset('figma-repair-process-bg.png'),
    mobileImage: asset('figma-repair-process-mobile-exact.png'),
    title: 'Most Repairs Completed in 1-2 Hours',
    description:
      'Our technicians arrive prepared with the most common parts, allowing us to complete most refrigerator repairs during the first visit.',
    action: 'Get Same-Day Service',
    steps: [
      {
        markerIcon: asset('figma-repair-step-1.png'),
        title: 'Schedule Your Appointment',
        description: 'Call us or book online. We offer same-day appointments and flexible time windows to fit your schedule.',
      },
      {
        markerIcon: asset('figma-repair-step-2.png'),
        title: 'Technician Arrives',
        description:
          'Our certified technician will arrive during your scheduled window with all necessary tools and common parts.',
      },
      {
        markerIcon: asset('figma-repair-step-3.png'),
        title: 'Diagnosis & Quote',
        description:
          "We'll thoroughly inspect your refrigerator, identify the problem, and provide a clear, upfront quote for the repair.",
      },
      {
        markerIcon: asset('figma-repair-step-4.png'),
        title: 'Complete Repair',
        description:
          "Once you approve the quote, we'll complete the repair using quality parts and test everything thoroughly.",
      },
      {
        markerIcon: asset('figma-repair-step-5.png'),
        title: 'Final Walkthrough',
        description:
          "We'll explain the work completed, answer your questions, and provide care recommendations.",
      },
    ],
  },
  seoTextArea: {
    title: 'SEO TEXT AREA',
    cards: [
      {
        title: [{ text: 'TEXT AREA FOR SEO' }],
        paragraphs: [
          'Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands. Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands',
          'Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise ',
        ],
      },
      {
        title: [
          { text: 'Our Expertise in ' },
          { text: 'Appliance Brands', accent: true },
        ],
        paragraphs: [
          'Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands. Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands',
          'Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise ',
        ],
      },
      {
        title: [
          { text: 'Our Expertise in ' },
          { text: 'Appliance Brands', accent: true },
        ],
        paragraphs: [
          'Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands. Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands',
          'Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise ',
        ],
      },
      {
        title: [
          { text: 'Our Expertise in ' },
          { text: 'Appliance Brands', accent: true },
        ],
        paragraphs: [
          'Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands. Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands',
          'Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise in Appliance Brands Our Expertise ',
        ],
      },
    ],
  },
  citiesWeServe: {
    desktopTitle: 'Cities We Serve',
    mobileTitle: 'Plano Neighborhoods We Serve',
    description:
      'Our local technicians are based in Plano and cover all neighborhoods across the city — from Legacy to Westside, and everywhere in between.',
    mapTitle: 'Interactive Service Area Map',
    mapSubtitle: 'Plano & 15-mile radius',
    cities: [
      'West Plano',
      'East Plano',
      'Park Forest',
      'Legacy',
      'Willow Bend',
      'Haggard Farm',
      'Windridge',
      'Oak Point',
      'Chapel Hill',
    ],
  },
  commonQuestions: {
    title: 'Refrigerator Not Cooling',
    highlightedTitle: 'Common Questions',
    mobile: {
      title: [
        { text: 'General ' },
        { text: 'frequently', accent: true },
        { text: ' asked questions' },
      ],
      items: [
        {
          question: 'How Long Does A Service ?',
          answer:
            'We denounce with righteous indignation and dislike men who are so major beguiled and demoralized by the charms of pleasure of the moment blinded by desire ante odio dignissim quam vitae pulvinar turpis. Generator tend to repeat predefined chunks necessary making this internet.',
        },
        {
          question: 'How Can I Become A Member ?',
          answer: '',
        },
        {
          question: 'How Can I Become A Member ?',
          answer: '',
        },
        {
          question: 'What Payment Gateway ?',
          answer: '',
        },
        {
          question: 'How Can I Cancel My Request ?',
          answer: '',
        },
      ],
      cta: {
        title: 'Already here for a Appliance Repair Services?',
        description:
          'For $X/mo, every future refrigerator repair is covered under your Alas Protection Plan. One-time job ($89–$400) → Plan member ($1,200–$15K LTV).',
        action: 'Get Same-Day Service',
        href: '#schedule',
      },
    },
    items: [
      {
        question: 'Can I really customize a tote bag myself, or should I leave it to the pros?',
        answer:
          'You can totally try it yourself, but let’s be real — if you want that flawless, professional look, you’re better off with the experts at Yes We Print. They know how to make your tote look amazing without any stress on your end!',
      },
      {
        question: 'Can I really customize a tote bag myself, or should I leave it to the pros?',
        answer:
          'You can totally try it yourself, but let’s be real — if you want that flawless, professional look, you’re better off with the experts at Yes We Print. They know how to make your tote look amazing without any stress on your end!',
      },
      {
        question: 'What if I don’t like the finished product? Is there a guarantee?',
        answer:
          'Totally understandable! With Yes We Print, they genuinely want you to be happy. If something isn’t right, just reach out to them, and they’ll work with you to make it better. They’re all about keeping customers satisfied!',
      },
      {
        question: 'What if I don’t like the finished product? Is there a guarantee?',
        answer:
          'Totally understandable! With Yes We Print, they genuinely want you to be happy. If something isn’t right, just reach out to them, and they’ll work with you to make it better. They’re all about keeping customers satisfied!',
      },
      {
        question: 'How do I choose the right customization technique for my tote?',
        answer:
          'That’s a great question! Think about what fits your style. Do you want something bold like screen print or something classic like embroidery? Yes We Print can help you decide, so you end up with a design you love.',
      },
      {
        question: 'How do I choose the right customization technique for my tote?',
        answer:
          'That’s a great question! Think about what fits your style. Do you want something bold like screen print or something classic like embroidery? Yes We Print can help you decide, so you end up with a design you love.',
      },
      {
        question: 'What if I don’t like the finished product? Is there a guarantee?',
        answer:
          'Totally understandable! With Yes We Print, they genuinely want you to be happy. If something isn’t right, just reach out to them, and they’ll work with you to make it better. They’re all about keeping customers satisfied!',
      },
      {
        question: 'How do I choose the right customization technique for my tote?',
        answer:
          'That’s a great question! Think about what fits your style. Do you want something bold like screen print or something classic like embroidery? Yes We Print can help you decide, so you end up with a design you love.',
      },
      {
        question: 'How do I choose the right customization technique for my tote?',
        answer:
          'That’s a great question! Think about what fits your style. Do you want something bold like screen print or something classic like embroidery? Yes We Print can help you decide, so you end up with a design you love.',
      },
    ],
    cta: {
      title: 'Already here for a appliance repair?',
      description:
        'For $X/mo, every future refrigerator repair is covered under your Alas Protection Plan. One-time job ($89–$400) → Plan member ($1,200–$15K LTV).',
      action: 'Get Same-Day Service',
      href: '#schedule',
    },
  },
} as const;

export type ServiceCategoryPageData = typeof serviceCategoryPageData;
