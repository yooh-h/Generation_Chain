import {createRouter,createWebHistory} from 'vue-router'

import mainpageVue from '../views/mainpage.vue'
import createChainVue from '../views/createChain.vue'
import stepOneVue from '../views/createViews/stepOne.vue'
import stepTwoVue from '../views/createViews/stepTwo.vue'

// const routes=


//创建路由器
const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path:'/main',component:mainpageVue
        },
        {
            path:'/',component:createChainVue,
            children:[
                {path:'/stepOne',component:stepOneVue},
                {path:'/stepTwo',component:stepTwoVue},
            ]
        }
    ]
});

//导出路由
export default router