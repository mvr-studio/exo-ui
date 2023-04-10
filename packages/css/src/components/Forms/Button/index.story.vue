<template>
  <Story title="Vue Button">
    <div :class="theme">
      <div>
        <button :class="buttonCss().className">Send</button>
        <button :class="buttonCss({ scheme: 'primary' }).className">Send</button>
        <button :class="buttonCss({ scheme: 'ghost' }).className">Send</button>
      </div>
      <div>
        <button :class="buttonCss({ size: 'sm' }).className">Send</button>
        <button :class="buttonCss().className">Send</button>
        <button :class="buttonCss({ size: 'lg' }).className">Send</button>
      </div>
    </div>
  </Story>
</template>

<script>
import { createExoCss, composeButtonCss } from '@mvr-studio/exo-css'
const { theme, css } = createExoCss()
const buttonCss = composeButtonCss({ css })
export default {
  name: 'Button',
  data: () => ({
    buttonCss,
    theme
  })
}
</script>
