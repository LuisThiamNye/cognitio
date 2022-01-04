<template>
    <div id="home-layout-container">
        <img
            id="background-image"
            src="statics/images/backgrounds/earth-sunrise-src-600.jpg"
            srcset="statics/images/backgrounds/earth-sunrise-xs-600.jpg 600w,
                  statics/images/backgrounds/earth-sunrise-sm-1024.jpg 1024w,
                  statics/images/backgrounds/earth-sunrise-md-1440.jpg 1440w,
                  statics/images/backgrounds/earth-sunrise-lg-1920.jpg 1920w,
                  statics/images/backgrounds/earth-sunrise-xl-2560.jpg 2560w,
                  statics/images/backgrounds/earth-sunrise-xl-4000.jpg 4000w"
            sizes="(max-width: 600px) 600w,
                (max-width: 1024px)  1024w,
                (max-width: 1440px) 1440w,
                (max-width: 1920px) 1920w,
                (max-width: 2560px) 2560w,
                4000w"
            style="height: 100%; width: 100%; object-fit: cover"
        >
        <div
            id="home-page-container"
            class="background-transparent"
        >
            <router-view />
        </div>
    </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex';

const { mapGetters } = createNamespacedHelpers('content/includedMedia');

export default {
    name: 'HomeLayout',
    data() {
        return {

        };
    },
    computed: {
        rootStyle() {
            return `background: url(${this.backgroundImageURI}) no-repeat center center fixed;`;
        },
        ...mapGetters([
            'backgroundImageURI',
        ]),
    },
};
</script>

<style scoped>
#home-page-container {
    float: right;
    height: 100%;
    color: white;
    width: 40%;
    min-width: 500px;
}
#home-layout-container {
    background: black;
    z-index: -1;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}
#background-image {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
}
</style>
