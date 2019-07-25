<template lang="pug">
	.admin-header
		header.header
			.container.header__container
				.header__user
					.user
						.user__avatar
								img(src="~images/content/user.jpg", alt="Аватар пользователя").user__avatar-pic
						.user__name Макейкин Александр
				.header__info
					.header__info-text Панель администрирования
				.header__exit
					a(href="#").header__exit-link Выйти
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
	
	.user {
		display: flex;
		align-items: center;
	}

	.user__avatar {
		width: 44px;
		height: 44px;
		overflow: hidden;
		border-radius: 50%;
		flex-shrink: 0;
	}

	.user__avatar-pic {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}

	.user__name {
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
	}

	.header__exit {
		margin-left: 63%;
		justify-content: flex-end;
		opacity: 0.7;
		font-size: 16px;
		@include tablets{
			margin-left: 18%;
		}
	}

</style>
