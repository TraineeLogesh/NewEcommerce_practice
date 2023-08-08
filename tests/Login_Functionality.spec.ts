import { test, expect } from '@playwright/test';

test('To verify user is able to login with valid credentials', async ({ page }) => {
  // STEP 1 - Launch the url (https://ecommerce-playground.lambdatest.io/) in a browser
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');

  // Expect a title "Your Store"
  await expect(page).toHaveTitle('Your Store');
  // STEP 2 - Click on "My account" button
  await page.click("//div[@data-id='217834']//span[contains(text(),'My account')]");

  // Expect a title "Account Login"
  await expect(page).toHaveTitle('Account Login');
  // STEP 3 - Enter valid email id in email address textbox (eg.abc@gmail.com)
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('logesh1234@gmail.com');
  // STEP 4 - Enter valid password in password textbox
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('logesh1234');
  // STEP 5 - Click on "Login" button
  await page.click("//input[@value='Login']");

  // Expect a title "My Account"
  await expect(page).toHaveTitle('My Account');
  console.log("It is verified the user is able to login to given url with valid credentials");
});



test('To verify proper error message is displayed when user is login with invalid credentials', async ({ page }) => {
  // STEP 1 - Launch the url (https://ecommerce-playground.lambdatest.io/) in a browser
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');

  // Expect a title "Your Store"
  await expect(page).toHaveTitle('Your Store');
  // STEP 2 - Click on "My account" button
  await page.click("//div[@data-id='217834']//span[contains(text(),'My account')]");

  // Expect a title "Account Login"
  await expect(page).toHaveTitle('Account Login');
  // STEP 3 - Enter invalid email id in email address textbox (eg.abc@gmail.com)
  await page.getByPlaceholder('E-Mail Address').click();
  await page.getByPlaceholder('E-Mail Address').fill('logesh9ghty@gmail.com');
  // STEP 4 - Enter valid password in password textbox
  await page.getByPlaceholder('Password').click();
  await page.getByPlaceholder('Password').fill('logesh1234');
  // STEP 5 - Click on "Login" button
  await page.click("//input[@value='Login']");

  // Expect a warning message " Warning: No match for E-Mail Address and/or Password."
  await expect(page.locator("//div[@id='account-login']//div/i")).toBeVisible();
  //await expect("//div[contains(text(),' Warning: No match for E-Mail Address and/or Password.')]").toC;
  console.log("It is verified that Proper error message is displayed when user is login with invalid credentials");

});



test('To verify selected item was added to cart', async ({ page }) => {
  // STEP 1 - Launch the url (https://ecommerce-playground.lambdatest.io/) in a browser
  await page.goto('https://ecommerce-playground.lambdatest.io/index.php?route=common/home');

  // Expect a title "Your Store"
  await expect(page).toHaveTitle('Your Store');
  // STEP 2 - Hover to "Mega Menu" option
  await page.hover("//div[@id='widget-navbar-217834']//span[contains(text(),' Mega Menu')]");

  // STEP 3 - Select "Nokia" text under mobiles section
  await page.click("//a[contains(text(),'Nokia')]");
  // STEP 4 - Hover on the product 
  await page.hover("//a[@id='mz-product-grid-image-51-212439']");

  // STEP 5 - Click on "Add to cart" button
  await page.click("//a[@id='mz-product-grid-image-51-212439']/../..//div[@class='product-action']//button[@title='Add to Cart']");
  
  // STEP 6 - click on "Add to cart" button in popup
  await page.click("//div[@data-id='212958']//select[@name='option[235]']");
  await page.selectOption("//select[@name='option[235]']","Medium(+$12.00)");
  await page.click("//div[@data-id='212964']//button");

  await expect(page.locator("//a[contains(text(),'View Cart ')]")).toBeVisible();
  console.log("It is verified selected item was added to cart");
});





