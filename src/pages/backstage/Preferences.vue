<template>
    <q-page padding>
        <c-checkbox
            :is-checked.sync="darkThemeEnabled"
            label="Night mode"
        />
    </q-page>
</template>

<script>
import CCheckbox from 'components/elements/forms/Checkbox';
import { mapActions } from 'vuex';

export default {
    name: 'PreferencesPage',
    components: {
        'c-checkbox': CCheckbox,
    },
    created() {
        this.darkThemeEnabled = this.$store.state.theme.colorTheme === 'dark';
    },
    data() {
        return {
            darkThemeEnabled: Boolean,
        };
    },
    methods: {
        ...mapActions([
            'theme/setColorTheme',
        ]),
    },
    watch: {
        darkThemeEnabled(current) {
            this['theme/setColorTheme'](current ? 'dark' : 'light');
        },
    },
};
</script>

<style scoped>
</style>
