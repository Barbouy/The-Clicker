<template>
    <div class="update-item h-28 rounded-md dark:bg-neutral-900/20 shadow-md flex justify-center items-center p-2">
        <div class="information flex flex-col justify-between h-full flex-1">
            <div class="information h-full flex justify-center items-center flex-col flex-1">
                <div class="logo">
                    <font-awesome-icon icon="fa-solid fa-bicycle h-12" />
                </div>
                <span class="name">Livreurs : {{count}}</span>
            </div>
            <div class="action flex justify-center">
                <div class="button flex bg-amber-500 dark:bg-amber-600 text-center rounded text-sm py-1 px-2 cursor-pointer select-none" @click="handleBuy">
                    Embaucher
                </div>
            </div>
        </div>
        <div class="statistics flex-1 flex justify-center">
            <span class="production">Production : {{production}}/s</span>
        </div>
    </div>
</template>

<script>
export default {
    name: "UpdateItem",
    data() {
        return {
            count: 0,
            production: 1,
            type: "deliverer"
        }
    },
    methods: {
        handleBuy() {
            this.count ++
            this.$emit("add-update", this.count)
        }
    }
}
</script>