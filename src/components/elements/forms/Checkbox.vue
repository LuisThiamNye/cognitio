<template>
    <div>
        <input
            type="checkbox"
            v-model="isChecked"
            @click="toggled"
            style="margin: 0 10px 0 0"
            :id="inputId"
        ><label :for="inputId">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: 'CCheckbox',
    data() {
        return {
            inputId: this.newGuid(),
        };
    },
    props: {
        label: String,
        isChecked: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        toggled(event) {
            this.$emit('update:isChecked', event.target.checked);
        },
        newGuid() {
            const S4 = () => (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
            return (`${S4() + S4()}-${S4()}-${S4()}-${S4()}-${S4()}${S4()}${S4()}`);
        },
    },
};
</script>

<style scoped>
</style>
