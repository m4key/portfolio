<template lang="pug">
  .maincontent
    header.header
      .container.header__container
        .header__user
          .user
            .user__avatar
              img(src="./../images/content/user.jpg", alt="Аватар пользователя").user__avatar-pic
            .user__name Макейкин Александр
        .header__info
          .header__info-text Панель администрирования
        .header__exit
          a(href="#").header__exit-link Выйти
    nav.nav
      .container.nav__container
        ul.nav__item 
          li.nav__list
            a(href="#").nav__link Обо мне
          li.nav__list.nav__list--active
            a(href="#").nav__link Работы
          li.nav__list
            a(href="#").nav__link Отзывы
    .content
      .container.content__container
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


        .works
          .works__wrap
            .works__title Блок «Работы»
            form.works__form
              .works__form-title Редактирование работы
              .works__form-content
                .works__form-photo
                  .works__form-photo-text Перетащите или загрузите для загрузки изображения
                  button(type="button").works__form-photo-load Загрузить
                button(type="button").works__form-change Изменить превью
                .works__form-info
                  label.works__form-label 
                    .works__form-label-title Название
                    input(type="text").works__form-input
                  label.works__form-label 
                    .works__form-label-title Ссылка
                    input(type="text").works__form-input
                  label.works__form-label 
                    .works__form-label-title Описание
                    textarea(name="description", cols="30", rows="10").works__form-textarea
                  label.works__form-label 
                    .works__form-label-title Добавление тэга
                    input(type="text").works__form-input
                  ul.works__form-item
                    li.works__form-list
                      .works__form-list-title HTML5
                      button(type="button").works__form-list-delete
                    li.works__form-list
                      .works__form-list-title CSS3
                      button(type="button").works__form-list-delete
                    li.works__form-list
                      .works__form-list-title JavaScript
                      button(type="button").works__form-list-delete
                  .works__from-btns
                    button(type="button").works__from-btns-decline Отмена
                    button(type="button").works__from-btns-save Сохранить
            ul.works__project-item
              li.works__project-add-list
                button(type="button").works__project-add-btn +
                .works__project-add-title Добавить работу
              li.works__project-list
                img(src="./../images/content/work_one.jpg").works__project-photo
                .works__project-desc
                  .works__project-title Сайт школы образования
                  .works__project-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.works__project-link http://loftschool.ru
                  .works__project-buttons
                    button(type="button").works__project-edit Править
                    button(type="button").works__project-delete Удалить
              li.works__project-list
                img(src="./../images/content/work_two.jpg").works__project-photo
                .works__project-desc
                  .works__project-title Сайт школы образования
                  .works__project-text Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                  a.works__project-link http://loftschool.ru
                  .works__project-buttons
                    button(type="button").works__project-edit Править
                    button(type="button").works__project-delete Удалить
        .reviews
          .reviews__wrap
            .reviews__title Блок «Отзывы»
            form.reviews__form
              .reviews__form-title Новый отзыв
              .reviews__form-content
                .reviews__form-photo
                  .reviews__form-avatar
                  button(type="button").reviews__form-avatar-add Добавить фото
                label.reviews__form-label
                  .reviews__form-label-title Имя автора
                  input(type="text").reviews__form-input
                label.reviews__form-label
                  .reviews__form-label-title Титул автора
                  input(type="text").reviews__form-input
                label.reviews__form-desc
                  .reviews__form-label-title Отзыв
                  textarea(name="review").reviews__form-textarea
                  .reviews__form-btns
                    button(type="button").reviews__form-cancel Отмена
                    button(type="button").reviews__form-save Сохранить
            ul.reviews__feedback-item
              li.reviews__feedback-add-list
                button(type="button").reviews__feedback-add-btn +
                .reviews__feedback-add-title Добавить отзыв
              li.reviews__feedback-list
                .reviews__feedback-row
                  .reviews__feedback-avatar
                    img(src="./../images/content/avatar-two.png", alt="Аватар пользователя").reviews__feedback-avatar-pic
                  .reviews__feedback-info
                    .reviews__feedback-title Владимир Сабанцев
                    .reviews__feedback-subtitle Преподаватель
                .reviews__feedback-desc
                  p Этот код выдержит любые испытания. Только пожалуйста, не загружайте сайт на слишком старых браузерах
                .reviews__feedback-controls
                  button(type="button").reviews__feedback-edit Править
                  button(type="button").reviews__feedback-delete Удалить
              li.reviews__feedback-list
                .reviews__feedback-row
                  .reviews__feedback-avatar
                    img(src="./../images/content/avatar-one.png", alt="Аватар пользователя").reviews__feedback-avatar-pic
                  .reviews__feedback-info
                    .reviews__feedback-title Ковальчук Дмитрий
                    .reviews__feedback-subtitle Основатель LoftSchool
                .reviews__feedback-desc
                  p Этот парень проходил обучение веб-разработке не где-то, а в LoftSchool! 4,5 месяца только самых тяжелых испытаний и бессонных ночей!
                .reviews__feedback-controls
                  button(type="button").reviews__feedback-edit Править
                  button(type="button").reviews__feedback-delete Удалить
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
<style lang="postcss" >
@import "normalize.css";
@import url('../styles/mixins');
@import url('../styles/layout/base');
input {
  border: none;
}

