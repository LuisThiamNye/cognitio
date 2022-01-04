<template>
    <q-btn
        :ripple="false"
        @click="clicked()"
        push
        no-caps
        class="button"
        dense
    >
        <div style="padding:0 4px;margin: -2px 0">
            <q-icon
                :v-if="icon"
                :name="icon"
                style="margin:0 2px 1px 2px"
            />
            <p
                style="margin: 1px 6px -1px 6px; display: inline-block"
                v-if="textSupplied"
            >
                {{ label }}
            </p>
        </div>
    </q-btn>
</template>

<script>
export default {
    name: 'CBtn',
    props: {
        icon: String,
        label: String,
        to: [Object, String],
        replace: Boolean,
    },
    methods: {
        clicked() {
            if (this.to) {
                this.replace
                    ? this.$router.replace(this.to)
                    : this.$router.push(this.to);
            } else {
                this.$emit('click');
            }
        },
    },
    computed: {
        textSupplied() {
            return this.label;
        },
    },
};
</script>

<style scoped>
</style>
