import { Tractor } from 'lucide-react';
import type { ComponentType } from 'react';

export interface CaseStudy {
  slug: string;
  title: string;
  type: string;
  size: string;
  /** Short summary shown on the listing card. */
  summary: string;
  /** Full write-up, one entry per paragraph. */
  body: string[];
  /** Key facts shown on the detail page. */
  facts: { label: string; value: string }[];
  /** Image used on the listing card. */
  card: string;
  /** Project photos shown on the detail page. */
  gallery: string[];
  /** Optional badge shown on the card (e.g. Agricultural). */
  badge?: { label: string; icon: ComponentType<{ className?: string }> };
}

const img = (slug: string, file: string) => `/images/CaseStudies/${slug}/${file}`;

export const caseStudies: CaseStudy[] = [
  {
    slug: 'curtain-factory-outlet',
    title: 'The Curtain Factory Outlet',
    type: 'Commercial Solar',
    size: '15 kW',
    summary:
      'A family-run curtain and blinds manufacturer wanted to lower its energy bills and reduce reliance on the grid while enhancing its green credentials. With machinery and lighting running throughout the day, solar PV was an ideal fit.',
    body: [
      'A family-run curtain and blinds manufacturer wanted to lower its energy bills and reduce reliance on the grid while enhancing its green credentials. With machinery and lighting running throughout the day, solar PV was an ideal fit.',
      'We installed a 15 kW solar PV system on their factory roof using premium JA Solar panels and a smart inverter system. The setup now offsets a large portion of their daily usage and supports their commitment to a more sustainable supply chain.',
    ],
    facts: [
      { label: 'System size', value: '15 kW' },
      { label: 'Sector', value: 'Manufacturing' },
      { label: 'Panels', value: 'JA Solar' },
      { label: 'Type', value: 'Roof-mounted PV' },
    ],
    card: '/images/homepage/PHOTO-2023-10-17-14-52-27.jpg.webp',
    gallery: [
      'PHOTO-2023-10-17-14-52-04-4-1.jpg',
      'PHOTO-2023-10-17-14-52-04-3.jpg',
      'PHOTO-2023-10-17-14-52-05.jpg',
      'PHOTO-2023-10-17-14-52-05-1.jpg',
      'PHOTO-2023-10-17-14-52-17.jpg',
      'b41578c1-6ec7-480e-84a9-025bf451fd99.jpeg',
    ].map((f) => img('curtain-factory-outlet', f)),
  },
  {
    slug: 'ja-autos',
    title: 'JA Autos',
    type: 'Commercial Solar',
    size: '25 kW',
    summary:
      'This busy MOT garage faced rising overheads due to increased electricity use from diagnostic tools, lifts, and lighting. With a goal of making the business greener and more cost-efficient, they turned to us for a tailored solar solution.',
    body: [
      'This busy MOT garage faced rising overheads due to increased electricity use from diagnostic tools, lifts, and lighting. With a goal of making the business greener and more cost-efficient, they turned to us for a tailored solar solution.',
      'We delivered a 25 kW roof-mounted PV system across the workshop and office building. Designed to meet peak daytime energy demands, the system provides long-term savings and aligns with the business’s sustainability goals.',
    ],
    facts: [
      { label: 'System size', value: '25 kW' },
      { label: 'Sector', value: 'Automotive / MOT' },
      { label: 'Coverage', value: 'Workshop & office' },
      { label: 'Type', value: 'Roof-mounted PV' },
    ],
    card: '/images/homepage/PHOTO-2023-09-12-10-35-28.jpg',
    gallery: [
      'PHOTO-2023-09-12-10-35-28-1.jpg',
      'PHOTO-2023-09-12-10-35-28-2.jpg',
      'PHOTO-2023-09-12-10-35-28-3.jpg',
      'PHOTO-2023-09-12-10-35-29.jpg',
      'PXL_20230911_1434378952-scaled.jpg',
    ].map((f) => img('ja-autos', f)),
  },
  {
    slug: 'farm-installation',
    title: 'Farm Solar Installation',
    type: 'Agricultural Solar',
    size: '30 kW',
    summary:
      "After completing a detailed site assessment, we installed a 30 kW PV system on the farm's storage barn. The system features high-efficiency panels paired with Power Optimisers to maximise yield and system visibility.",
    body: [
      "After completing a detailed site assessment, we installed a 30 kW PV system on the farm's storage barn. The system features high-efficiency panels paired with Power Optimisers to maximise yield and system visibility. The farm now benefits from significantly lower energy bills and a reduced carbon footprint.",
    ],
    facts: [
      { label: 'System size', value: '30 kW' },
      { label: 'Sector', value: 'Agriculture' },
      { label: 'Location', value: 'Storage barn roof' },
      { label: 'Features', value: 'Power Optimisers' },
    ],
    card: '/images/CaseStudies/farm-installation/PHOTO-2024-05-23-09-34-32-4.jpg',
    gallery: [
      'PHOTO-2024-05-23-09-34-32-4.jpg',
      'PHOTO-2024-05-23-09-34-32-3.jpg',
      'PHOTO-2024-05-23-09-34-32-6.jpg',
      'PHOTO-2024-05-23-09-34-33-1.jpg',
      'c3ad11c0-68c7-449f-b63a-29cbd7f46e25.jpg',
    ].map((f) => img('farm-installation', f)),
    badge: { label: 'Agricultural', icon: Tractor },
  },
];

export const getCaseStudy = (slug?: string) =>
  caseStudies.find((c) => c.slug === slug);
