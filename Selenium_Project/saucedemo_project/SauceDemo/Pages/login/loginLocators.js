class LoginLocators{
    get userName(){
        return $("//input[@data-test='username']");
    }
    get password(){
        return $("//input[@data-test='password']");
    }
    get loginIcon(){
        return $("//input[@type='submit']");
    }
    get errormessage(){
        return $("//h3[@data-test='error']");
    }
}
module.exports = new LoginLocators();