import './style.css'
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueTheMask from "vue-the-mask";
import veeValidatePlugins from "./plugins/vee-validate";
import CircleFlags from "vue-circle-flags";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "../node_modules/nprogress/nprogress.css";

const app = createApp(App);
app.use(createPinia());
app.use(VueTheMask);
app.use(ElementPlus);
app.use(veeValidatePlugins);
app.use(router);
app.use(CircleFlags);

app.mount("#app");