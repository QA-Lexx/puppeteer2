const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement, putText, getText } = require("../../lib/commands.js");

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

// Cucumber tests

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

Given("user is on {string} page", {timeout: 60 * 1000}, async function (string) {
  await this.page.goto(`http://qamid.tmweb.ru${string}`, {setTimeout: 10000});
});

When("user search by {string}", {timeout: 60 * 1000}, async function (string) {
  await clickElement(this.page, "body > nav > a:nth-child(3)", string);
  await clickElement(this.page, "body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a", string);
  await this.page.goto(`http://qamid.tmweb.ru/client/hall.php`);
  await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(5)", string);
  await clickElement(this.page, "body > main > section > button", string);
  await this.page.goto(`http://qamid.tmweb.ru/client/payment.php`);
});

Then("user sees the course suggested {string}", {timeout: 60 * 1000}, async function (string) {
  const actual = await getText(this.page, "body > main > section > div > button");
  const expected = await string;
  expect(actual).contains(expected);
  await clickElement(this.page, "body > main > section > div > button", string);
  await this.page.goto(`http://qamid.tmweb.ru/client/ticket.php`);
});

// The second test two tickets

Given("user is on {string} page", {timeout: 60 * 1000}, async function (string) {
  await this.page.goto(`http://qamid.tmweb.ru${string}`, {setTimeout: 10000});
});

When("user search by {string}", {timeout: 60 * 1000}, async function (string) {
  await clickElement(this.page, "body > nav > a:nth-child(3)", string);
  await clickElement(this.page, "body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a", string);
  await this.page.goto(`http://qamid.tmweb.ru/client/hall.php`);
  await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(5)", string);
  await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(6)", string);
  await clickElement(this.page, "body > main > section > button", string);
  await this.page.goto(`http://qamid.tmweb.ru/client/payment.php`);
});

Then("user sees the course suggested {string}", {timeout: 60 * 1000}, async function (string) {
  const actual = await getText(this.page, "body > main > section > div > button");
  const expected = await string;
  expect(actual).contains(expected);
  await clickElement(this.page, "body > main > section > div > button", string);
  await this.page.goto(`http://qamid.tmweb.ru/client/ticket.php`);
});

// The third test no tickets

Given("user is on {string} page", {timeout: 60 * 1000}, async function (string) {
  await this.page.goto(`http://qamid.tmweb.ru${string}`, {setTimeout: 10000});
});

When("user search by {string}", {timeout: 60 * 1000}, async function (string) {
  await clickElement(this.page, "body > nav > a:nth-child(3)", string);
  await clickElement(this.page, "body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a", string);
  await this.page.goto(`http://qamid.tmweb.ru/client/hall.php`);
  await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(5)", string);
});

Then("user sees the course suggested {string}", {timeout: 60 * 1000}, async function (string) {
  const actual = await getText(this.page, "body > main > section > button");
  const expected = await string;
  expect(actual).contains(expected);
});
