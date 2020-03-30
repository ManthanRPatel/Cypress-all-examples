describe('Custom Commands Testing',()=>{

    /// first add this line to support > commands.js
    // Cypress.Commands.add("login", (email, password) => { 
    //     cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
    //     cy.get('#Email').type(email) //email
    //     cy.get('#Password').type(password) //password
    //     cy.get('input[type=submit]').click() //login
    //  })



    it('Login testing',()=>{

        cy.login('admin@yourstore.com', 'admin' )
        cy.title().should('be.equal','Dashboard / nopCommerce administration')

        cy.login('admin@yourstore.com', 'admindfsdfsd' ) //invalid
        cy.title().should('be.equal','Your store. Login')

        cy.login('admin@yourstore.com', 'admin' ) //valid
        cy.title().should('be.equal','Your store. Login')

    })

 // email == 'admin@yourstore.com' ,, password == 'admin'

    it('add customer testing',()=>{
        //login
        cy.login('admin@yourstore.com', 'admin' )
        ///adding script
        cy.log('Adding Customer..............')
    })

    // it('edit customer testing',()=>{
    //     //login
    //     cy.login('admin@yourstore.com', 'admin' )
    //     // editing script
    //     cy.log('updating Customer..............')
    // })



})