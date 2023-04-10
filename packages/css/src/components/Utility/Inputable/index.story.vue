<template>
  <Story title="Vue Inputable">
    <Variant title="Input">
      <div :class="theme" style="margin: 0.5rem">
        <input :class="inputableCss().className" />
      </div>
    </Variant>
    <Variant title="Textarea">
      <div :class="theme" style="margin: 0.5rem">
        <textarea :class="inputableCss().className" />
      </div>
    </Variant>
    <Variant title="Select">
      <div :class="theme" style="margin: 0.5rem">
        <select :class="inputableCss().className">
          <option>Red</option>
          <option>Blue</option>
        </select>
      </div>
    </Variant>
  </Story>
</template>

<script>
import { createExoCss, composeInputableCss } from '@mvr-studio/exo-css'
const { theme, css } = createExoCss()
const inputableCss = composeInputableCss({ css })
export default {
  name: 'Inputable',
  data: () => ({
    inputableCss,
    theme
  })
}
</script>
