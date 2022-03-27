const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.arthosuchak.com/archives/category/latest-news/',{
      waitUntil: 'load',
  });
  await page.pdf({ path: 'news.pdf',format: 'legal' });

  await browser.close();
})();