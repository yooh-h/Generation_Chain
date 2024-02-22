
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import cn from 'element-plus/dist/locale/zh-cn.js'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { createApp,provide,ref} from 'vue'
import App from './App.vue'
import router from '@/router'


const app = createApp(App)




for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(key, component)
}
app.use(ElementPlus,{locale:cn})
app.use(router)
app.mount('#app')





