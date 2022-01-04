<template>
    <q-layout view="hHh Lpr fFf">
        <q-header elevated>
            <c-btn
                icon="r_home"
                :to="{name: 'HomePage'}"
            />
        </q-header>

        <q-drawer
            v-model="leftDrawer"
            side="left"
            bordered
            content-class="bg-grey-2"
        >
            <q-scroll-area class="fit q-pa-sm">
                <!-- Content here -->
            </q-scroll-area>
        </q-drawer>

        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import CBtn from 'components/elements/forms/Button';

export default {
    name: 'SheetLayout',
    components: {
        'c-btn': CBtn,
    },
    data() {
        return {
            leftDrawer: false,
        };
    },
};
</script>
