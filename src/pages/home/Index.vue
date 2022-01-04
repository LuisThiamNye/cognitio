<template>
    <div>
        <h2 class="brand-font">
            {{ $t("appInfo.name") }}
        </h2>
        <div class="row">
            <c-btn
                icon="eva-plus"
                to="/sheet"
            />
            <span class="col" />
            <c-btn
                icon="eva-settings-2"
                @click="$router.push({name: 'AppPreferences'})"
            />
        </div>
        <p>You have no sheets.</p>
    </div>
</template>

<script>
import CBtn from 'components/elements/forms/Button';

export default {
    name: 'HomePage',
    components: {
        'c-btn': CBtn,
    },
    methods: {
    },
};
</script>

<style scoped>
@media (max-width: 719px) {
    #container {
        width: 100%;
        min-width: 0;
    }
}
.brand-font {
    text-align: center;
}
</style>
