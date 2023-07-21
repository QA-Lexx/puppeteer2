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
    const linkNavigation = await pageNavigation.$("body > nav > a.page-nav__day.page-nav__day_weekend.page-nav__day_chosen");
    await linkNavigation.click();
    await page.waitForSelector("a");
    const linkMovie = await pageMovie.$("body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a");
    await linkMovie.click();
    await page.waitForSelector("a");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/hall.php");
    const linkChair = await linkChair.$("body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(5)");
    await linkChair.click();
    await page.waitForSelector("span");
    const linkBook = await linkBook.$("body > main > section > button");
    await linkBook.click();
    await page.waitForSelector("button");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/payment.php");
    const titleBook = await page.title();
    expect(titleBook).toEqual("Вы выбрали билеты:");
  });

  test("The second test two tickets'", async () => {
    const linkNavigation = await pageNavigation.$("body > nav > a.page-nav__day.page-nav__day_weekend.page-nav__day_chosen");
    await linkNavigation.click();
    await page.waitForSelector("a");
    const linkMovie = await pageMovie.$("body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a");
    await linkMovie.click();
    await page.waitForSelector("a");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/hall.php");
    const linkChairOne = await linkChairOne.$("body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(5)");
    await linkChairOne.click();
    await page.waitForSelector("span");
    const linkChairTwo = await linkChairTwo.$("body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(6)");
    await linkChairTwo.click();
    await page.waitForSelector("span");
    const linkBook = await linkBook.$("body > main > section > button");
    await linkBook.click();
    await page.waitForSelector("button");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/payment.php");
    const titleBook = await page.title();
    expect(titleBook).toEqual("Вы выбрали билеты:");
  });

  test("The third test no tickets'", async () => {
    const linkNavigation = await pageNavigation.$("body > nav > a.page-nav__day.page-nav__day_weekend.page-nav__day_chosen");
    await linkNavigation.click();
    await page.waitForSelector("a");
    const linkMovie = await pageMovie.$("body > main > section:nth-child(3) > div:nth-child(2) > ul > li > a");
    await linkMovie.click();
    await page.waitForSelector("a");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/hall.php");
    const linkChair = await linkChair.$("body > main > section > div.buying-scheme > div.buying-scheme__wrapper > div:nth-child(10) > span:nth-child(5)");
    await linkChair.click();
    await page.waitForSelector("span");
    const linkBook = await linkBook.$("body > main > section > button");
    await linkBook.click();
    await page.waitForSelector("button");
    page = await browser.newPage();
    await page.goto("http://qamid.tmweb.ru/client/payment.php");
    const titleBook = await page.title();
    expect(titleBook).toEqual("Данное место занято");
  });

})
