const loginLocators = require("./loginLocators");

class LoginActions{
    async enterUserName(UserName){
        await loginLocators.userName.setValue(UserName);
    }
    async enterpassword(Password){
        await loginLocators.password.setValue(Password);
    }
    async clickLogin(){
        await loginLocators.loginIcon.click();
    }

}
module.exports = new LoginActions();