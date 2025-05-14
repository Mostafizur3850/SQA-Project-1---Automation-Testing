class ProductPurchaseLocators{
    get clickNavigation(){
        return $('//button[@id="react-burger-menu-btn" and text()="Open Menu"]');
    }
    get ClickresetAppState(){
        return $("//a[@id='reset_sidebar_link']");
    }
    get clickCrossButton(){
        return $("//button[@id='react-burger-cross-btn']")
    }
    get clickSortButton(){
        return $('//select[@data-test="product-sort-container"]');
    }
    get Addproduct(){
        return $('//button[@data-test="add-to-cart-test.allthethings()-t-shirt-(red)"]');
    }
    get product1(){
        return $("//button[@data-test='add-to-cart-sauce-labs-backpack']");
    }
    get product1Price(){
        return $("//div[text()='29.99']");
    }
    get product2(){
        return $("//button[@data-test='add-to-cart-sauce-labs-bike-light']");
    }
    get product2Price(){
        return $("//div[text()='9.99']");
    }

    get product3(){
        return $('//button[@data-test="add-to-cart-sauce-labs-bolt-t-shirt"]');
    }
    get product3Price(){
        return $("//div[contains(@class, 'inventory_item_price') and text()='15.99']");
    }
    get getTotalPrice(){
        return $("//div[@data-test='total-label']");
    }
    get cartIcon(){
        return $("//a[@class='shopping_cart_link']");

    }

    get checkout(){
        return $('//button[@data-test="checkout"]');
    }
    get firstName(){
        return $('//input[@data-test="firstName"]');

    }
    get lastName(){
        return $('//input[@data-test="lastName"]');
    }
    get zip(){
        return $('//input[@data-test="postalCode"]');
    }
    get continue(){
        return $('//input[@data-test="continue"]');
    }
    get finish(){
        return $("//button[@id='finish']");
    }
    get logout(){
        return $('//a[@data-test="logout-sidebar-link"]');
    }

}
module.exports = new ProductPurchaseLocators();


