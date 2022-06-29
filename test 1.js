describe('evomag.ro',() => {  

    it('should have the correct page title', async () => {
        await browser.url('https://www.evomag.ro/');
        await browser.maximizeWindow();
        await browser.pause(1000);
        await expect(browser).toHaveTitle('evoMAG.ro - Electronice si electrocasnice la un pret bun');
        await browser.pause(1000);

    });
        
    it('should contain a cart button', async () => {
        const cartButton = await $('.cart_header');
        await expect(cartButton).toBeDisplayed();
        await browser.pause(1000);

    });

    it ('Should open EvoMag Noutati page', async () => {
        const noutatiButton = await $('.p_noutati');
        await noutatiButton.click(); 
        await browser.pause(1000);
        await expect(browser).toHaveTitle('Noutati - evoMAG.ro');
        await browser.pause(1000);

    }); 

    it ('should have a working search', async () => {
        const searchBox = await $('//*[@id="searchString"]');
        await searchBox.setValue('Casti');
        await browser.pause(1000);
        const searchButton = await $('.button_search');
        await searchButton.click();
        await browser.pause(1000);
        const castiResults = await $('h1');
        await expect(castiResults).toHaveTitle('Rezultate cautare pentru "Casti"');
        await browser.pause(1000);
    });
});
