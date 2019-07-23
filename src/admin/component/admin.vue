<template lang="pug">
	.maincontent
		admin-header
		admin-nav
		admin-content
			admin-auth
</template>
<script>
	import adminHeader from "./header/adminHeader";
	import adminNav from "./nav/adminNav";
	import adminContent from "./content/adminContent";
	import adminAuth from "./auth/adminAuth";
	export default {
		components: {
			adminHeader,
			adminNav,
			adminContent,
			adminAuth
		}
	}
</script>
<style lang="postcss" scoped>
	@import "normalize.css";
	@import url('../../styles/mixins');
	@import url('../../styles/layout/base');

	.maincontent {
		width: 100%;
		display: grid;
		grid-template-columns: 1fr;
		grid-template-rows: 80px 74px 1fr;
		grid-template-areas: 
		"header"
		"nav"
		"content";
	}
	.container {
		margin: 0 auto;
		max-width: 1080px;
		height: 100%;

		@include tablets {
			max-width: 689px;
		}

		@include phones {
			width: 85%;
			max-width:280px;
		}
	}
</style>
