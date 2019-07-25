<template lang="pug">
	li(v-if="editModeOn===false").about__skills-list
		.about__skills-item-skill {{skill.title}}
		.about__skills-item-value {{skill.percent}}
		.about__skills-item-btns-wrap
			button(type="button" @click="editModeOn = true").about__skills-item-edit
			button(type="button" @click="removeExistedSkill").about__skills-item-delete
	li(v-else).about__skills-list
		input(type="text" v-model="editedSkill.title").about__skills-item-skill 
		input(type="text" v-model="editedSkill.percent").about__skills-item-value 
		.about__skills-item-btns-wrap
			button(type="button" @click="editcurrentSkill").about__skills-item-accept
			button(type="button" @click="editModeOn = false").about__skills-item-cancel
</template>
<script>
import { mapActions } from 'vuex';
export default {
	props: {
		skill: Object
	},
	data(){
		return{
			editModeOn: false,
			editedSkill: {...this.skill}
		}
	},
	methods: {			
		...mapActions('skills', ["removeSkill", "editSkill"]),
		async	removeExistedSkill() {
			try {
				await this.removeSkill(this.skill.id);
			} catch (error) {
				//Ошибка
			}
		},
		async editCurrentSkill() {
			try {
				await this.editSkill(this.editedSkill);
				this.editModeOn = false;
			} catch (error) {
				//Ошибка
			}
		}
	}
};
</script>
<style lang="postcss" scoped>
	@import "normalize.css";
	@import url('../../../../styles/mixins');
	@import url('../../../../styles/layout/base');

	input {
  	border: none;
	}
	
	.about__skills-list {
		display: flex;
		justify-content: space-between;
		margin-top: 10px;
	}
	.about__skills-item-skill {
		width: 60%;
		outline: none;

		&:focus{
			border-bottom: 1px solid #000;
		}
		
		@include tablets {
			width: 50%;
		}
	}

	.about__skills-item-value {
		width: 20%;
		outline: none;

		&:focus {
			border-bottom: 1px solid #000;
		}
	}

	.about__skills-item-edit {
		width: 20px;
		height: 20px;
		margin-left: 10px;
		background: svg-load(
						"pencil.svg",
						fill=rgba(#414c63, 1),
						opacity=0.5,
						width=16px,
						height=15px
					) center no-repeat;
	}

	.about__skills-item-delete {
		width: 20px;
		height: 20px;
		margin-left: 10px;
		background: svg-load(
						"trash.svg",
						fill=rgba(#414c63, 1),
						opacity=0.5,
						width=16px,
						height=15px
					) center no-repeat;
	}

	.about__skills-item-accept {
		width: 20px;
		height: 20px;
		background: svg-load(
							"tick.svg",
							fill=rgba(#00d70a, 1),
							width=14px,
							height=12px
						) center no-repeat;
	}

	.about__skills-item-cancel {
		width: 20px;
		height: 20px;
		margin-left: 19px;
		background: svg-load(
						"cross.svg",
						fill=rgba(#bf2929, 1),
						width=15px,
						height=12px
					) center no-repeat;
	}
</style>