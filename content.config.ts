import { defineContentConfig, defineCollection, z } from '@nuxt/content'

const timelineSchema = z.object({
  year: z.string(),
  title: z.string(),
  subtitle: z.string(),
  description: z.string(),
  skills: z.array(z.string()).optional()
})

export default defineContentConfig({
  collections: {
    // Main content pages
    content: defineCollection({
      type: 'page',
      source: '*.md'
    }),
    // Social links collection
    social: defineCollection({
      type: 'data',
      source: 'social/*.json',
      schema: z.object({
        icon: z.string(),
        url: z.string(),
        color: z.string().default('black')
      })
    }),
    // Timeline items collection
    education_timeline: defineCollection({
      type: 'data',
      source: 'timeline/education.json',
      schema: timelineSchema
    }),
    experience_timeline: defineCollection({
      type: 'data',
      source: 'timeline/experience.json',
      schema: timelineSchema
    }),
  }
})
