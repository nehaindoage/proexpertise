import { ServiceItem, ProjectCaseStudy, TeamMember, ClientTestimonial } from '../types';

export const LOGO_URL = 'https://res.cloudinary.com/dx6zonqrt/image/upload/v1792059805/proexpertise_xw49qk.jpg';

export const HERO_IMAGE = '/src/assets/images/hero_cinematic_production_1793168502619.jpg';
export const CAR_REEL_IMAGE = '/src/assets/images/cinematography_reel_commercial_1793168503039.jpg';
export const FASHION_IMAGE = '/src/assets/images/photography_editorial_fashion_1793168503450.jpg';
export const STUDIO_IMAGE = '/src/assets/images/studio_kangra_himalayas_1793168504876.jpg';
export const BRAND_IMAGE = '/src/assets/images/brand_design_packaging_1793168503098.jpg';
export const NIGHT_RAIN_IMAGE = '/src/assets/images/gallery_cinematography_night_rain_1793172906422.jpg';
export const RESORT_IMAGE = '/src/assets/images/gallery_resort_himalayas_1793172906948.jpg';
export const PERFUME_IMAGE = '/src/assets/images/gallery_product_perfume_1793172907818.jpg';
export const WEAVER_PORTRAIT_IMAGE = '/src/assets/images/gallery_documentary_portrait_1793172907726.jpg';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'cinematography',
    num: '01',
    title: 'Cinematography',
    tagline: 'High-impact commercial films, brand documentaries, and narrative visuals.',
    description:
      'We combine Hollywood-grade cinema cameras, anamorphic optics, and precise drone tracking to tell unforgettable visual stories. From scripted television spots to panoramic Himalayan expedition films, every frame is meticulously directed, lit, and color-graded.',
    deliverables: [
      '4K / 6K ProRes & RAW Master deliverables',
      'Cinema aspect ratio (2.39:1 & 16:9) plus 9:16 vertical cuts for high-retention campaigns',
      'DaVinci Resolve custom LUT color grade with film emulation',
      'Complete sound design, foley & stereo/binaural audio mastering',
      'FAA/DGCA certified drone aerial photography & FPV chase footage',
      'Full licensed music score rights and subtitle suites'
    ],
    equipment: [
      'ARRI Alexa Mini LF & RED V-Raptor 8K VV',
      'Cooke Anamorphic /i Prime Lens Set & Atlas Orion T2.0',
      'DJI Ronin 4D & Ronin 2 3-Axis Gimbal System',
      'Aputure 1200d Pro & 600c Light Storm Grid',
      'DJI Inspire 3 with Zenmuse X9-8K Air Gimbal'
    ],
    process: [
      'Creative Treatment & Storyboard scripting',
      'Location Scouting & Tech Rehearsal in Himachal & Pan-India',
      'Principal Multi-Camera Production Days',
      'Offline Cut, Sound Design, Color Timing & Delivery'
    ],
    image: CAR_REEL_IMAGE,
    badge: 'Flagship Craft',
    startingRange: 'From ₹1,80,000 / project'
  },
  {
    id: 'photography',
    num: '02',
    title: 'Photography',
    tagline: 'Editorial fashion, architectural hospitality, luxury products, and lifestyle portraiture.',
    description:
      'Still images that command attention in print and digital mediums. We capture the true soul of hospitality resorts, architectural monuments, high-fashion couture, and luxury consumer goods with sculptural light and immaculate medium-format fidelity.',
    deliverables: [
      '100-Megapixel raw captures ready for billboard print',
      'High-end Capture One tethered proofing with instant client approval',
      'Frequency separation skin retouching & textural polish',
      'Web-optimized lightweight WebP & JPG exports with full color profiles',
      'Architecture vertical-tilt perspective correction',
      'Full commercial usage buyout licenses'
    ],
    equipment: [
      'Hasselblad X2D 100C & Sony Alpha 1 50MP Bodies',
      'Sony G Master 24-70mm f/2.8 II, 85mm f/1.4, 135mm f/1.8',
      'Broncolor Siros 800 S & Profoto B10X Plus Monolights',
      'Eizo ColorEdge 4K Calibrated Tethering Monitors'
    ],
    process: [
      'Moodboard curation & talent/prop styling brief',
      'Tethered on-set shooting with real-time exposure proofing',
      'Digital asset curation & star rating review',
      'Master retouching, color balance & export packages'
    ],
    image: FASHION_IMAGE,
    badge: 'Fine Art Precision',
    startingRange: 'From ₹75,000 / shoot day'
  },
  {
    id: 'digital-marketing',
    num: '03',
    title: 'Digital Marketing',
    tagline: 'Performance-driven ad funnels, high-intent SEO, and scalable growth architecture.',
    description:
      'Great visuals require an engine that converts eyeballs into high-paying clients. We build end-to-end paid acquisition funnels on Google Ads and Meta Ads, optimize search visibility, and engineer conversion rates that deliver positive ROI from day one.',
    deliverables: [
      'High-intent Google Search, YouTube & Meta Performance campaigns',
      'Full-funnel creative testing (Hooks, problem statements, CTAs)',
      'Technical SEO audit & high-ranking editorial search architecture',
      'Conversion Rate Optimization (CRO) on landing pages',
      'Automated GA4, Meta Pixel & server-side conversion tracking',
      'Weekly transparent performance analytics & CPA reports'
    ],
    equipment: [
      'Google Ads & Meta Business Suite Enterprise',
      'Ahrefs, Semrush & Hotjar Heatmap Analytics',
      'Looker Studio Custom Client Dashboard',
      'TripleWhale Attribution & Post-Purchase Surveys'
    ],
    process: [
      'Audience Persona Research & Competitor Funnel Audit',
      'Ad Creative Matrix & Landing Page Hook Alignment',
      'Phase 1 Sprint Launch & Micro-Budget Testing',
      'Scaling Winning Ad Sets & Lowering Customer Acquisition Cost'
    ],
    image: HERO_IMAGE,
    badge: 'Growth Engine',
    startingRange: 'From ₹55,000 / month retainer'
  },
  {
    id: 'social-media',
    num: '04',
    title: 'Social Media Marketing',
    tagline: 'High-retention short-form video reels, brand narrative, and active community cultivation.',
    description:
      'We transform ordinary brand channels into cultural destinations. Combining our in-house production crew with algorithmic storytelling, we produce viral short-form reels, thought leadership carousels, and manage active customer relationships.',
    deliverables: [
      '16–24 high-production 4K Instagram Reels / YouTube Shorts monthly',
      'Scroll-stopping visual hooks & kinetic subtitle typography',
      'Curated aesthetic grid curation and monthly calendar planning',
      'Community management, DM inquiries & comment moderation',
      'Influencer seeding and regional creator collaborations',
      'Monthly metric reporting on reach, engagement, and follower growth'
    ],
    equipment: [
      'Native Cinema 9:16 Vertical Rigging',
      'DJI Mic 2 Wireless 32-Bit Float Audio Systems',
      'Frame.io Real-Time Review Pipeline',
      'CapCut Enterprise & DaVinci Speed Editor'
    ],
    process: [
      'Trend forecasting & content pillar mapping',
      'Batch production shooting day (1 shoot = 30 days content)',
      'Rapid turnaround kinetic editing & caption writing',
      'Scheduled automated publishing & active engagement'
    ],
    image: STUDIO_IMAGE,
    badge: 'Viral Retention',
    startingRange: 'From ₹65,000 / month'
  },
  {
    id: 'graphic-design',
    num: '05',
    title: 'Graphic Designing',
    tagline: 'Timeless brand identities, tactile packaging, visual design systems, and 3D motion.',
    description:
      'Design that stands the test of time. We craft brand identities that exude confidence—from logomarks and bespoke typography to tactile packaging boxes, investor decks, and 3D motion brand idents that make your product feel undeniably premium.',
    deliverables: [
      'Complete brand guidelines (Logomark, responsive variants, typography)',
      'Custom color harmony palette & editorial type pairings',
      'Physical product packaging dielines & foil/emboss specifications',
      'Investor pitch decks, sales collateral & corporate brochures',
      '3D product render assets & animated brand identity idents',
      'Vector icon suites and full typography licensing advice'
    ],
    equipment: [
      'Adobe Creative Cloud (Illustrator, Photoshop, InDesign)',
      'Blender & Cinema 4D for 3D packaging visualization',
      'Figma design token libraries & design systems',
      'Pantone Matching System (PMS) Calibrated Swatches'
    ],
    process: [
      'Brand positioning & archetype discovery workshop',
      '3 Distinct visual directions & moodboards',
      'Concept refinement, typography pairing & dieline testing',
      'Comprehensive brand asset package & production handoff'
    ],
    image: BRAND_IMAGE,
    badge: 'Identity Architecture',
    startingRange: 'From ₹80,000 / brand identity'
  }
];

