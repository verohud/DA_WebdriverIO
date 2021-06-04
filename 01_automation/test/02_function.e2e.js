
let pomocnik = require("../utils")
let start = require("../index")

describe('Cviceni 2', () => {
    it('save screenshots, show Page info', () => {


        browser.url('');
        browser.saveScreenshot('./novaUrl.png');
        pomocnik.showPageInfo()


        // browser.url("https://moje.czechitas.cz/cs")
        // browser.saveScreenshot('./aplikace.png');

        // browser.url("https://www.seznam.cz")
        // browser.saveScreenshot('./seznam.png');
    });
});
