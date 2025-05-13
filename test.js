import {By, Builder, Browser} from "selenium-webdriver";

async function testRun() {

    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    try {
        await driver.get("https://www.saucedemo.com/");
        await driver.manage().window().maximize();
        await driver.sleep(5000);

        let element = await driver.findElement(By.css("h1"));
        let text = await element.getText();
        console.log("Text of the element is: " + text);

    } catch (error) {
        console.error("An error occurred: ", error);
    } finally {
        await driver.quit();
    }
}

testRun();
