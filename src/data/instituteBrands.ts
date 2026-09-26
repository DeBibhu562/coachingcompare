import brandsJson from './instituteBrands.generated.json';

export type InstituteBrand = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  name: string;
  url: string;
  telephone: string;
  email: string;
  address: string;
};

export const INSTITUTE_BRANDS = brandsJson as InstituteBrand[];

const bySlug = new Map(INSTITUTE_BRANDS.map((b) => [b.slug, b]));

export function getInstituteBrand(slug: string): InstituteBrand | undefined {
  return bySlug.get(slug);
}

export function getAllInstituteBrandSlugs(): string[] {
  return INSTITUTE_BRANDS.map((b) => b.slug);
}
