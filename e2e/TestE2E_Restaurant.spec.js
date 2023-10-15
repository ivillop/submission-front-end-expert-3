/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const assert = require('assert');

Feature('Menyukai Restoran');
Scenario('Menampilkan restoran favorit yang kosong', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.seeElement('#mainContent');
  I.seeElement('#data-kuliner');
});
Scenario('menyukai satu restoran', async ({ I }) => {
  I.amOnPage('/');
  I.wait(10);
  I.seeElement('#mainContent');
  I.seeElement('#data-kuliner');
  I.seeElement('img');
  const firstRestaurant = locate('img').first();
  I.click(firstRestaurant);
  I.wait(10);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(10);
  I.amOnPage('/#/favorite');
  I.seeElement('#mainContent');
});

Feature('Tidak menyukai Restoran');
Scenario('Batal menyukai satu restoran', async ({ I }) => {
  I.amOnPage('/');
  I.wait(10);
  I.seeElement('#mainContent');
  I.seeElement('#data-kuliner');
  I.seeElement('img');
  const firstRestaurant = locate('img').first();
  I.click(firstRestaurant);
  I.wait(10);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(10);
  I.amOnPage('/#/favorite');
  I.seeElement('#mainContent');
  I.seeElement('img');
  const secondRestaurant = locate('img').first();
  I.click(secondRestaurant);
  I.wait(10);
  I.seeElement('#likeButton');
  I.click('#likeButton');
  I.wait(10);
  I.amOnPage('/#/favorite');
  I.seeElement('#mainContent');
});

Feature('Mengisi Form Review');
Scenario('Bila Form Review Terisi', async ({ I }) => {
  I.amOnPage('/');
  I.wait(10);
  I.seeElement('#mainContent');
  I.seeElement('#data-kuliner');
  I.seeElement('img');
  const firstRestaurant = locate('img').first();
  I.click(firstRestaurant);
  I.wait(10);
  I.seeElement('#review-form');
  I.fillField('#review-name', 'Raden Akbar');
  I.wait(5);
  I.fillField('#review-text', 'Restoran ini Sangat Bagus');
  I.wait(5);
  I.click('#submit-review');
  I.wait(5);
  I.click('.swal-button--confirm');
  I.wait(10);
});
