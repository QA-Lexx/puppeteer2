const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { putText, getText } = require("../../lib/commands.js");

// Before({timeout: 60 * 1000}, async function () {
//   const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
//   const page = await browser.newPage();
//   this.browser = browser;
//   this.page = page;
// });

// After({timeout: 60 * 1000}, async function () {
//   if (this.browser) {
//     await this.browser.close();
//   }
// });

// Given({timeout: 60 * 1000}, "user is on {string} page", async function (string) {
//   return await this.page.goto(`https://netology.ru${string}`, {
//     setTimeout: 20000,
//   });
// });

// When({timeout: 60 * 1000}, "user search by {string}", async function (string) {
//   return await putText(this.page, "input", string);
// });

// Then({timeout: 60 * 1000}, "user sees the course suggested {string}", async function (string) {
//   const actual = await getText(this.page, "a[data-name]");
//   const expected = await string;
//   expect(actual).contains(expected);
// });

Before({timeout: 60 * 1000}, async function () {
  const browser = await puppeteer.launch({ headless: false, slowMo: 50 });
  const page = await browser.newPage();
  this.browser = browser;
  this.page = page;
});

After({timeout: 60 * 1000}, async function () {
  if (this.browser) {
    await this.browser.close();
  }
});

// The first test one ticket

Given({timeout: 60 * 1000}, "user is on {string} page", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php${string}`, {setTimeout: 10000});
});

When({timeout: 60 * 1000}, "user search by {string}", async function (string) {
  return await clickElement(this.page, "body > nav > a:nth-child(3)", string);
  return await clickElement(this.page, "body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a", string);
  this.page = await browser.newPage();
  return await this.page.goto(`http://qamid.tmweb.ru/client/hall.php${string}`);
  return await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(5)", string);
  return await clickElement(this.page, "body > main > section > button", string);
  this.page = await browser.newPage();
  return await this.page.goto(`http://qamid.tmweb.ru/client/payment.php${string}`);
});

Then({timeout: 60 * 1000}, "user sees the course suggested {string}", async function (string) {
  const actual = await getText(this.page, "body > main > section > div > button");
  const expected = string.contain("Получить код бронирования");
  expect(actual).contain(expected);
  return await clickElement(this.page, "body > main > section > div > button", string);
  this.page = await browser.newPage();
  return await this.page.goto(`http://qamid.tmweb.ru/client/ticket.php${string}`);
});

// The second test two tickets

Given({timeout: 60 * 1000}, "user is on {string} page", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php${string}`, {setTimeout: 10000});
});

When({timeout: 60 * 1000}, "user search by {string}", async function (string) {
  return await clickElement(this.page, "body > nav > a:nth-child(3)", string);
  return await clickElement(this.page, "body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a", string);
  this.page = await browser.newPage();
  return await this.page.goto(`http://qamid.tmweb.ru/client/hall.php${string}`);
  return await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(5)", string);
  return await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(6)", string);
  return await clickElement(this.page, "body > main > section > button", string);
  this.page = await browser.newPage();
  return await this.page.goto(`http://qamid.tmweb.ru/client/payment.php${string}`);
});

Then({timeout: 60 * 1000}, "user sees the course suggested {string}", async function (string) {
  const actual = await getText(this.page, "body > main > section > div > button");
  const expected = string.contain("Получить код бронирования");
  expect(actual).contain(expected);
  return await clickElement(this.page, "body > main > section > div > button", string);
  this.page = await browser.newPage();
  return await this.page.goto(`http://qamid.tmweb.ru/client/ticket.php${string}`);
});

// The third test no tickets

Given({timeout: 60 * 1000}, "user is on {string} page", async function (string) {
  return await this.page.goto(`http://qamid.tmweb.ru/client/index.php${string}`, {setTimeout: 10000});
});

When({timeout: 60 * 1000}, "user search by {string}", async function (string) {
  return await clickElement(this.page, "body > nav > a:nth-child(3)", string);
  return await clickElement(this.page, "body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a", string);
  this.page = await browser.newPage();
  return await this.page.goto(`http://qamid.tmweb.ru/client/hall.php${string}`);
  return await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(5)", string);
});

Then({timeout: 60 * 1000}, "user sees the course suggested {string}", async function (string) {
  const actual = await getText(this.page, "body > main > section > button");
  const expected = string.contain("Забронировать");
  expect(actual).contain(expected);
});
