<template lang="pug">
	form.about__skills-form(v-if="showAddingForm")
		.about__skills-add-wrap
			input(type="text" v-model="skillTitle" placeholder="Название новой группы").about__skills-group-name
			.about__skills-btns
				button(type="button" @click="addSkillGroup").about__skills-btn-accept
				button(type="button" @click="showAddingForm = false"
						v-if="showAddingForm === true").about__skills-btn-cancel
		.about__skills-new
			input(type="text" placeholder="Новый навык").about__skills-name
			input(type="text" value="%").about__skills-value
			button(type="button").button.about__skills-btn-add +
</template>
<script>
import { mapActions } from "vuex";
export default {
	props: {
		category: Object,
		skills: Array,
		title: String
	},
  data() {
    return {
			skillTitle: "",
			showAddingForm: true
    };
  },
  methods: {
    ...mapActions("categories", ["addNewSkillGroup"]),
    async addSkillGroup() {
      try {
        await this.addNewSkillGroup(this.skillTitle);
        this.skillTitle = "";
      } catch (error) {
        alert(error.message)
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

	.about__skills-form {
		width: 100%;
		padding: 10px 25px 25px;
		box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
		background-color: #fff;
	}

	.about__skills-add-wrap {
		height: 55px;
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid #C0C0C0;
	}

	.about__skills-group-name {
		width: 60%;
		height: 40px;
		outline: none;

			&:focus {
				border-bottom: 1px solid #000;
			}
	}

	.about__skills-btn-accept {
		width: 20px;
		height: 20px;
		background: svg-load(
							"tick.svg",
							fill=rgba(#00d70a, 1),
							width=14px,
							height=12px
						) center no-repeat;
	}

	.about__skills-btn-cancel {
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

	.about__skills-item {
		padding-top: 20px;
		min-height: 200px;
	}

	.about__skills-new {
		display: flex;
		justify-content: flex-end;

		@include phones {
			justify-content: space-between;
		}
	}

	.about__skills-name {
		height: 40px;
		width: 40%;
		padding-left: 10px;
		font-size: 16px;
		outline: none;
		border-bottom: 1px solid #000;

		@include phones {
			font-size: 14px;
		}
	}

	.about__skills-value {
		height: 40px;
		width: 20%;
		padding-left: 10px;
		margin-left: 10px;
		font-size: 16px;
		outline: none;
		border-bottom: 1px solid #000;

		@include phones {
			font-size: 14px;
		}
	}

	.about__skills-btn-add {
		width: 40px;
		height: 40px;
		font-size: 32px;
		font-weight: 600;
		margin-left: 20px;
		color: #fff;
		background: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
		border-radius: 50%;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	
</style>
