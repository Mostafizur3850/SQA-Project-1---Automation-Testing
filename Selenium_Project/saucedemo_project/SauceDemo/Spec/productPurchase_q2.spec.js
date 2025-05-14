const loginActions = require("../Pages/login/loginActions");
const productPurchaseActions = require("../Pages/productPurchase/productPurchaseActions");
const extra = require ("../Extra/extra");
const UserName1 ='standard_user';
const Password ='secret_sauce';

describe("SauceDemo site Automation Product Pruchase journey", () => {
    it(" Successfully  LogIn   ", async () => {
        await loginActions.enterUserName(UserName1);
        await loginActions.enterpassword(Password);
        await loginActions.clickLogin();
        await browser.pause(3000);
    });
    it(" Successfully  Reset App State   ", async () => {

        await productPurchaseActions.clickMenu();
        await productPurchaseActions.selectResetApp();
        await productPurchaseActions.clickCross();
    });
    it(" Successfully  Add to Cart Product   ", async () => {
        await productPurchaseActions.AddProduct1();
        await productPurchaseActions.AddProduct2();
        await productPurchaseActions.AddProduct3();
        await productPurchaseActions.clickCartIcon();
        await browser.pause(3000);
    });
    it(" Successfully  CheckOut page   ", async () => {
        await productPurchaseActions.clickCheckOut();
        const FirstName = await extra.createRandomString(4);
        const LastName = await extra.createRandomString(4)
        const Zip = await extra.randomNumber(4);
        await productPurchaseActions.enterfirstName(FirstName);
        await productPurchaseActions.enterlastName(LastName);
        await productPurchaseActions.enterZip(Zip);
        await productPurchaseActions.clickContinue();
        await browser.pause(3000);

    });
    it(" Successfully  Verify Product Name and Total price   ", async () => {
        await extra.verifyProductName();     
        await extra.verifyProductPrice();
        await browser.pause(3000);
        await productPurchaseActions.clickFinish();
    });

    it(" Successfully  Order and Logout   ", async () => {
        await extra.verifyMessage1();
        await browser.pause(3000);
        await productPurchaseActions.clickMenu();
        await productPurchaseActions.selectResetApp();
        await productPurchaseActions.clickLogOut();
    });
});
