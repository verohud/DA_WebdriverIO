describe('Secret number', () => {
  beforeEach(() => { 
    browser.url('https://automation.cervik.repl.co/inputs.html')
  })

  it('confirmation appears after validating correct secret number', () => {
   
    let hiddenPw = $('#secretPassword').getValue();                                  //find the value of the hidden password
   
    $('#secretNumberInput').setValue(hiddenPw)                                      //set the value of the hidden password in the Secret Number input
    $('#checkSecretNumber').click()                                                 //click on the button 'Check number!'
    
    expect($('#passwordHelpBlock')).toHaveText('Super secret je super správně.')   //make sure you get the confirmation message

  })

  it('error appears after validating wrong secret number', () => {

    $('#secretNumberInput').setValue('ListickySemNepatriATakProtoTeToSemNepusti.Smutne.')     //insert any invalid data in the Secret number input
    $('#checkSecretNumber').click()                                                           //click on the button 'Check number!'

    expect($('#passwordHelpBlock')).toHaveText('Super secret je super špatně.')               //make sure an error message appears


  })

  it('error appears after validating empty secret number', () => {
    
    $('#secretNumberInput').setValue()                                                      //leave the Secret number input empty
    $('#checkSecretNumber').click()                                                         //click on the button 'Check number!'

    expect($('#passwordHelpBlock')).toHaveText('Super secret je super špatně.')             //make sure an error message appears

    
  })
})