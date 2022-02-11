<template>
  <div class="transition ease-in-out duration-300 flex-1 m-5 mb-0 p-5 rounded-md shadow-md flex bg-neutral-50 dark:bg-neutral-800">
    <div class="flex-1 flex items-center justify-center">
      <Clicker :count="pizzaCount" :production="productionPerSecond" @pizza-click="handleClick()" />
    </div>
    <div class="flex-1">
      <Update @add-update="handleAddUpdate()" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      pizzaCount: 0,
      productionPerSecond: 0,
      countUpdateDelay: 1000
    }
  },
  created() {
    this.setProduction()
  },
  methods: {
    handleClick() {
      this.pizzaCount ++
    },
    handleAddUpdate() {
      this.productionPerSecond ++
    },
    setProduction() {
      if (this.productionPerSecond) {
        this.countUpdateDelay = 1000 / this.productionPerSecond
      }
      setTimeout(() => {
            if (this.productionPerSecond > 0) {
              this.pizzaCount++
            } 
            this.setProduction();
        }, this.countUpdateDelay);
    }
  }
}
</script>
