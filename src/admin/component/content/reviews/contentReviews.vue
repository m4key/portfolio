<template lang="pug">
	.reviews
		.reviews__wrap
			.reviews__title Блок «Отзывы»
			form.reviews__form
				.reviews__form-title Новый отзыв
				.reviews__form-content
					.reviews__form-photo
						.reviews__form-avatar
						button(type="button").reviews__form-avatar-add Добавить фото
					label.reviews__form-label
						.reviews__form-label-title Имя автора
						input(type="text").reviews__form-input
					label.reviews__form-label
						.reviews__form-label-title Титул автора
						input(type="text").reviews__form-input
					label.reviews__form-desc
						.reviews__form-label-title Отзыв
						textarea(name="review").reviews__form-textarea
						.reviews__form-btns
							button(type="button").reviews__form-cancel Отмена
							button(type="button").reviews__form-save Сохранить
			ul.reviews__feedback-item
				li.reviews__feedback-add-list
					button(type="button").reviews__feedback-add-btn +
					.reviews__feedback-add-title Добавить отзыв
				li.reviews__feedback-list
					.reviews__feedback-row
						.reviews__feedback-avatar
							img(src="~images/content/avatar-two.png", alt="Аватар пользователя").reviews__feedback-avatar-pic
						.reviews__feedback-info
							.reviews__feedback-title Владимир Сабанцев
							.reviews__feedback-subtitle Преподаватель
					.reviews__feedback-desc
						p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
					.reviews__feedback-controls
						button(type="button").reviews__feedback-edit Править
						button(type="button").reviews__feedback-delete Удалить
				li.reviews__feedback-list
					.reviews__feedback-row
						.reviews__feedback-avatar
							img(src="~images/content/avatar-one.png", alt="Аватар пользователя").reviews__feedback-avatar-pic
						.reviews__feedback-info
							.reviews__feedback-title Ковальчук Дмитрий
							.reviews__feedback-subtitle Основатель LoftSchool
					.reviews__feedback-desc
						p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
					.reviews__feedback-controls
						button(type="button").reviews__feedback-edit Править
						button(type="button").reviews__feedback-delete Удалить
