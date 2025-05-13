describe('Q1: Locked Out User Login', () => {
    it('should show error for locked out user', async () => {
        await browser.url('/');
        await $('#user-name').setValue('locked_out_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        const errorMsg = await $('.error-message-container').getText();
        expect(errorMsg).toContain('Sorry, this user has been locked out.');
    });
});
