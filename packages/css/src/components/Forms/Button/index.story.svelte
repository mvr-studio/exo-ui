<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { createExoCss, composeButtonCss } from '@mvr-studio/exo-css'

  export let Hst: Hst

  const { theme, css } = createExoCss()
  const buttonCss = composeButtonCss({ css }) as any
</script>

<Hst.Story title="Svelte Button">
  <div class={theme}>
    <div>
      <button class={buttonCss().className}>Send</button>
      <button class={buttonCss({ scheme: 'primary' }).className}>Send</button>
      <button class={buttonCss({ scheme: 'ghost' }).className}>Send</button>
    </div>
    <div>
      <button class={buttonCss({ size: 'sm' }).className}>Send</button>
      <button class={buttonCss().className}>Send</button>
      <button class={buttonCss({ size: 'lg' }).className}>Send</button>
    </div>
  </div>
</Hst.Story>
