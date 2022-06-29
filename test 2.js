describe('pcgarage.ro',() => {  

    it('should have the logo on the main page', async () => {
        await browser.url('https://www.pcgarage.ro/');
        const logo = await $('#logo');
        await expect(logo).toExist();
    });

    it('should open pcgarage gaming section', async () => {
        await browser.maximizeWindow();
        const gamingSection = await $('#cat_4');
        await gamingSection.click();
        await browser.pause(1000);
        await expect(browser).toHaveTitle('Gaming - PC Garage');
        await browser.pause(1000);
    }); 

    it('should search for a product', async () => {
    const searchBox = await $('#searchac');
    await searchBox.setValue('Laptop');
    await browser.pause(1000);
    const searchButton = await $('#sf2');
    await searchButton.click();
    await browser.pause(1000);
    await expect(browser).toHaveUrlContaining('/notebook-laptop/');
    await browser.pause(1000);
});

});  
