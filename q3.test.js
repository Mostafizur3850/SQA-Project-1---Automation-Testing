describe('Q3: Glitch User with Z-A Filter and Purchase', () => {
    it('should complete purchase using Z-A filter and reset app state', async () => {
        await browser.url('/');
        await $('#user-name').setValue('performance_glitch_user');
        await $('#password').setValue('secret_sauce');
        await $('#login-button').click();

        // Reset state
        await $('.bm-burger-button').click();
        await $('#reset_sidebar_link').click();
        await $('#react-burger-cross-btn').click();

        // Filter Z-A
        await $('.product_sort_container').selectByVisibleText('Name (Z to A)');

        // Add first filtered product
        const firstProduct = await $$('button.btn_inventory')[0];
        await firstProduct.click();

        await $('.shopping_cart_link').click();
        await $('#checkout').click();
        await $('#first-name').setValue('Glitch');
        await $('#last-name').setValue('User');
        await $('#postal-code').setValue('4321');
        await $('#continue').click();

        const items = await $$('.inventory_item_name');
        expect(items.length).toBe(1);

        const total = await $('.summary_total_label').getText();
        expect(total).toContain('Total');

        await $('#finish').click();
        const completeMsg = await $('.complete-header').getText();
        expect(completeMsg).toContain('Thank you for your order');

        // Reset and logout
        await $('.bm-burger-button').click();
        await $('#reset_sidebar_link').click();
        await $('#logout_sidebar_link').click();
    });
});
