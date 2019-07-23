<template lang="pug">
	.about
		.about__wrap
			.about__append
				.about__title Блок «Обо мне»
				.about__add
					button(type="button").about__add-btn +
					.about__add-title Добавить группу
			.about__skills
				form.about__skills-form
					.about__skills-add-wrap
						input(type="text" placeholder="Название новой группы").about__skills-group-name
						.about__skills-btns
							button(type="button").about__skills-btn-accept
							button(type="button").about__skills-btn-cancel
					ul.about__skills-item
						li.about__skills-list
							.about__skills-item-btns-wrap
								button(type="button").about__skills-item-edit
								button(type="button").about__skills-item-delete
					.about__skills-new
						input(type="text" placeholder="Новый навык").about__skills-name
						input(type="text" value="100%").about__skills-value
						button(type="button").button.about__skills-btn-add +
				form.about__skills-form
					.about__skills-add-wrap
						input(type="text" placeholder="Workflow").about__skills-group-name
						.about__skills-btns
							button(type="button").about__skills-btn-accept
							button(type="button").about__skills-btn-cancel
					ul.about__skills-item
						li.about__skills-list
							input(type="text" value="Git").about__skills-item-skill
							input(type="text" value="100%").about__skills-item-value
							.about__skills-item-btns-wrap
								button(type="button").about__skills-item-edit
								button(type="button").about__skills-item-delete
						li.about__skills-list
							input(type="text" value="Terminal").about__skills-item-skill
							input(type="text" value="90%").about__skills-item-value
							.about__skills-item-btns-wrap
								button(type="button").about__skills-item-edit
								button(type="button").about__skills-item-delete
						li.about__skills-list
							input(type="text" value="Gulp").about__skills-item-skill
							input(type="text" value="80%").about__skills-item-value
							.about__skills-item-btns-wrap
								button(type="button").about__skills-item-edit
								button(type="button").about__skills-item-delete
						li.about__skills-list
							input(type="text" value="Webpack").about__skills-item-skill
							input(type="text" value="85%").about__skills-item-value
							.about__skills-item-btns-wrap
								button(type="button").about__skills-item-edit
								button(type="button").about__skills-item-delete
					.about__skills-new
						input(type="text" placeholder="Новый навык").about__skills-name
						input(type="text" value="100%").about__skills-value
						button(type="button").button.about__skills-btn-add +
				form.about__skills-form
					.about__skills-add-wrap
						input(type="text" placeholder="Frontend").about__skills-group-name
						.about__skills-btns
							button(type="button").about__skills-btn-accept
							button(type="button").about__skills-btn-cancel
					ul.about__skills-item
						li.about__skills-list
							input(type="text" value="HTML5").about__skills-item-skill
							input(type="text" value="100%").about__skills-item-value
							.about__skills-item-btns-wrap
								button(type="button").about__skills-item-edit
								button(type="button").about__skills-item-delete
						li.about__skills-list
							input(type="text" value="CSS3").about__skills-item-skill
							input(type="text" value="90%").about__skills-item-value
							.about__skills-item-btns-wrap
								button(type="button").about__skills-item-edit
								button(type="button").about__skills-item-delete
						li.about__skills-list
							input(type="text" value="JavaScript").about__skills-item-skill
							input(type="text" value="80%").about__skills-item-value
							.about__skills-item-btns-wrap
								button(type="button").about__skills-item-edit
								button(type="button").about__skills-item-delete
						li.about__skills-list
							input(type="text" value="Jquery и Vue.js").about__skills-item-skill
							input(type="text" value="85%").about__skills-item-value
							.about__skills-item-btns-wrap
								button(type="button").about__skills-item-edit
								button(type="button").about__skills-item-delete
					.about__skills-new
						input(type="text" placeholder="Новый навык").about__skills-name
						input(type="text" value="100%").about__skills-value
						button(type="button").button.about__skills-btn-add +
</template>
<style lang="postcss" scoped>
	@import "normalize.css";
	@import url('../../../../styles/mixins');
	@import url('../../../../styles/layout/base');

	input {
  	border: none;
	}
	
	.about {
		grid-area: about;
	}

	.about__append {
		display: flex;
		align-items: center;
		padding-top: 60px;

		@include phones {
			padding-top: 40px;
			flex-direction: column;
			align-items: inherit;
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
		width: 21px;
		height: 21px;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.about__add-title {
		margin-left: 13px;
		font-size: 16px;
		font-weight: 600;
		color: #383bcf;
	}

	.about__skills {
		padding-top: 60px;
		width: 100%;
		display: grid;
		grid-template-columns: 1fr 1fr;
		grid-gap: 20px;

		@include phones {
			grid-template-columns: 1fr;
			padding-top: 40px;
		}
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
