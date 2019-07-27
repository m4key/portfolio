<template lang="pug">
	.maincontent
		admin-header
		admin-nav
		.works
			.container.works__container
				h2.works__title Блок «Работы»
				form.works__form(v-if="showAddingForm")
					.works__form-title Редактирование работы
					.works__form-content
						.works__form-photo
							.works__form-photo-text Перетащите или загрузите для загрузки изображения
							button(type="file").works__form-photo-load Загрузить
							button(type="file").works__form-change Изменить превью
						.works__form-info
							label.works__form-label 
								.works__form-label-title Название
								input(type="text" v-model="workTitle").works__form-input
							label.works__form-label 
								.works__form-label-title Ссылка
								input(type="text" v-model="workLink").works__form-input
							label.works__form-label 
								.works__form-label-title Описание
								textarea(name="description", cols="30", rows="10" v-model="workDesc").works__form-textarea
							label.works__form-label 
								.works__form-label-title Добавление тэга
								input(type="text" v-model="workTechs").works__form-input
							worksAddTags
							.works__from-btns
								button(type="button" @click="showAddingForm = false"
						v-if="showAddingForm === true").works__from-btns-decline Отмена
								button(type="button" @click="addWork").works__from-btns-save Сохранить
				ul.works__project-item
					worksAdd
					worksItem

</template>
<script>
	import { mapState, mapActions } from "vuex";
	import adminHeader from "../../header/adminHeader";
	import adminNav from "../../nav/adminNav";
	export default {
		props: {
		category: Object,
		works: Array,
		title: String,
		link: String,
		description: String,
		techs: String			
	},
	components: {
		adminHeader,
		adminNav,
		worksAdd: () => import("./worksAdd.vue"),
		worksAddTags: () => import("./worksAddTags.vue"),
		worksItem: () => import("./worksItem.vue")
	},
	data() {
		return {
			work:{
				photo:"",
				title: "",
				link: "",
				description: "",
				techs: "",
			},
			workPhoto: "",
			workTitle: "",
			workLink: "",
			workDesc: "",
			workTechs: "",
			showAddingForm: true
		}
	},
	computed: {
		...mapState("categories", {
		categories: state => state.categories
		}),
		...mapState("works", {
			works: state => state.works
		})
	},
	methods: {
		...mapActions("categories", ["fetchCategories"]),
		...mapActions("works", ["addWork"]),
		...mapActions("categories", ["addWorkProject"]),
		filterWorksByCategoryId(categoryId) {
		return this.works.filter(work => work.category === categoryId);
		},
		async addNewWork() {
			try {
				await this.addWork(this.work);
				this.work.photo = "";
				this.work.title = "";
				this.work.link = "";
				this.work.description = "";
				this.work.techs = "";
			} catch (error) {
				alert(error.message)
			}
		},
			...mapActions("categories", ["addNewSkillGroup"]),
		async addWorkGroup() {
			try {
				await this.addNewWorkGroup(this.workPhoto, this.workTitle, this.workLink, this.workDesc, this.workTechs);
				this.workPhoto ="";
				this.workTitle ="";
				this.workLink ="";
				this.workDesc ="";
				this.workTechs ="";
			} catch (error) {
				alert(error.message)
			}
		},
		async	created() {
			try {
				await this.fetchWorks();
			} catch (error) {

			}
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

	.works {
		grid-area: works;
		background-color: rgba(255, 255, 255, 0.9);
		background: url("../../../../images/content/admin-bg.jpg");
	}

	.works__title {
		font-size: 21px;
		padding-top: 60px;
		font-weight: bold;
		color: #414c63;
	}

	.works__form {
		display: flex;
		flex-direction: column;
		color: #414c63;
		margin-top: 60px;
		padding: 30px 30px;
		box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
		background-color: #ffffff;
	}

	.works__form-title {
		font-size: 18px;
		font-weight: 700;
		padding-bottom: 25px;
		border-bottom: 1px solid silver;
	}

	.works__form-content {
		margin-top: 40px;
		display: grid;
		grid-gap: 20px;
		grid-template-columns: 1fr 1fr;
		
		@include tablets {
			grid-template-columns: 1fr;
			margin-top: 0;
			padding: 30px 107px ;
		}

		@include phones {
			padding: 0;
			padding-top: 30px;
			justify-items: center;
		}
	}

	.works__form-photo {
		width: 100%;
		height: 280px;
		padding: 70px 100px;
		border: 1px dashed #a1a1a1;
		background-color: #dee4ed;
		display: flex;
		flex-direction: column;
		align-items: center;

		@include phones {
			width: 73%;
			padding: 10px 20px;
			height: 156px;
		}
	}

	.works__form-photo-text {
		max-width: 260px;
		text-align: center;
		line-height: 2.13;
		font-size: 16px;
		font-weight: 600;
		color: rgba(65, 76, 99, 0.5);

		@include phones {
			line-height: 1;
		}
	}

	.works__form-photo-load {
		width: 181px;
		height: 50px;
		margin-top: 20px;
		font-size: 16px;
		font-weight: 700;
		text-transform: uppercase;
		color: #fff;
		border-radius: 25px;
		background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);

		@include tablets {
			margin-top: 0;
		}

		@include phones {
			margin-top: 10px;
		}
	}

	.works__form-change {
		display: none;
		font-size: 16px;
		font-weight: 600;
		color: #383bcf;
		text-align: center;
		border: none;
		outline: none;
		background: transparent;

		@include tablets {
			display: block;
		}

		@include phones {
			width: 73%;
			font-size: 14px;
		}
	}

	.works__form-info {
		display: flex;
		flex-direction: column;
		color: #414c63;

		@include phones {
			width: 73%;
		}
	}

	.works__form-label {
		margin-top: 30px;

		&:first-child {
			margin-top: 0;
		}
	}

	.works__form-label-title {
		font-size: 16px;
		font-weight: 600;
		color: #414c63;
		opacity: 0.5;

		@include phones {
			font-size: 14px;
		}
	}

	.works__form-input {
		height: 40px;
		width: 100%;
		margin-top: 10px;
		outline: none;
		border-bottom: 1px solid #414c63;
	}

	.works__form-textarea {
		width: 100%;
		height: 150px;
		margin-top: 10px;
		resize: none;
		outline: none;
	}
	
	.works__from-btns {
		width: 100%;
		margin-top: 40px;
		display: flex;
		justify-content: flex-end;
		
		@include tablets {
			justify-content: center;
		}
	}

	.works__from-btns-decline {
		background-color: transparent;
		color: #383bcf;
		font-size: 16px;
		font-weight: 600;
		@include phones{
			font-size: 14px;
		}
	}

	.works__from-btns-save {
		width: 181px;
		height: 60px;
		margin-left: 40px;
		color: #fff;
		font-weight: bold;
		text-transform: uppercase;
		border-radius: 30px;
		font-size: 16px;
		background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);

		@include phones {
			margin-left: 25px;
			font-size: 14px;
		}
	}

	.works__project-item {
		margin-top: 40px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 20px;
		margin-bottom: 30px;

		@include tablets {
			grid-template-columns: 1fr 1fr;
		}

		@include phones {
			grid-template-columns: 1fr;
			margin-top: 10px;
		}
	}

</style>
