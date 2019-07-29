<template lang="pug">
	.login
		.login__content
			form.login__form(@submit.prevent="login")
				.login__title Авторизация
				.login__row 
					label.login__label
						.login__label-title Логин
						input.login__input(
							title="Логин"
							icon="user"
							v-model="user.name"
						)
				.login__row.login__row-pass 
					label.login__label
						.login__label-title Пароль
						input.login__input(
							title="Пароль"
							icon="key"
							type="password"
							v-model="user.password"
						)
				button(type="submit").login__button Отправить
</template>
<script>
import $axios from "@/requests";
export default {
	 data() {
    return {
      user: {
        name: "m4key032019",
        password: "m4key"
      }
    };
  },
  methods: {
    async login() {
      try {
        const {
          data: { token }
        } = await $axios.post("/login", this.user);
        localStorage.setItem("token", token);
        $axios.defaults.headers["Authorization"] = `Bearer ${token}`;
        this.$router.replace("/");
      } catch (error) {
        //error handling
      }
    }
  }
};
</script>

<style lang="postcss" scoped>
	@import "normalize.css";
	@import url('../../../styles/mixins');
	@import url('../../../styles/layout/base');

	input {
  	border: transparent;
	}
	
	.login {
		background: url("../../../images/content/admin-bg.jpg") center center / cover no-repeat;
		width: 100%;
    height: 100%;
		position: absolute;
	}
	.login__content{
		background-color: rgba(45, 60, 78, 0.8);
		width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
	}
	.login__form {
		padding: 75px;
		max-height: 517px;
		background-color: #fff;
		position: relative;
		display: flex;
		flex-direction: column;
		align-items: center;
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
			width: 100%;
			min-height: 100%;
			padding: 78px 30px 38px;
		}
	}

	.login__title {
		font-size: 36px;
		font-weight: 600;
		color: #414c63;
		text-align: center;

		@include phones {
			font-size: 30px;
		}
	}

	.login__row {
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

	.login__label-title {
		font-size: 16px;
		font-weight: 600;
		color: rgba(65, 76, 99, 0.3);
	}

	.login__input {
		height: 50px;
		width: 100%;
		outline: none;
	}

	.login__row-pass {
		background: svg-load(
								"avatar.svg",
								fill=rgba(#414c63, 1),
								width=24px,
								height=38px
							) left no-repeat;
	}

	.login__button {
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
