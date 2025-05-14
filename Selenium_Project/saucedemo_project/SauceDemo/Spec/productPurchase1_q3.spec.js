const extra = require("../Extra/extra");
const loginActions = require("../Pages/login/loginActions");
const productPurchaseActions = require("../Pages/productPurchase/productPurchaseActions");
const UserName2 ='performance_glitch_user';
const Password = 'secret_sauce'
describe("SauceDemo site Automation Product Pruchase journey1", () => {
    it(" Successfully  LogIn ", async () => {
        await loginActions.enterUserName(UserName2);
        await loginActions.enterpassword(Password);
        await loginActions.clickLogin();
        await browser.pause(3000);
    });
    it(" Successfully  Reset App State and Sort    ", async () => {
        await productPurchaseActions.clickMenu();
        await productPurchaseActions.selectResetApp();
        await productPurchaseActions.clickCross();
        await browser.pause(3000);
        await productPurchaseActions.clickSort();
        await browser.pause(3000);
    });

    it(" Successfully  Add to Cart Product   ", async () => {
        await productPurchaseActions.productAdd();
        await productPurchaseActions.clickCartIcon();
        await browser.pause(3000);

    });
    it(" Successfully  CheckOut page   ", async () => {
        await productPurchaseActions.clickCheckOut();
        const FirstName = await extra.createRandomString(4);
        const LastName = await extra.createRandomString(4);
        const Zip = await extra.randomNumber(4);
        await productPurchaseActions.enterfirstName(FirstName);
        await productPurchaseActions.enterlastName(LastName);
        await productPurchaseActions.enterZip(Zip);
        await productPurchaseActions.clickContinue();
    });
    it(" Successfully  Verify Product Name and Total price   ", async () => {

        await extra.verifyProductName1();
        await extra.verifyProductPrice1();
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

