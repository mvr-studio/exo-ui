import { defineConfig } from 'histoire'
import { HstVue } from '@histoire/plugin-vue'
import { HstSvelte } from '@histoire/plugin-svelte'

export default defineConfig({
  plugins: [HstVue(), HstSvelte()]
})
