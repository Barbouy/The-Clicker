<template>
    <div class="transition ease-in-out duration-300 absolute bottom-5 left-5 p-2 rounded-full flex items-center gap-3 bg-neutral-50 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200">
      <font-awesome-icon icon="fa-solid fa-moon" class="p-2 rounded-full cursor-pointer" :class="{'text-sky-600 dark:bg-neutral-50/10 bg-sky-600/20 !cursor-default': isDark}" @click="handleDarkMode(true)"/>
      <font-awesome-icon icon="fa-solid fa-sun" class="p-2 rounded-full cursor-pointer" :class="{'text-yellow-500 dark:bg-neutral-50/10 bg-yellow-600/20 !cursor-default': !isDark}" @click="handleDarkMode(false)"/>
    </div>
</template>

<script>
export default {
    name: "ThemeSelector",
    props: {
        isDark: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        handleDarkMode(value) {
            if (value != this.isDark) {
                this.$emit("update:isDark", value)
            }
        }
    }
}
</script>