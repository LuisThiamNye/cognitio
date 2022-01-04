<template>
    <q-page padding>
        <p>About</p>
        <p>{{ appVersion }}</p>
    </q-page>
</template>

<script>
import { version } from 'app/package.json';

export default {
    name: 'AboutPage',
    data() {
        return {

        };
    },
    computed: {
        appVersion() {
            return version;
        },
    },
};
</script>

<style>
</style>
