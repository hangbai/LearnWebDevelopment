import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { Button } from "ant-design-vue";
import 'ant-design-vue/dist/antd.less';  //———>后缀是 less，别写成 css 。

const app = createApp(App);
app.config.productionTip = false;

app.use(Button)

app.use(router).mount('#app')