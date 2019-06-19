import Vue from 'vue';
import Router from 'vue-router';
import VueCookie from 'vue-cookie'

Vue.use(Router);
const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () =>import('@/pages/login/login')
    },
    {
      path: '/home',
      name: 'Home',
      component: () => import('@/pages/home/home')
    },
    // {
    //   path: '*',
    //   name: '404',
    //   component: ()
    // }
    
  ],
});
router.beforeEach((to, from, next) => {
  console.log(VueCookie.get('islogin'))
  if(!VueCookie.get('islogin')) {
    if(to.name === 'Login') {
      return next()
    } else {
      return next({name: 'Login'})
    }
  } else {
    next()
  }
})
export default router;
