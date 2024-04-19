export const service = [
  'DRIVER_QUALIFICATION_FILES',
  'DRUG_AND_ALCOHOL',
  'HEAVY_USE_TAX',
] as const;

export type Service = (typeof service)[number];

export const serviceLabels: Record<Service, string> = {
  DRIVER_QUALIFICATION_FILES: 'Driver Qualification Files',
  DRUG_AND_ALCOHOL: 'Drug and Alcohol Program',
  HEAVY_USE_TAX: 'Heavy Use Tax/2290',
} as const;
