import { MetadataRoute } from 'next';
import {
  CITIES_DATA,
  EXAM_CATEGORIES,
  BLOG_POSTS,
  getAllInstituteSlugs,
  getAllStateSlugs,
} from '@/data/coachingData';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://coachingcompare.in';
  const now = new Date();

  // Static core routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/exams`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/methodology`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/compare`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/fees-calculator`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/write-review`, lastModified: now, changeFrequency: 'weekly', priority: 0.75 },
    { url: `${baseUrl}/for-institutes`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/previous-year-papers`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/study-materials`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${baseUrl}/blog`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/verified-faculty`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${baseUrl}/about`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/sitemap`, lastModified: now, changeFrequency: 'weekly', priority: 0.6 },
    { url: `${baseUrl}/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/disclaimer`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ];

  // Institute Profile routes
  const instituteRoutes: MetadataRoute.Sitemap = getAllInstituteSlugs().map((slug) => ({
    url: `${baseUrl}/institute/${slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Editorial Blog Post routes
  const blogRoutes: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // State Hub routes
  const stateRoutes: MetadataRoute.Sitemap = getAllStateSlugs().map((s) => ({
    url: `${baseUrl}/coaching-in-${s.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // City Hub routes
  const cityRoutes: MetadataRoute.Sitemap = CITIES_DATA.map((c) => ({
    url: `${baseUrl}/coaching-centres-in-${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  // Exam Hub routes
  const examRoutes: MetadataRoute.Sitemap = EXAM_CATEGORIES.map((e) => ({
    url: `${baseUrl}/best-${e.slug}-coaching`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Top category in city combinations
  const catCityRoutes: MetadataRoute.Sitemap = [];
  EXAM_CATEGORIES.slice(0, 8).forEach((exam) => {
    CITIES_DATA.slice(0, 15).forEach((city) => {
      catCityRoutes.push({
        url: `${baseUrl}/best-${exam.slug}-coaching-in-${city.slug}`,
        lastModified: now,
        changeFrequency: 'weekly',
        priority: 0.8,
      });
    });
  });

  return [
    ...staticRoutes,
    ...instituteRoutes,
    ...blogRoutes,
    ...stateRoutes,
    ...cityRoutes,
    ...examRoutes,
    ...catCityRoutes,
  ];
}
