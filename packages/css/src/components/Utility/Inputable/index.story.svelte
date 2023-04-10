<script lang="ts">
  import type { Hst } from '@histoire/plugin-svelte'
  import { createExoCss, composeInputableCss } from '@mvr-studio/exo-css'

  export let Hst: Hst

  const { theme, css } = createExoCss()
  const inputableCss = composeInputableCss({ css }) as any
</script>

<Hst.Story title="Svelte Inputable">
  <Hst.Variant title="Input">
    <div class={theme} style="margin: 0.5rem">
      <input class={inputableCss} />
    </div>
  </Hst.Variant>
  <Hst.Variant title="Textarea">
    <div class={theme} style="margin: 0.5rem">
      <textarea class={inputableCss} />
    </div>
  </Hst.Variant>
  <Hst.Variant title="Select">
    <div class={theme} style="margin: 0.5rem">
      <select class={inputableCss}>
        <option>Red</option>
        <option>Blue</option>
      </select>
    </div>
  </Hst.Variant>
</Hst.Story>
