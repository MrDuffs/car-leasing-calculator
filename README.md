# Калькулятор лизинга авто
## О проекте
Калькулятор лизинга авто - сверстанное по макету веб-приложение, предназначенное
для рассчета стоимости автомобиля в лизинг.

Макет: <https://www.figma.com/file/WvMxu7MRPETlLlHlnIfTTu/Car-leasing-design>

Веб-приложение имеет полностью отзывчивый дизайн. Сам проект реализован при 
помощи библиотеки React.

Работу приложения можно посмотреть по ссылке:
<https://mrduffs.github.io/car-leasing-calculator/>

## Технологии
- React.js/JavaScript
- SCSS
- axios
- ESLint

## Локальный запуск
Для запуска приложения необходимо сделать следующее:
- Клонировать репозиторий
```
git clone https://github.com/MrDuffs/car-leasing-calculator.git
```
- Находясь в директории проекта, выполнить следующие команды:
  - Установка зависимостей
  ```
  npm i
    # или
  yarn
  ```
  - Старт приложения:
  ```
  npm start
    # или
  yarn start
  ```

## ToDo
- ~~Исправить выезжающие за контейнер элементы~~
- ~~Доработать отступы у дизайна мобильных устройств~~
- ~~Решить проблему с брейкпойнтами разрешении экранов~~
- Доработать форматирование полей ввода (доработать input`ы)
- Коррекция вводимых данных в реальном времени
- Валидация входных данных (рассчеты не выполняются при некорректных данных)
- Анимации
- Уведомления
- Рефакторинг (сделать переиспользуемые компоненты)