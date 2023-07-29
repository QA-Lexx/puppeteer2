const puppeteer = require("puppeteer");
const chai = require("chai");
const expect = chai.expect;
const { Given, When, Then, Before, After } = require("cucumber");
const { putText, getText } = require("../../lib/commands.js");

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

Given({timeout: 60 * 1000}, "user is on {string} page", async function (string) {
  return await this.page.goto(`https://netology.ru${string}`, {
    setTimeout: 20000,
  });
});

When({timeout: 60 * 1000}, "user search by {string}", async function (string) {
  return await putText(this.page, "input", string);
});

Then({timeout: 60 * 1000}, "user sees the course suggested {string}", async function (string) {
  const actual = await getText(this.page, "a[data-name]");
  const expected = await string;
  expect(actual).contains(expected);
});
