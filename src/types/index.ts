export interface Project {
  id: string;
  slug: string;
  title: string;
  subtitle?: string;
  category: 'Industrial' | 'Commercial' | 'Institutional' | 'Infrastructure';
  structureType: string;
  location: string;
  schedule: string;
  tonnage?: string;
  codeStandard: string;
  scope: string;
  criticalChallenge: string;
  description: string;
  detailingApproach: string[];
  keyDeliverables?: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
  elementsCount?: string;
  equipmentCount?: string;
  images: {
    hero: string;
    cadModel?: string;
    details?: string[];
  };
  featured?: boolean;
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  headline: string;
  summary: string;
  deliverables: string[];
  image: string;
  standards: string[];
}

export interface MetricStat {
  value: string;
  label: string;
  sublabel?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
  deliverables: string[];
}
