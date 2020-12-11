import './index.css'
import "./set-public-path";
import { h, createApp } from "vue";
import singleSpaVue from "single-spa-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from 'axios';
import VueAxios from 'vue-axios';

const vueLifecycles = singleSpaVue({
    createApp,
    appOptions: {
        render() {
            return h(App, {
                // single-spa props are available on the "this" object. Forward them to your component as needed.
                // https://single-spa.js.org/docs/building-applications#lifecyle-props
                // name: this.name,
                // mountParcel: this.mountParcel,
                // singleSpa: this.singleSpa
            });
        }
    },
    handleInstance(app) {
        app.use(VueAxios, axios).use(store).use(router);
    }
});

export const bootstrap = vueLifecycles.bootstrap;
export const mount = vueLifecycles.mount;
export const unmount = vueLifecycles.unmount;
