<template>
    <div id="q-app">
        <router-view />
    </div>
</template>

<script>
import { mapState } from 'vuex';

const colorThemeClassSuffix = '-colortheme';

export default {
    name: 'App',
    created() {
        this.setColorThemeClass(this.$store.state.theme.colorTheme);
    },
    methods: {
        setColorThemeClass(colorTheme) {
            const { classList } = document.body;

            classList.forEach((className) => {
                if (className.endsWith(colorThemeClassSuffix)) {
                    classList.remove(className);
                }
            });
            classList.add(colorTheme + colorThemeClassSuffix);
        },
    },
    computed: {
        ...mapState({
            colorTheme: state => state.theme.colorTheme,
        }),
    },
    watch: {
        colorTheme(current) {
            this.setColorThemeClass(current);
        },
    },
};
</script>

<style lang="stylus"></style>
