import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap{
    return[{
        url: "https://kha-studios.vercel.app",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
];
}