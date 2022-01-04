<template>
    <div>
        <card
            v-for="(card, key) in rows"
            :key="key"
            :focus-index.sync="card.focusIndex"
        />
    </div>
</template>

<script>
import Card from 'components/sheet/Card';

export default {
    name: 'Sheet',
    components: {
        card: Card,
    },
    data() {
        return {
            rows: [],
            selectedPoint: {
                x: null,
                y: null,
            },
        };
    },
    methods: {
        updatePlaceholder() {
            if (!(this.lastRow && this.lastRow.isPlaceholder)) {
                this.rows.push({ isPlaceholder: true });
            }
        },
    },
    computed: {
        lastRow() {
            return this.rows[this.rows.length - 1];
        },
    },
    watch: {
        lastRow() {
            this.updatePlaceholder();
        },
    },
    created() {
        this.updatePlaceholder();
    },
};
</script>

<style>
</style>