export const PROJECTS_DATA: ProjectCaseStudy[] = [
  {
    id: 'himalayan-grand-tourer',
    title: 'The Great Himalayan GT',
    client: 'Apex Automotive & Overland Club',
    category: 'cinematography',
    categoryLabel: 'Cinematography / Commercial',
    year: '2026',
    duration: '02:45',
    location: 'Dhauladhar Pass, Kangra, HP',
    headline: 'A cinematic high-altitude journey capturing raw speed amidst towering Himalayan ridges.',
    overview:
      'A multi-day commercial shoot commissioned to announce the luxury high-altitude endurance coupe. Filmed at elevations exceeding 3,800 meters in the Kangra and Spiti mountain corridors using high-speed camera chase cars and stabilized drone cinematography.',
    challenge:
      'Sub-zero dawn temperatures, high altitude air density affecting drone batteries, and unpredictable cloud movements over mountain ridges required an agile, highly disciplined film crew.',
    solution:
      'We utilized dual ARRI Alexa Mini LF setups with heated battery wraps and custom vehicle rigging, capturing cinematic golden hour reflections across the coupe curves.',
    metrics: [
      { label: 'Organic Video Views', value: '4.8M+' },
      { label: 'YouTube Engagement Rate', value: '14.2%' },
      { label: 'VIP Test Drive Bookings', value: '+340%' }
    ],
    deliverables: [
      '02:45 Brand Manifesto Cinema Master',
      '3x 30s National Broadcast Spots',
      '6x 9:16 Vertical Kinetic Cuts for Reels',
      'Official Press Photo Pack (45 Selected Stills)'
    ],
    gearUsed: ['ARRI Alexa Mini LF', 'Atlas Orion Anamorphic 40mm & 65mm', 'DJI Ronin 2 Gimbal', 'DJI Inspire 3 Drone'],
    image: CAR_REEL_IMAGE,
    secondaryImage: HERO_IMAGE,
    directorQuote: 'The rugged Himalayan granite in Kangra provided the ultimate architectural contrast to the fluid metallic lines of the GT.'
  },
  {
    id: 'aeterna-botanicals',
    title: 'Aeterna Botanical Skincare',
    client: 'Aeterna Skincure Paris & Mumbai',
    category: 'graphic-design',
    categoryLabel: 'Brand Identity & Packaging',
    year: '2026',
    location: 'Studio Kangra / Paris',
    headline: 'Tactile minimalist packaging and timeless serif visual system for organic Himalayan botanicals.',
    overview:
      'Aeterna required a luxury brand identity that celebrated cold-pressed Himalayan flora. We engineered the entire brand world: typography, blind-embossed linen cartons, custom glass bottle typography, and retail signage guidelines.',
    challenge:
      'Differentiating in an overcrowded clean-beauty category without resorting to generic green leaves or cliché pastel palettes.',
    solution:
      'We developed an architectural warm-stone visual identity using debossed unbleached cotton paper, custom typography, and gold foil accents.',
    metrics: [
      { label: 'D2C Pre-Orders Sold', value: '12,500 units' },
      { label: 'Design Week Feature', value: 'Gold Award' },
      { label: 'Average Order Value (AOV)', value: '₹4,200' }
    ],
    deliverables: [
      'Full Brand Bible & Typography Tokens',
      '3D Photorealistic Packaging Renders',
      'Sustainable Dielines for 8 Skincare SKUs',
      'Retail Counter Display Specifications'
    ],
    gearUsed: ['Adobe Illustrator', 'Cinema 4D & Octane', 'Pantone Formula Guide', 'Eizo ColorEdge'],
    image: BRAND_IMAGE,
    secondaryImage: FASHION_IMAGE,
    directorQuote: 'A tactile package feels like a quiet sanctuary before you even unscrew the lid.'
  },
  {
    id: 'haute-himalaya-couture',
    title: 'Silhouettes of Solitude',
    client: 'Vogue & Maison de Kangra',
    category: 'photography',
    categoryLabel: 'Editorial Photography',
    year: '2025',
    location: 'Kangra Valley Estate',
    headline: 'High-fashion editorial exploring sculptural silhouettes and organic raw silks.',
    overview:
      'A six-spread editorial lookbook pairing avant-garde sculptural garments with minimalist Himalayan architecture. Shot entirely with natural directional window light and subtle medium-format strobe fills.',
    challenge:
      'Balancing high-contrast white textile volume against neutral backdrops without losing fabric micro-textures.',
    solution:
      'Tethered Hasselblad 100-megapixel medium-format capture allowing zero compression, paired with custom parabolic reflectors for ultra-soft feathering.',
    metrics: [
      { label: 'Print Circulation', value: '180,000' },
      { label: 'Social Impressions', value: '8.2M' },
      { label: 'Editorial Awards', value: '3 Nominations' }
    ],
    deliverables: [
      '18 Master Retouched Editorial Spreads',
      'Behind the Scenes 4K Documentary Short',
      'Lookbook Catalog Print Dieline & Layout'
    ],
    gearUsed: ['Hasselblad X2D 100C', 'Broncolor Para 133 HR', 'Sony 85mm f/1.4 GM II', 'Capture One Pro 24'],
    image: FASHION_IMAGE,
    secondaryImage: HERO_IMAGE,
    directorQuote: 'Light is not just illumination; it is the physical sculpture that reveals intention.'
  },
  {
    id: 'himalayan-heritage-retreat',
    title: 'The Kangra Sanctuary Rebrand & Growth',
    client: 'The Dhauladhar Estate & Spa',
    category: 'digital-marketing',
    categoryLabel: 'Digital Marketing & Growth',
    year: '2025',
    location: 'Kangra, HP',
    headline: 'Full-funnel digital marketing engine driving 420% direct luxury bookings in 90 days.',
    overview:
      'The Dhauladhar Estate needed to break free from high OTA commissions (Booking.com/Agoda) and build a loyal direct booking pipeline for their luxury Himalayan villas.',
    challenge:
      'High seasonal vacancy during monsoon and shoulder months, paired with poor Google search visibility for high-net-worth travelers.',
    solution:
      'We combined cinematic video ads featuring the misty estate views with hyper-targeted Google Search & Meta Performance campaigns targeting luxury weekenders from Delhi NCR, Chandigarh, and Mumbai.',
    metrics: [
      { label: 'Direct Booking Revenue', value: '₹2.4 Cr' },
      { label: 'Blended Ad ROAS', value: '6.8x' },
      { label: 'OTA Commission Saved', value: '₹38 Lakhs' }
    ],
    deliverables: [
      'Complete Meta & Google Performance Ads Setup',
      'High-Speed Booking Landing Page Engine',
      'Email Nurture Sequence for Repeat Bookings',
      'Real-Time Live Financial Dashboard'
    ],
    gearUsed: ['Google Ads Enterprise', 'Meta Pixel CAPI', 'Looker Studio', 'Ahrefs Rank Tracker'],
    image: STUDIO_IMAGE,
    secondaryImage: CAR_REEL_IMAGE,
    directorQuote: 'When your marketing is as breathtaking as the destination itself, conversions become natural.'
  },
  {
    id: 'nomad-craft-whisky',
    title: 'Solan Mountain Spirits Social Engine',
    client: 'Nomad Distillers India',
    category: 'social-media',
    categoryLabel: 'Social Media Marketing',
    year: '2026',
    duration: 'Ongoing',
    location: 'Kangra & Pan-India',
    headline: 'Building India’s fastest growing single-malt community through cinematic short-form storytelling.',
    overview:
      'We spearhead the complete social media strategy and production for Nomad Distillers. Crafting 20 cinematic short-form reels every month showing the oak maturation process, spring water harvesting, and cocktail culture.',
    challenge:
      'Strict regulatory constraints on direct alcohol advertising in India required innovative storytelling focusing on craftsmanship and mountain heritage.',
    solution:
      'We produced a documentary-style series "Water & Wood" highlighting artisanal coopers and Himalayan grain farmers.',
    metrics: [
      { label: 'Community Growth', value: '+145K followers' },
      { label: 'Average Reel Watch Time', value: '88%' },
      { label: 'Bar Partner Inquiries', value: '600+' }
    ],
    deliverables: [
      '20 Monthly 4K Cinema Reels',
      'Daily Stories & Community Moderation',
      'Mixology Masterclass Series',
      'Cocktail Photography Portfolio'
    ],
    gearUsed: ['Sony FX6 Cinema Line', 'DJI Ronin 4D', 'DJI Mic 2', 'Aputure Amaran 200x'],
    image: HERO_IMAGE,
    secondaryImage: BRAND_IMAGE,
    directorQuote: 'Stories rooted in truth and heritage will always outshine generic advertising buzz.'
  }
];

