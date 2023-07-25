const { expect } = require("chai");
const { clickElement, putText, getText } = require("./lib/commands.js");
const { generateName } = require("./lib/util.js");

let page;

beforeEach(async () => {
  page = await browser.newPage();
  await page.setDefaultNavigationTimeout(0);
});

afterEach(() => {
  page.close();
});

describe("qamid.tmweb.ru tests", () => {
  beforeEach(async () => {
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/index.php");
  });

  test("The first test one ticket'", async () => {
    await clickElement(page, "body > nav > a:nth-child(3)");
    await clickElement(page, "body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/hall.php");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(5)");
    await clickElement(page, "body > main > section > button");
    const actual = await getText(page, "body > main > section > button");
    await expect(actual).toContain("Забронировать");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/payment.php");
    const titleBook = await getText(page, "body > main > section > header > h2");
    expect(titleBook).toEqual("Вы выбрали билеты:");
  }, 60000);

  test("The second test two tickets'", async () => {
    await clickElement(page, "body > nav > a:nth-child(3)");
    await clickElement(page, "body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/hall.php");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(5)");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(6)");
    await clickElement(page, "body > main > section > button");
    const actual = await getText(page, "body > main > section > button");
    await expect(actual).toContain("Забронировать");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/payment.php");
    const titleBook = await getText(page, "body > main > section > header > h2");
    expect(titleBook).toEqual("Вы выбрали билеты:");
  }, 60000);

  test("The third test no tickets'", async () => {
    await clickElement(page, "body > nav > a:nth-child(3)");
    await clickElement(page, "body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/hall.php");
    await clickElement(page, "body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(5)");
    await clickElement(page, "body > main > section > button");
    const actual = await getText(page, "body > main > section > button");
    await expect(actual).toContain('disabled="true"');
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/payment.php");
    const titleBook = await getText(page, "body > main > section > header > h2");
    expect(titleBook).toEqual("Данное место занято");
  }, 60000);

})