.wrapper {
  min-height: 100%;
}

.maincontent {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 80px 74px 1fr;
  grid-template-areas: 
  "header"
  "nav"
  "content";
}

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

.header {
  grid-area: header;
  background-image: linear-gradient(to right, #3e3e59, #454573);
}

.header__container {
  display: grid;
  grid-template: 
  "user info exit" 1fr
  / 0.7fr 1fr 1fr;
  height: 100%;
  align-items: center;

  @include tablets {
    grid-template:
    "user info exit" 1fr
    /  1.4fr 1.2fr 1fr;
  }
}

.header__user {
  grid-area: user;
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
  grid-area: info;

  @include phones {
    display: none;
  }
}

.header__info-text {
  opacity: 0.5;
  font-size: 14px;
}

.header__exit {
  grid-area: exit;
  justify-self: right;
  opacity: 0.7;
  font-size: 16px;
}

.nav {
  grid-area: nav;
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
}

.nav__link {
  text-decoration: none;
}

.content {
  background-color: rgba(255, 255, 255, 0.9);
  background: url("./../images/content/admin-bg.jpg");
  grid-area: content;
}

.content__container {
  grid-template: 
  "about works reviews auth" 1fr
  / 1fr 1fr 1fr 1fr;
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

.works {
  grid-area: works;
}

.works__title {
  font-size: 21px;
  padding-top: 60px;
  font-weight: bold;
  color: #414c63;
}

.works__form {
  display: flex;
  flex-direction: column;
  color: #414c63;
  margin-top: 60px;
  padding: 30px 30px;
  box-shadow: 4.1px 2.9px 20px 0 rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
}

.works__form-title {
  font-size: 18px;
  font-weight: 700;
  padding-bottom: 25px;
  border-bottom: 1px solid silver;
}

.works__form-content {
  margin-top: 40px;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: 1fr 1fr;
  
  @include tablets {
    grid-template-columns: 1fr;
    margin-top: 0;
    padding: 30px 107px ;
  }

  @include phones {
    padding: 0;
    padding-top: 30px;
  }
}

.works__form-photo {
  width: 100%;
  height: 280px;
  padding: 70px 100px;
  border: 1px dashed #a1a1a1;
  background-color: #dee4ed;
  display: flex;
  flex-direction: column;
  align-items: center;

  @include phones {
    width: 73%;
    padding: 10px 20px;
    height: 156px;
  }
}

.works__form-photo-text {
  max-width: 260px;
  text-align: center;
  line-height: 2.13;
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);

  @include phones {
    line-height: 1;
  }
}

.works__form-photo-load {
  width: 181px;
  height: 50px;
  margin-top: 20px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fff;
  border-radius: 25px;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);

  @include tablets {
    margin-top: 0;
  }

  @include phones {
    margin-top: 10px;
  }
}

.works__form-change {
  display: none;
  font-size: 16px;
  font-weight: 600;
  color: #383bcf;
  text-align: center;
  border: none;
  outline: none;
  background: transparent;

  @include tablets {
    display: block;
  }

  @include phones {
    width: 73%;
    font-size: 14px;
  }
}

