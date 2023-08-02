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
