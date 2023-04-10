# ExoUI CSS

Framework agnostic CSS.

## Installation

```sh
$ yarn add @mvr-studio/exo-css
✨  Done in 3.52s.
```

## Usage

### Vue

```vue
<template>
  <div :class="theme">
    <button :class="buttonCss().className">Click me</button>
    <button :class="buttonCss({ scheme: 'primary' }).className">Click me</button>
  </div>
</template>
<script lang="ts">
import { createExoCss, composeButtonCss } from '@mvr-studio/exo-css'
const { theme, css } = createExoCss()
const buttonCss = composeButtonCss({ css })
export default {
  name: 'MyView',
  data: () => ({
    buttonCss,
    theme
  })
}
</script>
```

### Svelte

```svelte
<script lang="ts">
  import { createExoCss, composeButtonCss } from '@mvr-studio/exo-css'
  const { theme, css } = createExoCss()
  const buttonCss = composeButtonCss({ css }) as any
</script>

<div class={theme}>
  <button class={buttonCss().className}>Click me</button>
  <button class={buttonCss({ scheme: 'primary' }).className}>Click me</button>
</div>
```