export const AGENCY_STATS = [
  { value: '150+', label: 'Commercial Films & Documentaries Completed' },
  { value: '40M+', label: 'Digital Viewership & Audience Impressions' },
  { value: '99.2%', label: 'On-Time Precision & Deliverable Accuracy' },
  { value: '12+', label: 'National & International Creative Citations' }
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: 'Aarav Sharma',
    role: 'Founder & Director of Photography',
    discipline: 'Cinematography / Creative Direction',
    bio: 'Born in Kangra, Aarav spent a decade directing international commercials across Europe and Mumbai before establishing Proexpertise Productions in his Himalayan homeland.',
    credentials: 'ARRI Certified Cinematographer · 14 Years On-Set Experience',
    avatar: HERO_IMAGE
  },
  {
    name: 'Meera Kulkarni',
    role: 'Lead Art Director & Brand Strategist',
    discipline: 'Graphic Design / Typography',
    bio: 'Specializing in timeless editorial identity and tactile packaging. Former senior designer at leading branding consultancies in Bangalore and London.',
    credentials: 'NID Alumna · Typography & Print Craft Specialist',
    avatar: BRAND_IMAGE
  },
  {
    name: 'Vikramaditya Rana',
    role: 'Head of Digital Growth & Performance',
    discipline: 'Digital Marketing / Paid Acquisition',
    bio: 'Data architect who marries cinematic storytelling with algorithmic precision. Has scaled direct-to-consumer and hospitality revenues past ₹50 Crore in attributable pipeline.',
    credentials: 'Ex-Google Partner · 8+ Years Performance Strategy',
    avatar: STUDIO_IMAGE
  }
];

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    quote:
      'Proexpertise completely reimagined how our automotive brand appears to the world. Their cinematography captures an intensity, altitude, and emotional depth that standard production houses simply cannot match.',
    author: 'Rajiv Malhotra',
    position: 'Chief Marketing Officer',
    company: 'Apex Automotive Group',
    projectType: 'Commercial Film & Global Launch',
    year: '2026'
  },
  {
    quote:
      'From the packaging design to the editorial launch photography, working with Proexpertise felt like collaborating with a top-tier European boutique agency. Pure craftsmanship and zero fluff.',
    author: 'Elena Dupont',
    position: 'Creative Director',
    company: 'Aeterna Skincure',
    projectType: 'Brand Identity & Visual System',
    year: '2026'
  },
  {
    quote:
      'Our direct luxury bookings exploded by 420% in three months. Their digital marketing team understands ROI as deeply as their camera crew understands light. Unmatched combination in India.',
    author: 'Sanjeev Katoch',
    position: 'Managing Director',
    company: 'The Dhauladhar Estate',
    projectType: 'Performance Marketing & Video Engine',
    year: '2025'
  }
];

