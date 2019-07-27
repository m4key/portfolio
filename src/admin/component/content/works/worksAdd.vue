<template lang="pug">
  li.works__project-add-list
    button(type="button").works__project-add-btn +
    .works__project-add-title Добавить работу
</template>
<script>
  export default {
    data() {
      return {
        showAddingForm: true
      }
    }
  }
</script>



<style lang="postcss" scoped>
  @import "normalize.css";
	@import url('../../../../styles/mixins');
	@import url('../../../../styles/layout/base');
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
</style>