.works__form-info {
  display: flex;
  flex-direction: column;
  color: #414c63;

  @include phones {
    width: 73%;
  }
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

.works__form-textarea {
  width: 100%;
  height: 150px;
  margin-top: 10px;
  resize: none;
  outline: none;
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

.works__from-btns {
  width: 100%;
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
  
  @include tablets {
    justify-content: center;
  }
}

.works__from-btns-decline {
  background-color: transparent;
  color: #383bcf;
  font-size: 16px;
  font-weight: 600;
  @include phones{
    font-size: 14px;
  }
}

.works__from-btns-save {
  width: 181px;
  height: 60px;
  margin-left: 40px;
  color: #fff;
  font-weight: bold;
  text-transform: uppercase;
  border-radius: 30px;
  font-size: 16px;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);

  @include phones {
    margin-left: 25px;
    font-size: 14px;
  }
}

.works__project-item {
  margin-top: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @include tablets {
    grid-template-columns: 1fr 1fr;
  }

  @include phones {
    grid-template-columns: 1fr;
    margin-top: 10px;
  }
}

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

.reviews {
  grid-area: reviews;
}

.reviews__title {
  padding-top: 60px;
  font-size: 21px;
  font-weight: bold;
  color: #414c63;
}

.reviews__form {
  padding: 30px 30px 40px 30px;
  margin-top: 60px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
}

.reviews__form-title {
  padding-bottom: 20px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid silver;
  color: #414c63;
}

.reviews__form-content {
  margin-top: 45px;
  margin-left: 15px;
  width: 80%;
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 2fr 2fr;
  grid-template-rows: 3fr 4fr;

  @include tablets {
    grid-template-columns: 1fr 2fr;
    width: 95%;
  }

  @include phones {
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-left: 0;
  }
}

.reviews__form-photo {
   grid-row: 1/3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

    @include phones {
      grid-row: intial;
  }
}

.reviews__form-avatar {
  border-radius: 50%;
  width: 200px;
  height: 200px;
  background-color: #dee4ed;
  background: svg-load(
              "user.svg",
              fill=rgba(#fff, 1),
              width=84px,
              height=112px
            ) center no-repeat #dee4ed;
}

.reviews__form-avatar-add {
  margin-top: 30px;
  color: #383bcf;
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;
}

.reviews__form-label {
  display: flex;
  flex-direction: column;
  justify-content: center;

  @include tablets {
    width: 70%;
  }

  @include phones {
    margin-top: 20px;
    width: 100%;
  }
}

.reviews__form-label-title {
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);

  @include phones {
    font-size: 14px;
  }
}

.reviews__form-input {
  height: 50px;
  width: 100%;
  margin-top: 10px;
  outline: none;
  border-bottom: 1px solid #000;
  font-size: 16px;

  @include phones {
    font-size: 14px;
  }
}

.reviews__form-desc {
  grid-column: 2/4;

  @include tablets {
    grid-column: 2/3;
  }

  @include phones {
    margin-top: 20px;
    grid-column: intial;
  }
}

.reviews__form-textarea {
  width: 100%;
  height: 120px;
  margin-top: 15px;
  border: 1px solid #000;
  outline: none;
  resize: none;
}

.reviews__form-btns {
  margin-left: 15px;
  margin-top: 25px;
  display: flex;
  justify-content: flex-end;

  @include tablets {
    width: 90%;
  }

  @include phones {
    margin-left: 0;
    width: 100%;
    justify-content: center;
  }
}

.reviews__form-cancel {
  background-color: transparent;
  color: #383bcf;
  font-size: 16px;
  font-weight: 600;

  @include phones {
    font-size: 14px;
  }
}

.reviews__form-save {
  background-color: transparent;
  width: 181px;
  height: 60px;
  margin-left: 60px;
  border-radius: 30px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);

  @include phones {
    margin-left: 25px;
    font-size: 14px;
  }
}

.reviews__feedback-item {
  margin-top: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;

  @include tablets {
    grid-template-columns: 1fr 1fr;
  }

  @include phones {
    grid-template-columns: 1fr;
  }
}

.reviews__feedback-add-list {
  min-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 30px;
  background-image: linear-gradient(to right, #006aed 0%, #3f35cb 100%);
  @include phones {
    min-height: 111px;
    flex-direction: row;
  }
}

.reviews__feedback-add-btn {
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

.reviews__feedback-add-title {
  font-size: 18px;
  font-weight: bold;
  line-height: 1.67;
  margin-top: 30px;

  @include phones {
    margin-top: 0;
    margin-left: 20px;
  }
}

.reviews__feedback-list {
  padding: 20px;
  margin-bottom: 30px;
  box-shadow: 4px 3px 20px rgba(0, 0, 0, 0.07);
  background-color: #ffffff;
}

.reviews__feedback-row {
  display: flex;
  justify-content: flex-start;
  padding-bottom: 30px;
  border-bottom: 1px solid silver;
}

.reviews__feedback-avatar {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  overflow: hidden;
}

.reviews__feedback-avatar-pic {
  object-fit: cover;
  object-position: top;
  height: 100%;
  width: 100%;
}

.reviews__feedback-info {
  margin-left: 30px;

  @include phones {
    margin-left: 20px;
  }
}

.reviews__feedback-title {
  font-size: 18px;
  font-weight: bold;
  color: #414c63;

  @include phones {
    font-size: 16px;
  }
}

.reviews__feedback-subtitle {
  font-size: 16px;
  font-weight: 600;
  color: #414c63;
  opacity: 0.5;

  @include phones {
    font-size: 14px;
  }
}

.reviews__feedback-desc {
  margin-top: 30px;
  font-size: 16px;
  font-weight: 600;
  color: #414c63;
  opacity: 0.7;
  line-height: 1.88;

  @include phones {
    font-size: 14px;
  }
}

.reviews__feedback-controls {
  margin-top: 80px;
  display: flex;
  justify-content: space-between;
}

.reviews__feedback-edit {
  position: relative;
  background-color: transparent;
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);

  @include phones {
    font-size: 14px;
  }

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
}

.reviews__feedback-delete {
  position: relative;
  background: transparent;
  margin-right: 18px;
  font-size: 16px;
  font-weight: 600;
  color: rgba(65, 76, 99, 0.5);

  @include phones {
    font-size: 14px;
  }

  &::after {
    content: "";
    position: absolute;
    margin-left: 10px;
    width: 18px;
    height: 18px;
    background: svg-load(
          "cross.svg",
          fill=rgba(#bf2929, 1),
          width=14px,
          height=14px,
          opacity=1;
        ) center no-repeat;
  }
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