export const FAQS = [
  {
    q: 'Are you based only in Kangra, or do you travel across India and internationally?',
    a: 'While our primary production studio, color grading suites, and gear vault are nestled in Kangra, Himachal Pradesh (176225), our teams regularly deploy across Delhi NCR, Mumbai, Bangalore, Goa, Ladakh, and international locations. We manage full logistics, equipment carnet, and remote review.'
  },
  {
    q: 'How fast can a commercial project or photoshoot be turned around?',
    a: 'Standard commercial video productions take 2 to 4 weeks from concept approval to final color grade and sound delivery. For expedited social media campaigns or urgent launch shoots, we offer an expedited 7-day turnaround sprint.'
  },
  {
    q: 'Do you provide raw unedited footage and photography files?',
    a: 'Yes. Upon project completion and balance settlement, clients receive all licensed master exports. Full RAW cinema files (ProRes RAW / REDCODE) or uncompressed photography sets can be provided on encrypted high-speed SSD drives by agreement.'
  },
  {
    q: 'Can we combine multiple services into a single ongoing retainer?',
    a: 'Absolutely. Over 60% of our partners utilize our 360° Studio Retainer—combining monthly short-form video reels, ongoing ad management, graphic design support, and quarterly hero photo shoots for maximum cost efficiency and consistent brand fidelity.'
  }
];

