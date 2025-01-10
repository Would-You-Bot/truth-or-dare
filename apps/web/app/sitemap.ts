import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://truthordare.gg',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://truthordare.gg/features',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://truthordare.gg/about',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1
    },
    {
      url: 'https://truthordare.gg/privacy',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.7
    },
    {
      url: 'https://truthordare.gg/legal',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5
    },
    {
      url: 'https://truthordare.gg/terms',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.5
    }
  ]
}
