import {expect, test} from "playwright/test";
test (`Lunch the saleforce application `,async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main");
    await page.locator("#username").fill("democsr");
    await page.locator("#password").fill("crmsfa");
    await page.locator("//input[@class='decorativeSubmit']").click();
    await page.locator("//a[contains(text(),'CRM')]").click();
    await page.locator("//a[contains(text(),'Leads')]").click();
    await page.locator("//a[contains(text(),'Create Lead')]").click();
    await page.locator("#createLeadForm_importantNote").fill("Indumathi");
    await page.locator("#createLeadForm_firstName").fill("Palanisamy");
    await page.locator("#createLeadForm_lastName").fill("Manickam");
    await page.locator("#createLeadForm_personalTitle").fill("Mrs");
    await page.locator("#createLeadForm_generalProfTitle").fill("Testing");
    await page.locator("#createLeadForm_primaryPhoneNumber").fill('99994324327');
    await page.locator("#createLeadForm_departmentName").fill("Tsesting");
    await page.locator("//input[@class='smallSubmit']").click();
    await page.waitForTimeout(3000);
  await expect(page.locator("#createLeadForm_importantNote")).toHaveText("Icdndumathi");
  //  await page.locator("//a[contains(text(),'Edit')]").click();



} )

