import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "cover",
			component: () => import("@/views/cover.vue"),
		},
		{
			path: "/gallery",
			name: "gallery",
			component: () => import("@/views/gallery.vue"),
		},
		{
			path: "/background-border",
			name: "background-border",
			component: () => import("@/components/background-border.vue"),
		},

		// 按目录划分
		// {
		//   path: '/directory',
		//   name: 'directory',
		//   component: () => import('@/views/directory.vue'),
		//   children:[
		//     {
		//       path: 'background-border',
		//       name: 'background-border',
		//       component: () => import('@/views/background-border.vue')
		//     },
		//     {
		//       path: 'shape',
		//       name: 'shape',
		//       component: () => import('@/views/shape.vue')
		//     },
		//     {
		//       path: 'visual-effect',
		//       name: 'visual-effect',
		//       component: () => import('@/views/visual-effect.vue')
		//     },
		//     {
		//       path: 'font-typography',
		//       name: 'font-typography',
		//       component: () => import('@/views/font-typography.vue')
		//     },
		//     {
		//       path: 'user-experience',
		//       name: 'user-experience',
		//       component: () => import('@/views/user-experience.vue')
		//     },
		//     {
		//       path: 'structure-layout',
		//       name: 'structure-layout',
		//       component: () => import('@/views/structure-layout.vue')
		//     },
		//     {
		//       path: 'transitions-animations',
		//       name: 'transitions-animations',
		//       component: () => import('@/views/transitions-animations.vue')
		//     }

		//   ]
		// },
		// // 按规范划分
		// {
		//   path: '/specification',
		//   name: 'specification',
		//   component: () => import('@/views/specification.vue')
		// },
	],
});

export default router;
