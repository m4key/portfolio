<template lang="pug">
	.maincontent
		admin-header
		admin-nav
		.about
			.container.about__container.about-mobile__container
				.about__append
					h2.about__title Блок «Обо мне»
					.about__add
						button(type="button"
						@click="showAddingForm = true"
						v-if="showAddingForm === false").about__add-btn
							.about__add-btn-title Добавить группу
				.about__skills
					ul.about__skills-list
						li.about__skills-item(v-if="showAddingForm")
							skillsAdd
						li.about__skills-item(
							v-for="category in categories"
							:key="category.id"
						)
							skillsGroup(
								:category="category"
								:skills="filterSkillsByCategoryId(category.id)"
							)
</template>
<script>
import adminHeader from "../../header/adminHeader";
import adminNav from "../../nav/adminNav";
import { mapState, mapActions } from 'vuex';

export default {
	components: {
		adminHeader,
		adminNav,
		skillsAdd: () => import('./skillsAdd.vue'),
		skillsGroup: () => import("./skillsGroup.vue")
	},
  data() {
    return {
      showAddingForm: false 
    }
  },
	computed: {
		...mapState("categories", {
			categories: state => state.categories
		}),
		...mapState("skills", {
			skills: state => state.skills
		})
	},
	methods: {
		...mapActions("categories", ["fetchCategories"]),
		...mapActions("skills", ["fetchSkills"]),
		filterSkillsByCategoryId(categoryId) {
			return this.skills.filter(skill => skill.category === categoryId);
		}
	},
	async	created() {
		try {
			await this.fetchCategories();
		} catch (error) {
			alert('Произошла ошибка при загрузке категорий') 
		}
		try {
			await this.fetchSkills();
		} catch (error) {
			alert('Произошла ошибка при загрузке скиллов') 
		}
	}
}
</script>

<style lang="postcss" scoped>
	@import "normalize.css";
	@import url('../../../../styles/mixins');
	@import url('../../../../styles/layout/base');

	input {
  	border: none;
	}
	
	.about {
		grid-area: about;
		background-color: rgba(255, 255, 255, 0.9);
		background: url("../../../../images/content/admin-bg.jpg") center center / cover no-repeat ;
		width: 100%;
    height: 100%;
	}
	.about-mobile__container{
		@include phones{
			width: 100%;
		}
	}
	.about__append {
		display: flex;
		align-items: center;
		padding-top: 60px;

		@include phones {
			flex-direction: column;
			align-items: inherit;
			padding: 40px 20px 20px;
		}
	}

	.about__title {
		font-size: 21px;
		font-weight: bold;
		color: #414c63;
	}

	.about__add {
		display: flex;
		flex-direction: row;
		padding-left: 60px;
		@include phones {
			padding-left: 0;
			padding-top: 36px;
		}
	}

	.about__add-btn {
		color: #fff;
		background: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
		border-radius: 50%;
		width: 20px;
		height: 20px;
		font-size: 16px;
		font-weight: 600;
		color: #383bcf;
		position: relative;
		
		&::after { 
			content: "+";
			color: $text-color;
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
    	bottom: 0;
		}
	}
	.about__add-btn-title {
		padding-left: 30px;
		white-space: nowrap;
	}
	.about__skills-list {
		padding-top: 60px;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;
		margin-bottom: 30px;

		@include phones {
			grid-template-columns: 1fr;
			padding-top: 40px;
		}
	}

</style>
