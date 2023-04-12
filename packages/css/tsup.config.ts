import { defineConfig } from 'tsup'

export default defineConfig([
  {
    name: 'main',
    entry: ['./src/index.ts'],
    outDir: './dist',
    format: ['esm', 'cjs'],
    sourcemap: true,
    clean: true,
    bundle: true,
    dts: {
      compilerOptions: {
        moduleResolution: 'Node'
      }
    }
  }
])
