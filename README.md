# Децентралізований Фріланс Маркетплейс на Ethereum

## Огляд

Цей проект є децентралізованим фріланс маркетплейсом, побудованим на блокчейні Ethereum. Він дозволяє клієнтам створювати вакансії та наймати фрілансерів безпечно і прозоро, використовуючи смарт-контракти. 
Для повноцінного використання потрібно ще прикрутити фронтенд.

## Функціонал

- **Створення завдання:** Клієнти можуть створювати нові роботи з вказаними цінами.
- **Прийняття завдання:** Фрілансери можуть приймати пропозиції по роботі.
- **Завершення завдань:** Фрілансери можуть позначати роботу як завершені.
- **Обробка Платежів:** Клієнти можуть оплачувати фрілансерам після завершення роботи.

## Використовувані Технології

- **Ethereum:** Платформа блокчейну, що використовується для розгортання смарт-контрактів.
- **Truffle:** Розробницький фреймворк для Ethereum, що допомагає управляти розробкою та тестуванням смарт-контрактів.
- **Ganache:** Особистий блокчейн Ethereum для тестування смарт-контрактів.
- **Solidity:** Мова програмування для написання смарт-контрактів.
- **Chai:** Бібліотека для тестування, що використовується для написання юніт-тестів на JavaScript.

## Як Почати

### Потреби

- Node.js 18.20.4
- npm (менеджер пакетів Node)
- Truffle
- Ganache

### Інструкція з Установки

1. **Встановлення Node.js та npm:**
   - Завантажте та встановіть [Node.js](https://nodejs.org/) версії 18.20.4, яка включає npm.

2. **Встановлення Truffle:**
   ```bash
   npm install -g truffle

3. **Встановлення Ganache:**

Завантажте Ganache з офіційного сайту та встановіть його на вашій машині.
Клонування Репозиторію:

```bash
git clone <URL_вашого_репозиторію>
cd <назва_папки_репозиторію>
```
4. **Встановлення Залежностей:**

```bash
npm install
```

4. **Запуск Ganache:**

Відкрийте Ganache і запустіть особистий блокчейн.
Розгортання Смарт-Контрактів:

```bash

truffle migrate
```
5. **Запуск Тестів:**

```bash

truffle test
```

