describe('table automation Testing',()=>{

    it('web table testing',()=>{

        cy.visit("http://testautomationpractice.blogspot.com/");

         /// 1 any where check value
        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible');

        //// 2 on specific col row===  table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)
        cy.get('table[name=BookTable] > tbody > tr:nth-child(2) > td:nth-child(3)').contains('Selenium').should('be.visible');

        /// 3 check value by iterting rows...fail  table[name=BookTable] > tbody > tr td:nth-child(2) // catch 2nd row 
        cy.get('table[name=BookTable] > tbody > tr td:nth-child(2)').each(($e,index,$list)=>{

            const text = $e.text()
            if( text.includes("Amod") ){
                
                cy.get('table[name=BookTable] > tbody > tr td:nth-child(1)').eq(index).then( function( bname ){

                    const bookName = bname.text()
                    expect(bookName).to.equal('Master In Java');

                })
            }
        })


    })
})