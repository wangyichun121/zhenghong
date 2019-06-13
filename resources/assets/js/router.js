
import Vue from 'vue'
import VueRouter from 'vue-router'
 
Vue.use(VueRouter);
 
export default new VueRouter({
    routes: [
        {
            name:"example-component",
            path:'/',
            component: resolve =>void(require(['./components/ExampleComponent.vue'], resolve))
        },
    ]
})