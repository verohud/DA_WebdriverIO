describe('Fairytale, () => {
    it('print Hint, count the paragraphs, click 10 times on the button Dam like and take a screenshot', () => {
      
        browser.url(' https://automation.cervik.repl.co/selectors.html'); 
        browser.pause(2000)

        let elemHint = $('.card.hint');                     //find the section Hint on the page
        console.log(elemHint.getText());                    //print the text from the section Hint

        let ParagraphsNumber = browser.$$('#pohadka p')     //find all the paragraphs on the page
        console.log(ParagraphsNumber.length);               //print the number of the paragraphs

        let giveLike = browser.$('#like-button')            //find the button Dam like!
        let CountLikes = browser.$('#lvlAwesome')           //find the counter of likes

        CountLikes.scrollIntoView()                         //scroll down the page to see what's happening with the counter

        for (let i=0; i<9; i=i+1){                          //clicking on the button Dam like 10 times
            giveLike.click()
            browser.pause(2000)
        }         
   
        browser.saveScreenshot('./ukol2.png')               //take a screenshot of the page and save it
    });
});


