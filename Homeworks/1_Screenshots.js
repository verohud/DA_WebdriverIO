//Homework 1

describe('Screenshots', () => {
            it('the browser opens the website and takes a screenshot', () => {
        browser.url('https://www.czechitas.cz/cs/');
        browser.saveScreenshot('./czechitas.png')
        
        browser.url('https://czechitas-humpolec.herokuapp.com/');
        browser.saveScreenshot('./aplikace.png')

        browser.url('https://www.seznam.cz/');
        browser.saveScreenshot('./seznam.png')

    });
});
