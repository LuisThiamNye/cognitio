<template>
    <q-layout view="hHh lpr fFf">
        <!-- Be sure to play with the Layout demo on docs -->

        <!-- (Optional) The Header -->
        <q-header
            elevated
            class="row"
        >
            <c-btn
                icon="eva-arrow-ios-back"
                @click="goBack"
            />

            <q-tabs class="col">
                <q-route-tab
                    icon="eva-settings-2"
                    :to="{name: 'AppPreferences'}"
                    replace
                    label="Preferences"
                    no-caps
                />
                <q-route-tab
                    icon="eva-info"
                    :to="{name: 'AboutPage'}"
                    replace
                    label="About"
                    no-caps
                />
            </q-tabs>
        </q-header>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import CBtn from 'components/elements/forms/Button';

export default {
    name: 'BackstageLayout',
    data() {
        return {
            leftDrawer: true,
        };
    },
    methods: {
        goBack() {
            this.$router.push('/');
        },
    },
    components: {
        'c-btn': CBtn,
    },
};
</script>
