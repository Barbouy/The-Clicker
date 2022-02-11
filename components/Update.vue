<template>
    <div class="update h-full">
        <UpdateItem @add-update="handleUpdate" />
    </div>
</template>

<script>
export default {
    name: "Update",
    methods: {
        handleUpdate(count) {
            this.$emit("add-update", count)
        }
    }
}
</script>