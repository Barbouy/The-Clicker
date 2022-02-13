<template>
    <div class="update h-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
        <UpdateItem 
            @add-production="handleUpdate" 
            v-for="update in updates" 
            :key="update.type"
            :update="update"
            :count="count" />
    </div>
</template>

<script>
export default {
    name: "Update",
    methods: {
        handleUpdate(updateType) {
            console.log(updateType)
            let oldUpdate = this.updates.find(oldUpdate => oldUpdate.type == updateType)

            this.$emit("update-production", oldUpdate)

            oldUpdate.cost = Math.round(oldUpdate.cost * oldUpdate.ratio)
            oldUpdate.count++
        }
    },
    props: {
        count: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            updates: [
                {   
                    type: "delivery_guy",
                    label: "Livreurs PizzaEat",
                    cost: 10,
                    ratio: 1.05,
                    production: 0.1,
                    count: 0
                },
                {   
                    type: "franchise",
                    label: "Franchise UnoPizza",
                    cost: 100,
                    ratio: 1.2,
                    production: 2,
                    count: 0
                }
            ]
        }
    }
}
</script>