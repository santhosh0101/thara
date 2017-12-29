const routes =
    [
      {path: '/', components: {default: navbar, two: sidebar}}, {
        path: '/signin',
        components: {default: navbar, two: sidebar, three: signin}
      },
      {
        path: '/signup',
        components: {default: navbar, two: sidebar, three: signup}
      }
    ]



    const router = new VueRouter({
        routes  // short for `routes: routes`
    })



var app = new Vue({el: '#app', router, data: {message: 'Hello santosh'}})
