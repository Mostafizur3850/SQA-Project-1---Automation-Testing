describe('Q2: Standard User Full Purchase Flow', () => {
    it('should complete purchase and reset app state', async () => {
        await browser.url('/');
        await $('#user-name').setValue('standard_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        // Reset app state
        await $('.bm-burger-button').click();
        await $('#reset_sidebar_link').click();
        await $('#react-burger-cross-btn').click();

        // Add 3 products
        const addBtns = await $$('button.btn_inventory');
        await addBtns[0].click();
        await addBtns[1].click();
        await addBtns[2].click();

        await $('.shopping_cart_link').click();
        await $('#checkout').click();
        await $('#first-name').setValue('Test');
        await $('#last-name').setValue('User');
        await $('#postal-code').setValue('1234');
        await $('#continue').click();

        // Verify products and total
        const items = await $$('.inventory_item_name');
        expect(items.length).toBe(3);

        const total = await $('.summary_total_label').getText();
        expect(total).toContain('Total');

        await $('#finish').click();

        const completeMsg = await $('.complete-header').getText();
        expect(completeMsg).toContain('Thank you for your order');

        // Reset again and logout
        await $('.bm-burger-button').click();
        await $('#reset_sidebar_link').click();
        await $('#logout_sidebar_link').click();
    });
});
