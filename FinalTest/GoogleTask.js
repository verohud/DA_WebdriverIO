

describe('Find Czechitas link on Google', () => {

    it('Open Google, search the word Czechitas and click on the first link', ()=>{

    browser.url('https://www.google.com/');

      //agree with the Google's terms and conditions
      let buttonAgree = $('#L2AGLb');        
      buttonAgree.click();
      // browser.pause(5000)

      //search the word Czechitas and confirm
      let searchBox = $('.gLFyf.gsfi');
      searchBox.setValue('Czechitas');
      let buttonSearch = $('.gNO89b[value="Google Search"]');
      buttonSearch.click();
      
      
      //click on the first link from the search results
      let Czechitas = $('a .LC20lb');
      Czechitas.click();
      
      //print the title of the website
      let title = browser.getTitle();
      console.log('Title is: ' + title);

      //make sure the website url is containing the word czechitas
      expect(browser).toHaveUrlContaining('czechitas');      
        
    });

   });


  // describe(Find Czechitas website in Google', () => {
  //   it('a otevřu první odkaz', () => {

  //       //jde na stránku google.com
  //       browser.url('http://www.google.com');

  //       //klikne na souhlas s cookies
  //       browser.$('#L2AGLb').click()

  //       //do vyhledávacího okna zadá slovo Czechitas
  //       let input = browser.$('.gLFyf.gsfi')
  //               input.setValue('Czechitas');

  //       //potvrdí entrem (chtěla jsem si zkusit, jestli to jde i jinak, než kliknutím)
  //       browser.keys('\uE007')

  //       //klikne na první odkaz (pro jistotu nereklamní - dvakrat se mi stalo, ze reklamni vedl na nejakou jinou stranku)
  //       browser.$('.LC20lb.DKV0Md').click()
  //       // browser.$('.cfxYMc.JfZTW.c4Djg.MUxGbd.v0nnCb').click() // varianta 2: klikne na prvni odkaz vcetne reklamnich
  
  //       //asertace, že jsem na správné stránce
  //       let nadpisStranky = browser.$('.headline.perfo')
  //       expect(nadpisStranky).toHaveTextContaining('IT je budoucnost.')
  //   })})