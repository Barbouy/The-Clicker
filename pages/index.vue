<template>
  <div :class="{'dark': isDark}" class="min-h-screen flex flex-col">
    <div class="min-h-screen transition ease-in-out duration-300 bg-neutral-200 dark:bg-neutral-900 p-5 pb-16 flex text-neutral-800 dark:text-neutral-200">
      <Home/>
    </div>
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
