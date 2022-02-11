<template>
  <div class="clicker select-none flex flex-col items-center text-4xl gap-6">
    <div class="h-24 group flex items-center" @click="count++">
      <img
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/pizza_1f355.png"
        class="transition ease-in-out duration-300w h-20 bg-contain w-100 cursor-pointer"
        :class="[isClicking ? 'scale-125' : isHover ? 'scale-110' : '']"
        @mouseover="isHover = true"
        @mouseleave="isHover = false"
        @click="handleClick()"
      >
    </div>
    <span class="w-20 text-center font-bold drop-shadow-md">{{ count }}</span>
  </div>
</template>

<script>
export default {
  name: 'Clicker',
  data () {
    return {
      count: 0,
      isClicking: false,
      isHover: false
    }
  },
  methods: {
    handleClick () {
      this.isClicking = true
      setTimeout(function () { this.isClicking = false }.bind(this), 150)
    }
  }
}
</script>
