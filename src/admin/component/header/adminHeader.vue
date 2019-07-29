<template lang="pug">
	.admin-header
		header.header
			.container.header__container
				.header__user
					.header__user-avatar
						img(src="~images/content/user.jpg", alt="Аватар пользователя").header__user-pic
				.header__title Макейкин Александр
				.header__info
					.header__info-text Панель администрирования
				.header__exit
					router-link(
						tag="button"
						to="/login"
						).header__exit-link Выйти
</template>
<style lang="postcss" scoped>
	@import "normalize.css";
	@import url('../../../styles/mixins');
	@import url('../../../styles/layout/base');

	.header {
		grid-area: header;
		height: 80px;
		background-image: linear-gradient(to right, #3e3e59, #454573);
	}

	.header__container {
		display: flex;		
		flex-direction: row;
		align-items: center;
		height: 100%;
	}
	
	.header__user {
		white-space: nowrap;
		display: flex;
		align-items: center;
	}

	.header__user-avatar {
		width: 44px;
		height: 44px;
		overflow: hidden;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.header__user-pic {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.header__title {
		color: #fff;
		margin-left: 20px;
		font-size: 18px;
		font-weight: 600;
	}

	.header__info {
		margin-left: 30px;
		@include phones {
			display: none;
		}
	}

	.header__info-text {
		opacity: 0.5;
		font-size: 14px;
		white-space: nowrap;
	}

	.header__exit {
    text-align: right;
		margin-left: auto;
	}
	.header__exit-link{
		background: transparent;
		font-size: 16px;
		opacity: 0.7;
		color: $text-color;
		text-decoration: underline;
	}
</style>
