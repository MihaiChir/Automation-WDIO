describe('libris.ro',() => {  

    it('should have a login menu open ', async () => {
        await browser.url('https://www.libris.ro/');
        await browser.maximizeWindow();
        const menuButton = await $('.header-nav-user-item');
        await menuButton.click();
        await browser.pause(1000);
        await expect(browser).toHaveUrl('https://www.libris.ro/auth/login.jsp');
        await browser.pause(1000); 

    });

    it('should login on libris.ro', async () => {
        const userBox = await $('#date-inregistrare-user');
        await userBox.setValue('adrian1220');
        await browser.pause(1000);
        const userPassword = await $('#parola');
        await userPassword.setValue('mirla1219');
        await browser.pause(1000);
        const loginButton = await $('.log-in-cont-inregistrare-btn-ct');
        await loginButton.click();
        await browser.pause(1000);
        const menu = $('.header-nav-user-item');
        await menu.moveTo('Comenzile mele');
        const buttonComenzileMele = $('/html/body/header/div[3]/div/div[3]/ul/li[1]/div/div/ul/li[2]/a');
        await expect(buttonComenzileMele).toExist();
        await browser.pause(1000);
        const homePage = $('.img-lib-logo');
        await homePage.click();
        await browser.pause(1000);
    });    

    it ('should log out on libris.ro', async () => {
        const loginMenuButton = await $('.header-nav-user-item');
        loginMenuButton.click();
        await browser.pause(1000);
        const logOut = await $('.border-none');
        await logOut.click();
        await browser.pause(1000);
        const menu = $('.header-nav-user-item');
        await menu.moveTo('Log In');
        await browser.pause(1000);
        const logIn =$('/html/body/header/div[3]/div/div[3]/ul/li[1]/div/div/ul/li[1]/a');
        await expect(logIn).toExist();
        await browser.pause(1000);

    }); 

    it ('should login on libris.ro with wrong username', async ()=> {
        const loginMenuButton = await $('.header-nav-user-item');
        loginMenuButton.click();
        await browser.pause(1000);
        const userBox = await $('#date-inregistrare-user');
        await userBox.setValue('adrian1221');
        await browser.pause(1000);
        const userPassword = await $('#parola');
        await userPassword.setValue('mirla1219');
        await browser.pause(1000);
        const loginButton = await $('.log-in-cont-inregistrare-btn-ct');
        await loginButton.click();
        await browser.pause(1000);
        await expect(browser).toHaveUrlContaining('error=Utilizator+sau+parola+incorecte!');
        await browser.pause(1000);
    });

    it ('should login on libris.ro with wrong password', async () => {
        const userBox = await $('#date-inregistrare-user');
        await userBox.setValue('adrian1220');
        await browser.pause(1000);
        const userPassword = await $('#parola');
        await userPassword.setValue('mirla1218');
        await browser.pause(1000);
        const loginButton = await $('.log-in-cont-inregistrare-btn-ct');
        await loginButton.click();
        await browser.pause(1000);
        await expect(browser).toHaveUrlContaining('Utilizator+sau+parola+incorecte!');
        await browser.pause(1000);

    });

    it('should login again on libris.ro', async () => {
        const userBox = await $('#date-inregistrare-user');
        await userBox.setValue('adrian1220');
        await browser.pause(1000);
        const userPassword = await $('#parola');
        await userPassword.setValue('mirla1219');
        await browser.pause(1000);
        const loginButton = await $('.log-in-cont-inregistrare-btn-ct');
        await loginButton.click();
        await browser.pause(1000);
        const menu = $('.header-nav-user-item');
        const buttonPuncteDeFidelitate = $('/html/body/header/div[3]/div/div[3]/ul/li[1]/div/div/ul/li[6]/a');
        await menu.moveTo('Puncte de fidelitate');
        await expect(buttonPuncteDeFidelitate).toExist();
        await browser.pause(1000);
        const homePage = $('.img-lib-logo');
        await homePage.click();
        await browser.pause(1000);
    });

    it ('should find a product with searchbox', async() => {
        const searchBox = $('#autoComplete');
        await searchBox.setValue('Harap Alb');
        await browser.pause(1000);
        const searchButton = $('#autoCompleteButton');
        await searchButton.click();
        await browser.pause(1000);
        const resultsMessage = $('.ordoneaza-section-left');
        await expect(resultsMessage).toBeDisplayed()
        await browser.pause(1000);

    });

    it ('should add a product to favorites', async () => {
        const scrollToProduct = $('/html/body/main/div/section[3]/div/div[2]/section[2]/div/ul/li[3]/div/a/img');
        await scrollToProduct.scrollIntoView();
        await browser.pause(1000);
        const addProducToFavorites = $('/html/body/main/div/section[3]/div/div[2]/section[2]/div/ul/li[3]/div/div[3]/div/a/img');
        await addProducToFavorites.click();
        await browser.pause(1000);
        const whishlistButton = $('.header-nav-wishlist-item');
        await whishlistButton.click();
        await browser.pause(1000);
        const scrollInWishlist = $('/html/body/main/section[2]/div/section[2]/div/section/section/ul/li/div/a/img');
        await scrollInWishlist.scrollIntoView();
        await browser.pause(1000);
        const h3 = $('h3');
        await expect(h3).toExist();
        await browser.pause(1000);

    });

    it ('take a Screenshot ', async () => {
        await browser.saveScreenshot('./product-in-favorite.png');
        await browser.pause(1000);
     });
 
});
