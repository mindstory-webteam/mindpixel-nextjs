import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || process.env.VITE_SANITY_PROJECT_ID || 'ridwsomf'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || process.env.VITE_SANITY_DATASET || 'production'

export default defineConfig({
  name: 'myndpixel',
  title: 'MyndPixel Studio',

  projectId,
  dataset,
  basePath: '/studio', // Host the embedded studio at /studio

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
