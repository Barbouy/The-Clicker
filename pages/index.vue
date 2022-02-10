<template>
  <div :class="{'dark': isDark}">
    <Home/>
    <ThemeSelector :is-dark.sync="isDark"/>
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      isDark: true
    }
  }
}
</script>
