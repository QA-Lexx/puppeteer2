const { expect } = require("chai");
const { clickElement, putText, getText } = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");
const {Given, When, Then, Before, After} = require('cucumber');
const puppeteer = require('puppeteer');
const expect = require('chai');
var {Before, After, Given, When, Then} = require('@cucumber/cucumber');

let page;

beforeEach.skip(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach.skip(() => {
  page.close();
});

describe.skip("qamid.tmweb.ru tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  test.skip("The first test one ticket'", async () => {
    await clickElement(page, "body > nav > a:nth-child(3)");
    await clickElement(page, "body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/hall.php");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(5)");
    await clickElement(page, "body > main > section > button");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/payment.php");
    const actual = await getText(page, "body > main > section > div > button");
    await expect(actual).contain("Получить код бронирования");
    await clickElement(page, "body > main > section > div > button");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/ticket.php");
  }, 60000);

  test.skip("The second test two tickets'", async () => {
    await clickElement(page, "body > nav > a:nth-child(3)");
    await clickElement(page, "body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/hall.php");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(5)");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(6)");
    await clickElement(page, "body > main > section > button");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/payment.php");
    const actual = await getText(page, "body > main > section > div > button");
    await expect(actual).contain("Получить код бронирования");
    await clickElement(page, "body > main > section > div > button");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/ticket.php");
  }, 60000);

  test.skip("The third test no tickets'", async () => {
    await clickElement(page, "body > nav > a:nth-child(3)");
    await clickElement(page, "body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/hall.php");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span.buying-scheme__chair.buying-scheme__chair_standart.buying-scheme__chair_taken");
    const actual = await getText(page, "body > main > section > button");
    await expect(actual).contain("Забронировать");
  }, 60000);

})

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

Feature: "qamid.tmweb.ru tests"

  Scenario: "The first test one ticket'"

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

  Scenario: "The second test two tickets'"

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

  Scenario: "The first test one ticket'"

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
