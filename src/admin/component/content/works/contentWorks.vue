<template lang="pug">
	.maincontent
		admin-header
		admin-nav
		.works
			.container.works__container
				.works__title Блок «Работы»
				form.works__form
					.works__form-title Редактирование работы
					.works__form-content
						.works__form-photo
							.works__form-photo-text Перетащите или загрузите для загрузки изображения
							button(type="button").works__form-photo-load Загрузить
						button(type="button").works__form-change Изменить превью
						.works__form-info
							label.works__form-label 
								.works__form-label-title Название
								input(type="text").works__form-input
							label.works__form-label 
								.works__form-label-title Ссылка
								input(type="text").works__form-input
							label.works__form-label 
								.works__form-label-title Описание
								textarea(name="description", cols="30", rows="10").works__form-textarea
							label.works__form-label 
								.works__form-label-title Добавление тэга
								input(type="text").works__form-input
							ul.works__form-item
								li.works__form-list
									.works__form-list-title HTML5
									button(type="button").works__form-list-delete
								li.works__form-list
									.works__form-list-title CSS3
									button(type="button").works__form-list-delete
								li.works__form-list
									.works__form-list-title JavaScript
									button(type="button").works__form-list-delete
							.works__from-btns
								button(type="button").works__from-btns-decline Отмена
								button(type="button").works__from-btns-save Сохранить
				ul.works__project-item
					li.works__project-add-list
						button(type="button").works__project-add-btn +
						.works__project-add-title Добавить работу
					li.works__project-list
						img(src="~images/content/work_one.jpg").works__project-photo
						.works__project-desc
							.works__project-title Сайт школы образования
							.works__project-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
							a.works__project-link http://loftschool.ru
							.works__project-buttons
								button(type="button").works__project-edit Править
								button(type="button").works__project-delete Удалить
					li.works__project-list
						img(src="~images/content/work_two.jpg").works__project-photo
						.works__project-desc
							.works__project-title Сайт школы образования
							.works__project-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
							a.works__project-link http://loftschool.ru
							.works__project-buttons
								button(type="button").works__project-edit Править
								button(type="button").works__project-delete Удалить
</template>
<script>
	import adminHeader from "../../header/adminHeader";
	import adminNav from "../../nav/adminNav";
	export default {
		components: {
			adminHeader,
			adminNav
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

	.works__form-item {
		width: 100%;
		margin-top: 20px;
		display: flex;
		justify-content: flex-start;
	}

	.works__form-list {
		padding: 5px 10px;
		margin-left: 10px;
		border-radius: 15px;
		background-color: #f4f4f4;
		display: flex;
		align-items: center;

			&:first-child {
				margin-left: 0;
			}

		@include phones {
			padding: 1px;
			font-size: 11px;
		}
	}

	.works__form-list-title {
		font-size: 13px;
		font-weight: 600;
		opacity: 0.5;
		color: #414c63;
		@include phones {
			font-size: 8px;
		}
	}

	.works__form-list-delete {
		margin-left: 5px;
		width: 11px;
		height: 11px;
		background: svg-load(
						"cross.svg",
						fill=rgba(#414c63, 1),
						width=11px,
						height=11px
					) center no-repeat;
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

	.works__project-add-list {
		width: 100%;
		min-height: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		background-image: linear-gradient(to right, #006aed, #3f35cb);

		@include phones {
			min-height: 111px;
			flex-direction: row;
		}
	}

	.works__project-add-btn {
		background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 150px;
		height: 150px;
		color: #fff;
		font-size: 72px;
		font-weight: 300;
		border: 2px solid #ffffff;
		border-radius: 50%;

		@include phones {
			width: 50px;
			height: 50px;
			font-size: 24px;
		}
	}

	.works__project-add-title {
		margin-top: 20px;
		color: #fff;
		font-size: 18px;
		line-height: 1.67;
		font-weight: bold;

		@include phones {
			margin-top: 0;
			margin-left: 21px;
		}
	}

	.works__project-list {
		min-height: 550px;
		background-color: #fff;
		box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
	}

	.works__project-photo {
		width: 100%;
		object-fit: cover;
		max-height: 220px;
	}

	.works__project-desc {
		padding: 20px;
	}

	.works__project-title {
		margin-top: 30px;
		font-size: 18px;
		font-weight: 700;  
		color: #414c63;
	}

	.works__project-text {
		margin-top: 20px;
		margin-bottom: 20px;
		font-size: 16px;
		font-weight: 600;
		line-height: 1.88;
		color: rgba(65, 76, 99, 0.7);

		@include phones {
			font-size: 14px;
		}
	}

	.works__project-link {
		color: #383bcf;
		font-size: 16px;
		font-weight: 600;

		@include phones {
			font-size: 14px;
		}
	}

	.works__project-buttons {
		width: 100%;
		margin-top: 40px;
		display: flex;
		justify-content: space-between;
	}

	.works__project-edit {
		position: relative;
		background-color: transparent;
		color: rgba(65, 76, 99, 0.5);
		font-size: 16px;
		font-weight: 600;

		&::after {
			content: "";
			position: absolute;
			margin-left: 10px;
			width: 18px;
			height: 18px;
			background: svg-load(
							"pencil.svg",
							fill=rgba(#383bcf, 1),
							width=17px,
							height=17px
						) center no-repeat;
		}

		@include phones {
			font-size: 14px;
		}
	}

	.works__project-delete {
		position: relative;
		background: transparent;
		margin-right: 18px;
		color: rgba(65, 76, 99, 0.5);
		font-size: 16px;
		font-weight: 600;

		&::after {
			content: "";
			position: absolute;
			margin-left: 10px;
			width: 14px;
			height: 14px;
			background: svg-load(
						"cross.svg",
						fill=rgba(#bf2929, 1),
						width=14px,
						height=14px,
						opacity=1;
					) center no-repeat;
		}

		@include phones {
			font-size: 14px;
		}
	}

</style>
