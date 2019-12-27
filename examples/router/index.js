import Vue from 'vue'
import Router from 'vue-router'
import routeConfig from './routeConfig'

// eslint-disable-next-line
const Home = () => import(/* webpackChunkName: "Home" */ "@/view/homepage/Index.vue")
const Button = () => import(/* webpackChunkName: "Button" */ '@/view/components/button/button.vue')
const Flex = () => import(/* webpackChunkName: "Flex" */ '@/view/components/flex/flex.vue')
const Form = () => import(/* webpackChunkName: "Form" */ '@/view/components/form/form.vue')
const Slider = () => import(/* webpackChunkName: "Slider" */ '@/view/components/form/slider.vue')
const ActionSheet = () => import(/* webpackChunkName: "ActionSheet" */ '@/view/components/actionsheet/actionsheet.vue')
const Dialog = () => import(/* webpackChunkName: "Dialog" */ '@/view/components/dialog/dialog.vue')
const Toast = () => import(/* webpackChunkName: "Toast" */ '@/view/components/toast/toast.vue')
const Progress = () => import(/* webpackChunkName: "progress" */ '@/view/components/progress/progress.vue')
const Toptips = () => import(/* webpackChunkName: "Topstips" */ '@/view/components/toptips/toptips.vue')
const Picker = () => import(/* webpackChunkName: "Picker" */ '@/view/components/picker/picker.vue')
const Swiper = () => import(/* webpackChunkName: "Swiper" */ '@/view/components/swiper/swiper.vue')
const Drawer = () => import(/* webpackChunkName: "Drawer" */ '@/view/components/drawer/drawer.vue')


Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/(home|index)?',
            name: 'Index',
            component: Home
        },
        {
            path: routeConfig.pages.button,
            name: 'Button',
            component: Button
        },
        {
            path: routeConfig.pages.flex,
            name: 'Flex',
            component: Flex
        },
        {
            path: routeConfig.pages.form,
            name: 'Form',
            component: Form
        },
        {
            path: routeConfig.pages.slider,
            name: 'Slider',
            component: Slider
        },
        {
            path: routeConfig.pages.actionsheet,
            name: 'ActionSheet',
            component: ActionSheet
        },
        {
            path: routeConfig.pages.dialog,
            name: 'Dialog',
            component: Dialog
        },
        {
            path: routeConfig.pages.toast,
            name: 'Toast',
            component: Toast
        },
        {
            path: routeConfig.pages.progress,
            name: 'Progress',
            component: Progress
        },
        {
            path: routeConfig.pages.toptips,
            name: 'Toptips',
            component: Toptips
        },
        {
            path: routeConfig.pages.picker,
            name: 'Picker',
            component: Picker
        },
        {
            path: routeConfig.pages.swiper,
            name: 'Swiper',
            component: Swiper
        },
        {
            path: routeConfig.pages.drawer,
            name: 'Drawer',
            component: Drawer
        }
    ]
})
