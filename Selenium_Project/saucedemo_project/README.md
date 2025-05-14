# SauceDemo E-commerce site Automation Journey

## LogIn and Product Purchase journey

Automated test suite for the SauceDemo e-commerce website. 
## Table of Contents
**Features**

**Tech Stack**

**Getting Started**

**Test Scenarios**

**Contributing**

**Contact**

## Features
1. Automated login, add-to-cart, checkout, and logout flows (valid/invalid users)-

2. UI validation and functional test coverage

3. Verify Some messages , Product Name on the cart, Pruchase product total price.

4. Screenshots on test failure

5. Test reports 

## Tech Stack

**Language:** JavaScript 

**Framework:** WebDriverIO 

**Assertion:**  Mocha 

**Reporting:** Allure

## Getting Started

**Prerequisites**
1. WebdriverIO installed
2. Git installed
3. Allure Report installed

**Installation**

*WDIo*

```
   npm init -y
```
```

   npm i --save-dev @wdio/cli
```
```

   npm init wdio@latest .
```
*Allure*

```
     npm install @wdio/allure-reporter --save-dev
```


```
       npm i allure-commandline
```



*configaration*

```
    (export const config = {
    reporters: [['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
      }]],
    })
```





**Run**

*WDIo*

``` 
     npx wdio run ./wdio.conf.js
```


*Report*

```
     allure generate  allure-results --clean && allure open allure-report
```




## Test Scenarios

1. Login with locked_out_user and verify the error message.
2. Log in with standard_user. Add any three items to the cart and verify the product name and total price.
3. Login with performance_glitch_user. Then filter by name (Z to A) and select the first product.Verify the product name and total price.

## Contributing
Want to improve or add more test cases?
1. Fork the repo

2. Create a new branch: git checkout -b feature/test-enhancement

3. Make your changes and commit

4. Open a Pull Request


## Contact
Developed and maintained by @Mithun301.