</template>
<style lang="postcss" scoped>
	@import "normalize.css";
	@import url('../../../../styles/mixins');
	@import url('../../../../styles/layout/base');

	input {
  	border: none;
	}
	
	.reviews {
		grid-area: reviews;
	}

	.reviews__title {
		padding-top: 60px;
		font-size: 21px;
		font-weight: bold;
		color: #414c63;
	}

	.reviews__form {
		padding: 30px 30px 40px 30px;
		margin-top: 60px;
		box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
		background-color: #ffffff;
	}

	.reviews__form-title {
		padding-bottom: 20px;
		font-size: 18px;
		font-weight: bold;
		border-bottom: 1px solid silver;
		color: #414c63;
	}

	.reviews__form-content {
		margin-top: 45px;
		margin-left: 15px;
		width: 80%;
		display: grid;
		grid-gap: 30px;
		grid-template-columns: 1fr 2fr 2fr;
		grid-template-rows: 3fr 4fr;

		@include tablets {
			grid-template-columns: 1fr 2fr;
			width: 95%;
		}

		@include phones {
			display: flex;
			flex-direction: column;
			width: 100%;
			margin-left: 0;
		}
	}

	.reviews__form-photo {
		grid-row: 1/3;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

			@include phones {
				grid-row: intial;
		}
	}

	.reviews__form-avatar {
		border-radius: 50%;
		width: 200px;
		height: 200px;
		background-color: #dee4ed;
		background: svg-load(
								"user.svg",
								fill=rgba(#fff, 1),
								width=84px,
								height=112px
							) center no-repeat #dee4ed;
	}

	.reviews__form-avatar-add {
		margin-top: 30px;
		color: #383bcf;
		background-color: transparent;
		font-size: 16px;
		font-weight: 600;
	}

	.reviews__form-label {
		display: flex;
		flex-direction: column;
		justify-content: center;

		@include tablets {
			width: 70%;
		}

		@include phones {
			margin-top: 20px;
			width: 100%;
		}
	}

	.reviews__form-label-title {
		font-size: 16px;
		font-weight: 600;
		color: rgba(65, 76, 99, 0.5);

		@include phones {
			font-size: 14px;
		}
	}

	.reviews__form-input {
		height: 50px;
		width: 100%;
		margin-top: 10px;
		outline: none;
		border-bottom: 1px solid #000;
		font-size: 16px;

		@include phones {
			font-size: 14px;
		}
	}

	.reviews__form-desc {
		grid-column: 2/4;

		@include tablets {
			grid-column: 2/3;
		}

		@include phones {
			margin-top: 20px;
			grid-column: intial;
		}
	}

	.reviews__form-textarea {
		width: 100%;
		height: 120px;
		margin-top: 15px;
		border: 1px solid #000;
		outline: none;
		resize: none;
	}

	.reviews__form-btns {
		margin-left: 15px;
		margin-top: 25px;
		display: flex;
		justify-content: flex-end;

		@include tablets {
			width: 90%;
		}

		@include phones {
			margin-left: 0;
			width: 100%;
			justify-content: center;
		}
	}

	.reviews__form-cancel {
		background-color: transparent;
		color: #383bcf;
		font-size: 16px;
		font-weight: 600;

		@include phones {
			font-size: 14px;
		}
	}

	.reviews__form-save {
		background-color: transparent;
		width: 181px;
		height: 60px;
		margin-left: 60px;
		border-radius: 30px;
		font-size: 16px;
		font-weight: bold;
		color: #ffffff;
		text-transform: uppercase;
		background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);

		@include phones {
			margin-left: 25px;
			font-size: 14px;
		}
	}

	.reviews__feedback-item {
		margin-top: 30px;
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-gap: 20px;

		@include tablets {
			grid-template-columns: 1fr 1fr;
		}

		@include phones {
			grid-template-columns: 1fr;
		}
	}

	.reviews__feedback-add-list {
		min-height: 300px;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		margin-bottom: 30px;
		background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
		@include phones {
			min-height: 111px;
			flex-direction: row;
		}
	}

	.reviews__feedback-add-btn {
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

	.reviews__feedback-add-title {
		font-size: 18px;
		font-weight: bold;
		line-height: 1.67;
		margin-top: 30px;

		@include phones {
			margin-top: 0;
			margin-left: 20px;
		}
	}

	.reviews__feedback-list {
		padding: 20px;
		margin-bottom: 30px;
		box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
		background-color: #ffffff;
	}

	.reviews__feedback-row {
		display: flex;
		justify-content: flex-start;
		padding-bottom: 30px;
		border-bottom: 1px solid silver;
	}

	.reviews__feedback-avatar {
		width: 50px;
		height: 50px;
		border-radius: 50%;
		overflow: hidden;
	}

	.reviews__feedback-avatar-pic {
		object-fit: cover;
		object-position: top;
		height: 100%;
		width: 100%;
	}

	.reviews__feedback-info {
		margin-left: 30px;

		@include phones {
			margin-left: 20px;
		}
	}

	.reviews__feedback-title {
		font-size: 18px;
		font-weight: bold;
		color: #414c63;

		@include phones {
			font-size: 16px;
		}
	}

	.reviews__feedback-subtitle {
		font-size: 16px;
		font-weight: 600;
		color: #414c63;
		opacity: 0.5;

		@include phones {
			font-size: 14px;
		}
	}

	.reviews__feedback-desc {
		margin-top: 30px;
		font-size: 16px;
		font-weight: 600;
		color: #414c63;
		opacity: 0.7;
		line-height: 1.88;

		@include phones {
			font-size: 14px;
		}
	}

	.reviews__feedback-controls {
		margin-top: 80px;
		display: flex;
		justify-content: space-between;
	}

	.reviews__feedback-edit {
		position: relative;
		background-color: transparent;
		font-size: 16px;
		font-weight: 600;
		color: rgba(65, 76, 99, 0.5);

		@include phones {
			font-size: 14px;
		}

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
	}

	.reviews__feedback-delete {
		position: relative;
		background: transparent;
		margin-right: 18px;
		font-size: 16px;
		font-weight: 600;
		color: rgba(65, 76, 99, 0.5);

		@include phones {
			font-size: 14px;
		}

		&::after {
			content: "";
			position: absolute;
			margin-left: 10px;
			width: 18px;
			height: 18px;
			background: svg-load(
						"cross.svg",
						fill=rgba(#bf2929, 1),
						width=14px,
						height=14px,
						opacity=1;
					) center no-repeat;
		}
	}
</style>
