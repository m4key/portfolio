<template lang="pug">
  .admin-nav
    nav.nav
      .container.nav__container
        ul.nav__item 
          li.nav__list
            router-link(
              to="/"
            ).nav__link Обо мне
          li.nav__list
            router-link(
              to="/works"
            ).nav__link Работы
          li.nav__list
             router-link(
              to="/reviews"
            ).nav__link Отзывы
</template>
<style lang="postcss" scoped>
	@import "normalize.css";
	@import url('../../../styles/mixins');
	@import url('../../../styles/layout/base');

  .container {
		margin: 0 auto;
		max-width: 1080px;
		height: 100%;

		@include tablets {
			max-width: 689px;
		}

		@include phones {
			width: 85%;
			max-width:280px;
		}
	}

  .nav {
    grid-area: nav;
    height: 77px;
  }

  .nav__container {
    grid-template: "navigation" 1fr;
    height: 100%;
  }

  .nav__item {
    grid-area: navigation;
    display: flex;
    font-size: 16px;
    font-weight: 600;
    height: 100%;
    margin-left: 29px;
    text-align: center;
    align-items: center;
    justify-items: start;
    color: #414c63;

    @include phones {
      margin-left: 0;
      font-size: 14px;
    }
  }

  .nav__list {
    margin-left: 58px;
    justify-content: center;
    position: relative;

    &:first-child {
      margin-left: 0;
    }

    @include phones {
      margin-left: 39px;
    }

    &--active {
      color: #383bcf;

      &::before {
        content: "";
        width: 117px;
        height: 3px;
        border-bottom: solid 3px #383bcf;
        position: absolute;
        top: 41px;
        left: -50%;

        @include phones {
          width: 98px;
          height: 3px;
          left: -35%;
        }
      }
    }
    &:hover{
      color: #383bcf;

      &::before {
        content: "";
        width: 117px;
        height: 3px;
        border-bottom: solid 3px #383bcf;
        position: absolute;
        top: 41px;
        left: -44%;

        @include phones {
          width: 98px;
          height: 3px;
          left: -35%;
        }
      }
    }
  }

  .nav__link {
    text-decoration: none;
  }
</style>
