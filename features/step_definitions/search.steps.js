const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { clickElement, putText, getText } = require("../../lib/commands.js");

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

Given("first user is on {string} page", {timeout: 60 * 1000}, async function (string) {
  await this.page.goto(`http://qamid.tmweb.ru${string}`, {setTimeout: 10000});
});

When("first user search by {string}", {timeout: 60 * 1000}, async function (string) {
  await clickElement(this.page, "body > nav > a:nth-child(3)", string);
  await clickElement(this.page, "body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a", string);
  await this.page.goto(`http://qamid.tmweb.ru/client/hall.php`);
  await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(5)", string);
  await clickElement(this.page, "body > main > section > button", string);
  await this.page.goto(`http://qamid.tmweb.ru/client/payment.php`);
});

Then("first user sees the course suggested {string}", {timeout: 60 * 1000}, async function (string) {
  const actual = await getText(this.page, "body > main > section > div > button");
  const expected = await string;
  expect(actual).contains(expected);
  await clickElement(this.page, "body > main > section > div > button", string);
  await this.page.goto(`http://qamid.tmweb.ru/client/ticket.php`);
});

// The second test two tickets

Given("second user is on {string} page", {timeout: 60 * 1000}, async function (string) {
  await this.page.goto(`http://qamid.tmweb.ru${string}`, {setTimeout: 10000});
});

When("second user search by {string}", {timeout: 60 * 1000}, async function (string) {
  await clickElement(this.page, "body > nav > a:nth-child(3)", string);
  await clickElement(this.page, "body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a", string);
  await this.page.goto(`http://qamid.tmweb.ru/client/hall.php`);
  await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(5)", string);
  await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(6)", string);
  await clickElement(this.page, "body > main > section > button", string);
  await this.page.goto(`http://qamid.tmweb.ru/client/payment.php`);
});

Then("second user sees the course suggested {string}", {timeout: 60 * 1000}, async function (string) {
  const actual = await getText(this.page, "body > main > section > div > button");
  const expected = await string;
  expect(actual).contains(expected);
  await clickElement(this.page, "body > main > section > div > button", string);
  await this.page.goto(`http://qamid.tmweb.ru/client/ticket.php`);
});

// The third test no tickets

Given("third user is on {string} page", {timeout: 60 * 1000}, async function (string) {
  await this.page.goto(`http://qamid.tmweb.ru${string}`, {setTimeout: 10000});
});

When("third user search by {string}", {timeout: 60 * 1000}, async function (string) {
  await clickElement(this.page, "body > nav > a:nth-child(3)", string);
  await clickElement(this.page, "body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a", string);
  await this.page.goto(`http://qamid.tmweb.ru/client/hall.php`);
  await clickElement(this.page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(5)", string);
});

Then("third user sees the course suggested {string}", {timeout: 60 * 1000}, async function (string) {
  const actual = await getText(this.page, "body > main > section > button");
  const expected = await string;
  expect(actual).contains(expected);
});
