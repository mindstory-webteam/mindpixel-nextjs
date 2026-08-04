import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'

export default defineConfig({
  name: 'myndpixel',
  title: 'MyndPixel Studio',

  projectId: 'ridwsomf',
  dataset: 'production',
  basePath: '/studio', // Host the embedded studio at /studio

  plugins: [
    structureTool(),
    visionTool(),
  ],

  schema: {
    types: schemaTypes,
  },
})
