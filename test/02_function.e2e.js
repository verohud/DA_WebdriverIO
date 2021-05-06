

describe('Cviceni 2', () => {
    it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {


        browser.url("https://www.czechitas.cz");
        browser.saveScreenshot('./czechitas.png');

        browser.url("https://moje.czechitas.cz/cs")
        browser.saveScreenshot('./aplikace.png');

        browser.url("https://www.seznam.cz")
        browser.saveScreenshot('./seznam.png');
    });
});
