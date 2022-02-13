<template>
  <div class="clicker select-none flex flex-col items-center text-4xl gap-6">
    <div class="h-24 group flex items-center" @click="handleClick()">
      <img
        src="https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/google/313/pizza_1f355.png"
        class="transition ease-in-out duration-300w h-20 bg-contain w-full cursor-pointer"
        :class="[isClicking ? 'scale-125' : isHover ? 'scale-110' : '']"
        @mouseover="isHover = true"
        @mouseleave="isHover = false"
      >
    </div>
    <span class="w-full text-center font-bold ">{{ count }}</span>
    <span class="text-center text-sm inline"><strong>{{ activeProduction }}</strong> /s</span>
  </div>
</template>

<script>
import PizzCoinLogo from "@/assets/img/pizzcoin.png"

export default {
  name: 'Clicker',
  data () {
    return {
      isClicking: false,
      isHover: false
    }
  },
  components: { PizzCoinLogo },
  props: {
    count: {
      type: Number,
      required: true
    },
    production: {
      type: Number,
      required: true
    }
  },
  computed: {
    activeProduction() {
      return this.production.toFixed(1)
    }
  },
  methods: {
    handleClick () {
      this.isClicking = true
      this.$emit("pizza-click")
      setTimeout(function () { this.isClicking = false }.bind(this), 150)
    }
  }
}
</script>
