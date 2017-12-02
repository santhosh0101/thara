const routes = [
    { path: '/', component: home },
    { path: '/signin', component: signin },
    { path: '/signup', component: signup }
]




const router = new VueRouter({
    routes // short for `routes: routes`
})




var app = new Vue({
    el: '#app',
    router,
    data: {
        message: 'Hello santosh'
    }
})
