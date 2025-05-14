const productPurchaseLocators =  require("./productPurchaseLocators");
class ProductPurchaseActions{
    async clickMenu(){
        await productPurchaseLocators.clickNavigation.click();
    }
    async selectResetApp(){
        await productPurchaseLocators.ClickresetAppState.click();

    }
    async clickCross(){
        await productPurchaseLocators.clickCrossButton.click();
    }
    async clickSort(){
        await productPurchaseLocators.clickSortButton.click();
        await browser.pause(3000);
        const selectBox = await $('//select[@data-test="product-sort-container"]');
        console.log(await selectBox.getText()); 
        await selectBox.selectByVisibleText('Name (Z to A)');
        await browser.pause(3000); 
    }
    async productAdd(){
        await productPurchaseLocators.Addproduct.click();
    }
    async AddProduct1(){
        await productPurchaseLocators.product1.click();
    }
    async AddProduct2(){
        await productPurchaseLocators.product2.click();
    }
    async AddProduct3(){
        await productPurchaseLocators.product3.click();
    }
    async clickCartIcon(){
        await productPurchaseLocators.cartIcon.click();
    }
    async clickCheckOut(){
        await productPurchaseLocators.checkout.click();
    }
    async enterfirstName(FirstName){
        await productPurchaseLocators.firstName.setValue(FirstName);
    }
    async enterlastName(LastName){
        await productPurchaseLocators.lastName.setValue(LastName);
    }
    async enterZip(Zip){
        await productPurchaseLocators.zip.setValue(Zip);
    }
    async clickContinue(){
        await productPurchaseLocators.continue.click();
    }
    async clickFinish(){
        await productPurchaseLocators.finish.click();
    }
    async clickLogOut(){
        await productPurchaseLocators.logout.click();
    }
    
}
module.exports = new ProductPurchaseActions();