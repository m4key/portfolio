# Учебный проект Portfolio
Продвинутый курс по веб-разработке Loftschool, 24.06.2019

**gh-pages:** https://m4key.github.io/portfolio/dist/

**Выполнил:** ***Макейкин Александр***

**Наставник:** ***Болотова Ольга***
> Перед установкой зависимостей и запуском проекта убедитесь, что у вас установлена [последняя версия Node.js & NPM](https://nodejs.org/en/download/current/), а так же 
[последняя версия Yarn](https://yarnpkg.com/ru/docs/install)

##  Чтобы развернуть проект необходимо:
```sh
$ git clone git@github.com:loftschool/ls-advanced-portfolio.git
$ cd ls-advanced-portfolio
$ yarn
```

## Скрипты package.json:

| Скрипт | Назначение |
| ------ | ------ |
| dev | Запустит webpack-dev-server с _горячей_ заменой модулей |
| build | Соберет проект для **production** (проект готов к загрузке на сервер) |
| reg | Консольная утилита для регистрации. Использовать перед началом работы над **админ-панелью**. |

#### Чтобы запустить скрипт:
```sh
$ npm run имя_скрипта
```

##### Либо:
```sh
$ yarn имя_скрипта
```
