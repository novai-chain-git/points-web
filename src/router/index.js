import { createRouter, createWebHistory } from 'vue-router';
import NProgress from '@/config/nprogress';

let routes = [
	{
		path: '/',
		alias: '/dailyTasks',
		name: 'dailyTasks',
		meta: {
			title: 'dailyTasks'
		},
		component: () => import('@/views/dailyTasks/index.vue')
	},
  // {
  //   path: '/airdropRules',
  //   name: 'airdropRules',
  //   meta: {
  //     title: 'airdropRules'
  //   },
  //   component: () => import('@/views/airdropRules/index.vue')
  // }
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior: () => ({ left: 0, top: 0 })
});
/**
 * @description 路由拦截 beforeEach
 * */
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});
/**
 * @description 路由跳转错误
 * */
router.onError((error) => {
  NProgress.done();
  console.warn('路由错误', error.message);
});
/**
 * @description 路由跳转结束
 * */
router.afterEach(() => {
  NProgress.done();
});
export default router;