export const GALLERY_PHOTOS = [
  {
    id: 'photo-1',
    image: CAR_REEL_IMAGE,
    title: 'High-Altitude Anamorphic GT Commercial',
    client: 'Apex Automotive',
    service: 'cinematography' as const,
    serviceLabel: 'Cinematography',
    aspectRatio: 'aspect-[16/9]' as const,
    camera: 'ARRI Alexa Mini LF',
    lens: 'Atlas Orion Anamorphic 40mm',
    location: 'Dhauladhar Pass, HP',
    year: '2026',
    tag: 'Commercial Film Still'
  },
  {
    id: 'photo-2',
    image: FASHION_IMAGE,
    title: 'Sculptural Raw Silk Couture',
    client: 'Maison de Kangra',
    service: 'photography' as const,
    serviceLabel: 'Fashion Photography',
    aspectRatio: 'aspect-[3/4]' as const,
    camera: 'Hasselblad X2D 100C',
    lens: '85mm f/1.4 GM II',
    location: 'Studio Kangra',
    year: '2026',
    tag: 'Editorial Portrait'
  },
  {
    id: 'photo-3',
    image: RESORT_IMAGE,
    title: 'Twilight Alpine Sanctuary',
    client: 'The Dhauladhar Estate',
    service: 'photography' as const,
    serviceLabel: 'Architecture Photography',
    aspectRatio: 'aspect-[4/3]' as const,
    camera: 'Sony Alpha 1 50MP',
    lens: 'Sony G Master 24-70mm f/2.8',
    location: 'Upper Kangra Valley',
    year: '2025',
    tag: 'Hospitality Architecture'
  },
  {
    id: 'photo-4',
    image: NIGHT_RAIN_IMAGE,
    title: 'Rain Chase Cinematic Sequence',
    client: 'Overland Expeditions',
    service: 'cinematography' as const,
    serviceLabel: 'Cinematography',
    aspectRatio: 'aspect-[16/9]' as const,
    camera: 'RED V-Raptor 8K VV',
    lens: 'Cooke Anamorphic /i Prime',
    location: 'Spiti Highway, HP',
    year: '2026',
    tag: 'Film Sequence Master'
  },
  {
    id: 'photo-5',
    image: PERFUME_IMAGE,
    title: 'Aura Lumière Fragrance Still',
    client: 'Aeterna Skincure',
    service: 'photography' as const,
    serviceLabel: 'Product Photography',
    aspectRatio: 'aspect-[3/4]' as const,
    camera: 'Hasselblad X2D 100C',
    lens: 'Macro 120mm f/2.8',
    location: 'Still Life Suite',
    year: '2026',
    tag: 'Luxury Still Life'
  },
  {
    id: 'photo-6',
    image: BRAND_IMAGE,
    title: 'Botanical Packaging Architecture',
    client: 'Aeterna Botanicals',
    service: 'graphic-design' as const,
    serviceLabel: 'Graphic Design',
    aspectRatio: 'aspect-[4/3]' as const,
    camera: 'High-Res Studio Capture',
    lens: '50mm Art Prime',
    location: 'Studio Kangra',
    year: '2026',
    tag: 'Packaging Design'
  },
  {
    id: 'photo-7',
    image: HERO_IMAGE,
    title: 'Peak Camera Crew Rigging',
    client: 'Proexpertise Field Crew',
    service: 'cinematography' as const,
    serviceLabel: 'Cinematography',
    aspectRatio: 'aspect-[16/9]' as const,
    camera: 'ARRI Alexa Mini LF',
    lens: 'Angenieux Optimo Zoom',
    location: 'Elevation 3,800m, HP',
    year: '2025',
    tag: 'Behind the Scenes'
  },
  {
    id: 'photo-8',
    image: WEAVER_PORTRAIT_IMAGE,
    title: 'Himalayan Handloom Master Artisan',
    client: 'Heritage Guild of Himachal',
    service: 'photography' as const,
    serviceLabel: 'Documentary Photography',
    aspectRatio: 'aspect-[3/4]' as const,
    camera: 'Leica M11 60MP',
    lens: 'Summilux 35mm f/1.4',
    location: 'Kangra Village Guild',
    year: '2025',
    tag: 'Fine Art Documentary'
  },
  {
    id: 'photo-9',
    image: STUDIO_IMAGE,
    title: 'The Kangra Lab & Color Grading Bay',
    client: 'Proexpertise Headquarters',
    service: 'digital-marketing' as const,
    serviceLabel: 'Digital & Post-Production',
    aspectRatio: 'aspect-[16/9]' as const,
    camera: 'Sony FX6 Cinema',
    lens: 'Sigma 24mm f/1.4 Cine',
    location: 'Kangra Valley, HP',
    year: '2026',
    tag: 'Post-Production Studio'
  }
];
