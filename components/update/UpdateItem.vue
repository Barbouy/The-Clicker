<template>
    <div class="w-full update-item h-36 rounded-md dark:bg-neutral-900 bg-neutral-200 shadow-md overflow-hidden flex flex-col">
        <div class="header w-full dark:bg-emerald-900/30 bg-emerald-700 p-2 text-center font-bold shadow-md text-neutral-50">
            {{ update.label }}
        </div>
        <div class="content h-full p-2 flex flex-col justify-center items-center gap-2">
            <div class="quantity flex items-center gap-2">
                <span class="text-xs">Quantité :</span>
                <span class="text-md font-bold">{{ update.count }}</span>
            </div>
            <div class="buy select-none" @click="handleBuy">
                <div class="transition ease-in-out duration-200 flex items-center gap-1 cursor-pointer bg-amber-700 dark:bg-amber-800 py-1 px-2 rounded-md  hover:bg-amber-600 hover:dark:bg-amber-700 text-neutral-50">
                    <span>{{update.cost}}</span>
                    <span class="text-xs">PizzCoins</span>
                </div>
            </div>
            <div class="informations">
                <span class="production text-xs">
                    Production d'une unité : {{ update.production }}/s
                </span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "UpdateItem",
    props: {
        update: {
            type: Object,
            required: true
        },
        count: {
            type: Number,
            required: true
        }
    },
    methods: {
        handleBuy() {
            if (this.update.cost > this.count) {
                return
            }

            this.$emit("add-production", this.update.type)
        }
    }
}
</script>