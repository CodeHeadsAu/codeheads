import type { MetadataRoute } from "next";

import { caseStudies } from "@/lib/portfolio";

const siteUrl = "https://codeheads.com.au";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/services",
    "/products",
    "/portfolio",
    "/contact",
  ].map(
    (path) => ({
      url: `${siteUrl}${path}`,
      lastModified: new Date(),
    })
  );

  const caseStudyRoutes = caseStudies.map((project) => ({
    url: `${siteUrl}${project.href}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...caseStudyRoutes];
}
