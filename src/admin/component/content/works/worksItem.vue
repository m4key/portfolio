<template lang="pug">
	li.works__project-list
		img(src="~images/content/work_one.jpg").works__project-photo
		.works__project-desc
			.works__project-title Сайт школы образования
			.works__project-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
			a.works__project-link http://loftschool.ru
			.works__project-buttons
				button(type="button").works__project-edit Править
				button(type="button").works__project-delete Удалить
</template>
<style lang="postcss" scoped>
	@import "normalize.css";
	@import url('../../../../styles/mixins');
	@import url('../../../../styles/layout/base');
	
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
