<template>
  <div :class="{'dark': isDark}" class="min-h-screen flex flex-col ">
    <div class="bg-neutral-300 dark:bg-neutral-900 min-h-screen flex flex-col text-neutral-800 dark:text-neutral-200">
      <Home />
      <Footer />
    </div>
    <ThemeSelector :is-dark.sync="isDark" />
  </div>
</template>

<script>
export default {
  name: 'IndexPage',
  data () {
    return {
      isDark: true
    }
  }
}
</script>
