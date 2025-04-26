import {expect, test} from '@playwright/test';

test("Verfiy user can login to the site with valid credentials",async({page})=>{

  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await page.locator('[id="btn-make-appointment"]').click();
  await page.locator('[id="txt-username"]').fill('John Doe');
  await page.locator('(//input[@placeholder="Password"])[2]').fill('ThisIsNotAPassword');
  await page.locator('[id="btn-login"]').click();
 
 await expect(page).toHaveURL('https://katalon-demo-cura.herokuapp.com/#appointment');
  await expect(page.locator('//h2')).toHaveText('Make Appointment');


})

test.only("Verify user cannot login to the site with invalid credentials",async({page})=>{
  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await page.locator('[id="btn-make-appointment"]').click();

  await page.locator('[id="txt-username"]').fill('John');
  await page.locator('(//input[@placeholder="Password"])[2]').fill('ThisIsNotAPassword');
  await page.locator('[id="btn-login"]').click();



  await expect(page.locator('(//section[@id="login"])/div/div/div/p[2]')).toHaveText('Login failed! Please ensure the username and password are valid.');
  

})

test("Verify user can book an appointment for Tokyo CURA Healthcare Center succesfully",async({page})=>{

  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await page.locator('[id="btn-make-appointment"]').click();
  await page.locator('[id="txt-username"]').fill('John Doe');
  await page.locator('(//input[@placeholder="Password"])[2]').fill('ThisIsNotAPassword');
  await page.locator('[id="btn-login"]').click();
  await page.locator('[id="combo_facility"]').selectOption('Tokyo CURA Healthcare Center');
  await page.locator('[id="btn-book-appointment"]').click();
  await page.locator('(//table[@class="table-condensed"])[1]/tbody/tr[4]/td[1]').click();
  await page.locator('//textarea[@name="comment"]').fill('Appointment booking for this time');
  await page.locator('[id="btn-book-appointment"]').click();

})


test("Verify user can book an appointment for  Hongkong CURA Healthcare Center'successfully",async({page})=>{

  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await page.locator('[id="btn-make-appointment"]').click();
  await page.locator('[id="txt-username"]').fill('John Doe');
  await page.locator('(//input[@placeholder="Password"])[2]').fill('ThisIsNotAPassword');
  await page.locator('[id="btn-login"]').click();
  await page.locator('[id="combo_facility"]').selectOption('Hongkong CURA Healthcare Center');
  await page.locator('[id="btn-book-appointment"]').click();
  await page.locator('(//table[@class="table-condensed"])[1]/tbody/tr[4]/td[1]').click();
  await page.locator('//textarea[@name="comment"]').fill('Appointment booking for this time');
  await page.locator('[id="btn-book-appointment"]').click();



})

test("Verify user can book an appointment for Seoul CURA Healthcare Center succesfully",async({page})=>{

  await page.goto('https://katalon-demo-cura.herokuapp.com/');
  await page.locator('[id="btn-make-appointment"]').click();
  await page.locator('[id="txt-username"]').fill('John Doe');
  await page.locator('(//input[@placeholder="Password"])[2]').fill('ThisIsNotAPassword');
  await page.locator('[id="btn-login"]').click();
  await page.locator('[id="combo_facility"]').selectOption('Seoul CURA Healthcare Center');
  await page.locator('[id="btn-book-appointment"]').click();
  await page.locator('(//table[@class="table-condensed"])[1]/tbody/tr[4]/td[1]').click();
  await page.locator('//textarea[@name="comment"]').fill('Appointment booking for this time');
  await page.locator('[id="btn-book-appointment"]').click();


})


