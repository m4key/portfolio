export default [
	{
		path: "/",
		component: () => import("components/content/about/contentAbout.vue"),
		meta: {
			title: "Блок обо мне"
		}
	},
	{
		path: "/works",
		component: () => import("components/content/works/contentWorks.vue"),
		meta: {
			title: "Блок Работы"
		}
	},
	{
		path: "/reviews",
		component: () => import("components/content/reviews/contentReviews.vue"),
		meta: {
			title: "Блок Отзывы"
		}
	},
	{
		path: "/login",
		component: () => import("components/login/login.vue"),
		meta: {
			public: true
		}
	}
];
