//Homework 3

describe('Happiness app Kitty basic features', () => {

        beforeEach(()=>{

            let PridejKocku = $('#addItem')         //find the button Pridej kocku
            for (let i=0; i<5; i=i+1){             //click 5 times on the button Pridej kocku
                PridejKocku.click() 
            }  
            
        })

        it('5 cat cards are added after clicking on the button Pridej kocku', ()=>{

            let catCard = $$('.card.cat')                 //find the cat cards           
            expect(catCard).toBeElementsArrayOfSize(5)    //make sure there are 5 cat cards added
                  
        });
    
        it ('All cat cards are erased after clicking on the button Apokalypsa!', ()=>{

            $('#removeAll').click()                      //find the button Apokalypsa! and click on it
            let catCard = $$('.card.cat')                //find the cat cards
        
            expect(catCard).toBeElementsArrayOfSize(0)   //make sure there aren't any cards
            
        });
    
        it ('The likes counter reacts to an addition, a single deletion or a deletion of all cat cards ', ()=>{
            
           
            let Pocitadlo = $('#counter')           //find the likes counter

            expect(Pocitadlo).toHaveText('5')       //make sure the likes counter shows number 5

            $('#removeItem').click()                //find the button Odeber kocku and click on it
            expect(Pocitadlo).toHaveText('4')       //make sure the likes counter shows number 4

            $('#removeAll').click()                 //find the button Apokalypsa! and click to erase all cat cards
            expect(Pocitadlo).toHaveText('0')       //make sure the cat cards are erased, the likes counter shows 0

    
        });
    });


