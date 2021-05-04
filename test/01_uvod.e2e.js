
// describe('Web Czechitas', () => {
//     it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {
//         // Jdi na adresu https://www.czechitas.cz/cs
//         browser.url('https://www.czechitas.cz/cs/');

// //         // // Pockej 5sekund nez provedes dalsi prikaz
//         browser.pause(3000)

//         // // Dalsi prikaz tady momentalne neni, takze po 5sekundach se prohlizec zavre.
//         // // Exekuce testu skončí a Ty můžeš vidět výsledky testu v terminálu.

//         // // Zde pak můžeš přidat další příkazy
//         // // Zkus například tyto dva příkazy odkomentovat a spustit npm test znovu - co se stane?
//         // //browser.maximizeWindow()
//         // //browser.pause(5000)
//         // browser.$('#footer').scrollIntoView()
//         // browser.pause (3000)
//         // browser.$('.newsletter-email').setValue('muj@email.com')
//         // browser.pause (3000)
//         // browser.minimizeWindow()
//         // browser.pause (3000)
//         // browser.fullscreenWindow()
//         // browser.pause (3000)


//         // browser.url('https://seznam.cz')
//         // browser.pause(5000)
//         // browser.url('')
//         // browser.pause(5000)
//         // browser.url('/portfolio')
//         // browser.pause(5000)
//         // browser.back()
//         // browser.pause(10000)
//         // browser.forward()
//         // browser.pause(10000)
//         // browser.refresh()

// });
// });


// describe ('cviko 3b', () => {
//     it('vyfot s datem', () => {

//     browser.url('');

// let datum = (new Date()).toISOString()

// browser.saveScreenshot(datum + 'screen-main-page.png');
// browser.pause(1000)
// browser.url('/en/portfolio')
// browser.pause(1000)
// browser.saveScreenshot(datum + 'screen-portfolio.png');
// browser.pause(1000)

// });
// });




// // describe ('nekolik cviceni naraz', () => { 
//     it ('stranka se otevre na cele obrazovku', () => {

// browser.url('https://czechitas-humpolec.herokuapp.com/');
// browser.pause(3000)
// browser.fullscreenWindow()
// browser.pause(3000)
// // console.log(browser.getTitle())
// let title = browser.getTitle()
// console.log ('Titul stranky je '+ title)
// // browser.getPageSource().length
// browser.getUrl()

// });





//         // describe('Domaci ukol 1', () => {
//         //     it('stranka se otevre v prohlizeci a udela se screenshot', () => {
//         // browser.url('https://www.czechitas.cz/cs/');
//         // browser.saveScreenshot('./czechitas.png')
        
//         // browser.url('https://czechitas-humpolec.herokuapp.com/');
//         // browser.saveScreenshot('./aplikace.png')

//         // browser.url('https://www.seznam.cz/');
//         // browser.saveScreenshot('./seznam.png')


       
//                 browser.url('https://automation.cervik.repl.co/selectorsButtons.html');
//                 // Pockej 3sekundy nez provedes dalsi prikaz
//                 browser.pause(3000)
//                 browser.$('#button1').click()
//                 browser.pause(3000)
//                 browser.$('.click-click-click').click()
//                 browser.pause(3000)
//                 browser.$('[data-qa="customAttribute-button"]').click()
//                 browser.pause(3000)
//                 browser.saveScreenshot('./buttons.png')
      
    

//     });
// });


// describe('CVICENI 1A', () => {
//     it('se otevře v prohlížeci a počká 5sekund než se prohlížeč zavře', () => {

//         browser.url('https://automation.cervik.repl.co/selectorsButtons.html');
//     
//         browser.pause(1000)
//         browser.$('#button1').click()
//         browser.pause(1000)
//         browser.$('.click-click-click').click()
//         browser.pause(1000)
//         browser.$('[data-qa="customAttribute-button"]').click()
//         browser.pause(5000)
//         browser.saveScreenshot('./buttons.png')
//     });
// });

// describe('CVICENI 2A', () => {
//         it('klikni na vsechny buttony v divu a udelej screenshot', () => {
//             
//             browser.url('https://automation.cervik.repl.co/selectorsButtons.html');

//             let poleTlacitek = browser.$$('#selector-buttons button')
//             for (let i = 0; i< poleTlacitek.length; i=i+1){
//                 poleTlacitek[i].click()
//                 browser.pause(500)
//             }

//             browser.saveScreenshot ('./tlacitka.png')
//         });
//     });


// get a Hint, count the paragraphs, click on the button Dam Like! 10 times and take a screenshot ukol2.png
describe('Domaci ukol 2', () => {
    it('exekuce ukolu', () => {
      
        browser.url(' https://automation.cervik.repl.co/selectors.html')
        browser.pause(2000)

        let elem = $('.card.hint');
        console.log(elem.getText())

        function cnt(){
            let paragraphs = browser.$$ getElementsByTagName("p"); 
            let count = 0;
            for(let i = 0; i < paragraphs.length; i++)
            {
                count += paragraphs[i].innerHTML.split(' ').length;
            }
        }
       
    });
});


