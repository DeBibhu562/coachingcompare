import profilesJson from './instituteProfiles.generated.json';

export type InstituteProfileMeta = {
  slug: string;
  title: string;
  h1: string;
  description: string;
};

export const INSTITUTE_PROFILES = profilesJson as InstituteProfileMeta[];

const bySlug = new Map(INSTITUTE_PROFILES.map((p) => [p.slug, p]));

export function getInstituteProfileMeta(slug: string): InstituteProfileMeta | undefined {
  return bySlug.get(slug);
}

export function getAllInstituteProfileSlugs(): string[] {
  return INSTITUTE_PROFILES.map((p) => p.slug);
}
