const loginActions = require("../Pages/login/loginActions");
const UserName = 'locked_out_user';
const Password = 'secret_sauce';
const extra = require("../Extra/extra");



describe("SauceDemo site Automation journey", () => {
    it("Try LogIn and verify the message ", async () => {
        await loginActions.enterUserName(UserName);
        await loginActions.enterpassword(Password);
        await loginActions.clickLogin();
        await extra.verifyErrorMessage();
    });
});