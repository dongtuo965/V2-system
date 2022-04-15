import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '../components/Layout/Index'
import Center from "../views/Center";
import Home from "../views/Home";
import Taskmanages from "../views/Taskmanages";
import Usermanages from "../views/Usermanages";
import Login from "../views/Login";
Vue.use(VueRouter)
const routes = [
    {
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: Login,
    },

    {
        path: '/layout',
        component: Layout,
        meta: {title: '首页'},
        redirect: '/home',   //重定向 防止页面进来空白  默认选中侧边栏上的文字
        children: [
            {
                path: '/home',
                name: 'home',
                meta: {title: '首页'},
                component: () => import('../views/Home')
            },
            {
                path: '/center',
                name: 'Center',
                meta: {title: '个人中心'},
                component: () => import('../views/Center.vue')
            },
            {
                path: '/usermanages',
                name: 'Usermanages',
                // meta: {title: this.$t('lang.userManagers')},
                component: () => import('../views/Usermanages.vue')

            },
            {
                path: '/taskmanages',
                name: 'Taskmanages',
                meta: {title: '任务管理'},
                component: () => import('../views/Taskmanages.vue'),
                children: [
                    {
                        path: '/taskmanages/urgenttask',
                        name: 'Urgenttask',
                        meta: {title: '紧急任务'},
                        component: () => import('../views/Urgenttask.vue')
                    },
                    {
                        path: '/taskmanages/commontask',
                        name: 'Commontask',
                        meta: {title: '普通任务'},
                        component: () => import('../views/Commontask.vue')
                    }
                ]
            },
        ]
    },
]

const router = new VueRouter({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    if (to.path !== "/login") {
        if (sessionStorage.getItem('role')) {
            next()
        } else {
            next("/login")
            alert('您还没有登录，请先登录账户');
            sessionStorage.clear();

        }
    } else {
        next()
        sessionStorage.clear();
    }

})

// router.beforeEach((to, from, next) => {
//     let flag = sessionStorage.getItem('role')       //获取点击登录按钮时所设置的 sessionStorage
//     if (to.path === '/admin' || to.path === '/test') {        //如果想要跳转home或者algsmanager页面必须判断有没有sessionStorage
//         if (flag) {              //如果有sessionStorage
//             next();				//跳转
//         } else {
//             alert('您还没有登录，请先登录账户');   //没有就先登录
//             next('/login')							//还在登录页
//         }
//     } else {
//         next();
//     }
//     if (to.path === '/login') {				//如果跳转到了登录页面必须清空sessionStorage，否则在地址栏输入路径还是会跳转
//         sessionStorage.clear();				//清空sessionStorage
//     }
// })


export default router
