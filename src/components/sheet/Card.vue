<template>
    <table>
        <td>
            <input
                @keydown="keyDown"
                @focus="focusUpdated(0)"
                @blur="focusUpdated(null)"
            >
        </td>
        <td>
            <input
                @keydown="keyDown"
                @focus="focusUpdated(1)"
                @blur="focusUpdated(null)"
            >
        </td>
    </table>
</template>

<script>
export default {
    name: 'Card',
    props: {
        focusIndex: Number,
    },
    data() {
        return {
            model: undefined,
        };
    },
    methods: {
        keyDown() {
        },
        focusUpdated(index) {
            this.$emit('update:focusIndex', index);
        },
    },
};
</script>

<style>
</style>
