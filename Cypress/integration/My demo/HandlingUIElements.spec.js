describe('New Tour Demo Testing',()=>{

    it('Verifying InputBox and Radio Button',()=>{

        cy.visit("http://newtours.demoaut.com/");

        cy.url().should('include','newtours');

        cy.get('input[name=userName]').should('be.visible').should('be.enabled').type("mercury");

        cy.get('input[name=password]').should('be.visible').should('be.enabled').type("mercury");

        cy.get('input[name=login]').should('be.visible').click() //sign in

        //verify title
        cy.title().should('eq','Find a Flight: Mercury Tours:') // titile verification

        // radio button
        cy.get("input[value=roundtrip]").should('be.visible').should('be.checked') //visibility check status
        cy.get("input[value=oneway]").should('be.visible').should('not.be.checked').click()

        cy.get('[name=findFlights]').should('be.visible').click(); //conntinue button

        cy.title().should('eq','Select a Flight: Mercury Tours'); //titile verification





    })




})