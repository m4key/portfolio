<template lang="pug">
	div
		ul.works__form-item
			li.works__form-list
				.works__form-list-title HTML5
				button(type="button").works__form-list-delete
</template>
<style lang="postcss" scoped>

	@import "normalize.css";
	@import url('../../../../styles/mixins');
	@import url('../../../../styles/layout/base');

	input {
  	border: none;
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

</style>
