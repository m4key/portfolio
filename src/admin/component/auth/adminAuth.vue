<template lang="pug">
	.auth
		.auth__wrap
			.auth__title Авторизация
			.auth__row 
				label.auth__label
					.auth__label-title Логин
					input.auth__input
			.auth__row.auth__row-pass 
				label.auth__label
					.auth__label-title Пароль
					input.auth__input
			button.auth__button Отправить
</template>
<style lang="postcss" scoped>
	@import "normalize.css";
	@import url('../../../styles/mixins');
	@import url('../../../styles/layout/base');

	input {
  	border: none;
	}
	
	.auth {
		grid-area: auth;
	}

	.auth__wrap {
		padding: 75px;
		width: 563px;
		height: 517px;
		background-color: #fff;
		position: relative;

		&::before {
			content: '';
			width: 20px;
			height: 20px;
			position: absolute;
			top: 30px;
			right: 30px;
			background: svg-load(
						"cross.svg",
						fill=rgba(#414c63, 1),
						width=19px,
						height=19px
					) center no-repeat;
		}

		@include phones {
			width: 321px;
			height: 714px;
			padding: 174px 30px 150px;
		}
	}

	.auth__title {
		font-size: 36px;
		font-weight: 600;
		color: #414c63;
		text-align: center;

		@include phones {
			font-size: 30px;
		}
	}

	.auth__row {
		width: 100%;
		padding-left: 40px;
		margin-top: 30px;
		border-bottom: 1px solid #000;
		font-size: 16px;
		background: svg-load(
								"avatar.svg",
								fill=rgba(#414c63, 1),
								width=24px,
								height=38px,
								opacity=0.3
							) left no-repeat;
	}

	.auth__label-title {
		font-size: 16px;
		font-weight: 600;
		color: rgba(65, 76, 99, 0.3);
	}

	.auth__input {
		height: 50px;
		width: 100%;
		outline: none;
	}

	.auth__row-pass {
		background: svg-load(
								"avatar.svg",
								fill=rgba(#414c63, 1),
								width=24px,
								height=38px
							) left no-repeat;
	}

	.auth__button {
		width: 347px;
		height: 80px;
		margin-top: 40px;
		border-radius: 40px 5px;
		color: #fff;
		text-transform: uppercase;
		font-size: 18px;
		font-weight: 700;
		background-image: linear-gradient(to right, #ad00ed 0%, #5500f2 100%);
		
		@include phones {
			width: 260px;
			height: 80px;
		}
	}
</style>
