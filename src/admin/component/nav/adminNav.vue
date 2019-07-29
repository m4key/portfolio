<template lang="pug">
  .admin-nav
    nav.nav
      .container.nav__container
        ul.nav__list 
          li.nav__item
            router-link(
              tag="button"
              class="nav__link"
              to="/"
            ).nav__link Обо мне
          li.nav__item
            router-link(
              tag="button"
              class="nav__link"
              to="/works"
            ).nav__link Работы
          li.nav__item
            router-link(
              tag="button"
              class="nav__link"
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

  .nav__list {
    grid-area: navigation;
    display: flex;
    height: 100%;
    margin-left: 29px;
    text-align: center;
    align-items: center;
    justify-items: start;

    @include phones {
      margin-left: 0;
      font-size: 14px;
    }
  }

  .nav__item {
    margin-left: 58px;
    justify-content: center;
    position: relative;
    white-space: nowrap;

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
        left: -25%;

        @include phones {
          width: 98px;
          height: 3px;
          left: -15%;
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
        left: -25%;

        @include phones {
          width: 98px;
          height: 3px;
          left: -15%;
        }
      }
    }
  }

  .nav__link {
    text-decoration: none;
    background: transparent;
    font-size: 16px;
    color: #414c63;
    font-weight: 600;

    &:hover{
      color: #383bcf;
    }

  }
</style>
