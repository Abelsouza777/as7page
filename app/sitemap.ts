import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.as7engenharia.com.br'
  
  const pages = [
    '',
    '/psicossocial',
    '/linhadevida',
    '/treinamento',
    '/engenharia',
    '/ambiental',
  ]

  return pages.map((page) => ({
    url: `${baseUrl}${page}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: page === '' ? 1 : 0.8,
  }))
}