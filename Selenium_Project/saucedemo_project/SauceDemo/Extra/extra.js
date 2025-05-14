const Taxrate = 0.0801;
class Extra {
    async convertTextToNumber(text) {
    const value = parseFloat(text.replace(/[^\d.]/g, ""));
    return value;
    }
    async verifyErrorMessage(){
        const message = await $("//h3[@data-test='error']");
        await browser.pause(3000);
        const text = await message.getText();
        expect(text).toEqual('Epic sadface: Sorry, this user has been locked out.');
        
    }
    async verifyMessage1(){
        const message = await $("//h2[@data-test='complete-header']");
        const message1 = await $("//div[@data-test='complete-text']");
        const text = await message.getText();
        const text1 = await message1.getText();
        await browser.pause(3000);
        expect(text).toEqual('Thank you for your order!');
        expect(text1).toEqual('Your order has been dispatched, and will arrive just as fast as the pony can get there!');
        await browser.pause(3000);
    }
    
    async verifyProductName(){
        const xpaths =[ "//div[text()='Sauce Labs Backpack']","//div[text()='Sauce Labs Bike Light']" ,"//div[text()='Sauce Labs Bolt T-Shirt']" ];
        await browser.pause(3000);
        const productTexts = await Promise.all(
            xpaths.map(async(xpath)=>{ const element = await $(xpath);
            return await element.getText();
        }));
        console.log(productTexts);
        await browser.pause(3000);
        const productElements = await $$('//div[@data-test="inventory-item-name"]');
        for (let i= 0; i<productElements.length;i++){
            const productName = await productElements[i].getText();
            expect(productName).toEqual(productTexts[i]);
        }
        await browser.pause(3000);

    }
    async verifyProductName1(){
        const productElements1= await $('//div[@class="inventory_item_name" and text()="Test.allTheThings() T-Shirt (Red)"]');
        const productName1 = await productElements1.getText();
        const productElements2 = await $('//div[@class="inventory_item_name"]');
        const productName2 = await productElements2.getText();
        expect(productName2).toEqual(productName1);   
    }
    async verifyProductPrice(){
        const productPrice1 = await $("//div[contains(@class, 'inventory_item_price') and text()='29.99']");
        const getsingleProductPrice1 = await productPrice1.getText();
        const SinglePrice1 = await this.convertTextToNumber(getsingleProductPrice1);

        const product2Price = await $("//div[contains(@class, 'inventory_item_price') and text()='9.99']");
        const getsingleProductPrice2 = await product2Price.getText();
        const SinglePrice2 = await this.convertTextToNumber(getsingleProductPrice2);

        const product3Price = await $("//div[contains(@class, 'inventory_item_price') and text()='15.99']");
        const getsingleProductPrice3 = await product3Price.getText();
        const SinglePrice3 = await this.convertTextToNumber(getsingleProductPrice3);

        const SubTotalPrice = SinglePrice1 + SinglePrice2 + SinglePrice3 ;
        const Tax = SubTotalPrice *  Taxrate ;
        const TotalPrice = SubTotalPrice + Tax;
        const expectedTotalPrice = parseFloat(TotalPrice.toFixed(2));
        const PriceValue = await $("//div[@data-test='total-label']");
        const TotalPriceAmount= await PriceValue.getText();
        const actualTotalPrice = await this.convertTextToNumber(TotalPriceAmount);
        expect(expectedTotalPrice).toEqual(actualTotalPrice);
    }
    async verifyProductPrice1(){
        const productPrice = await $("//div[contains(@class, 'inventory_item_price') and text()='15.99']");
        const getproductPrice = await productPrice.getText();
        const ItemPrice = await this.convertTextToNumber(getproductPrice);
        const tax = ItemPrice * Taxrate;
        const  Price = ItemPrice + tax ;
        const expectedPrice = parseFloat(Price.toFixed(2));
        const price = await $("//div[@data-test='total-label']");
        const getPrice = await price.getText();
        const ActualPrice = await this.convertTextToNumber(getPrice);
        expect(expectedPrice).toEqual(ActualPrice);

    }

    async randomNumber(lenght){
        const number = "0123456789";
        let result1 = "";
        for (let i=0;i <lenght;i++){
            result1 += number.charAt (Math.floor(Math.random() * number.length ));
        }
        return result1;
    }

    async createRandomString(length) {
        const chars = "abcdefghijklmnopqrstuvwxyz";
        let result = "";
        for (let i = 0; i < length; i++) {
          result += chars.charAt(Math.floor(Math.random() * chars.length));
        }
        return result;
      }
    
    
    }
    module.exports = new Extra();
