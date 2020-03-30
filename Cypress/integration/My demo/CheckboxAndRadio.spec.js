describe('Automation Demo Site Testing',()=>{

    // beforeEach(function() {
    //     cy.visit("http://demo.automationtesting.in/Register.html");
    // });

    // it('Verifying InputBox and Radio Button',()=>{

    //     cy.visit("http://demo.automationtesting.in/Register.html");

    //     cy.get('#checkbox1').check().should('be.checked').and('have.value','Cricket')
    //     cy.get('#checkbox2').check().should('be.checked').and('have.value','Movies')
    //     cy.get('#checkbox3').check().should('be.checked').and('have.value','Hockey')

    //     cy.get('#checkbox1').uncheck().should('not.be.checked')
    //     cy.get('#checkbox2').uncheck().should('not.be.checked')
    //     cy.get('#checkbox3').uncheck().should('not.be.checked')

    //     cy.get('input[type=checkbox]').check(['Cricket','Hockey'])
    // })

    it('Skills Drop Down',()=>{

        cy.visit("http://demo.automationtesting.in/Register.html");

        cy.get('#Skills').select('Android').should('have.value','Android'); // dropdown

    })

    it('Languages Selection',()=>{ // multiple drop down selection

        cy.get('#msdd').click() // dropdown
        cy.get('.ui-corner-all').contains('English').click()
        cy.get('.ui-corner-all').contains('Arabic').click()

    })

    it('Country searchable Selection',()=>{ //dropdown search and select

        cy.get('[role=combobox]').click( { force : true } ) // dropdown
        cy.get(".select2-search__field").type('Ind')
        cy.get(".select2-search__field").type('{enter}')
        

    })

})