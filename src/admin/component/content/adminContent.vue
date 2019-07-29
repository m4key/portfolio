<template lang="pug">
	.content
		.container.content__container
			content-about
			content-works
			content-reviews
			
</template>
<script>
	import contentAbout from "./about/contentAbout";
	import contentWorks from "./works/contentWorks";
	import contentReviews from "./reviews/contentReviews";
	export default {
		components: {
			contentAbout,
			contentWorks,
			contentReviews
		}
	}
</script>

<style lang="postcss" scoped>
	@import "normalize.css";
	@import url('../../../styles/mixins');
	@import url('../../../styles/layout/base');

	.content__container {
		grid-template: 
		"about works reviews auth" 1fr
		/ 1fr 1fr 1fr 1fr;
	}

</style>
