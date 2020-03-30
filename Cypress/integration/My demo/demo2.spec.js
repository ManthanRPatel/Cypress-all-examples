{/* <reference typeof="cypress" /> */}

describe('Nop Commerce Testing', function() {

    it('Verifying task of locator',()=>{

        cy.visit("https://demo.nopcommerce.com/") //open url
        cy.get('#small-searchterms').type("Apple Macbook Pro 13-inch") //tyoin search bar
        cy.get("[type='submit']").click() //click on search button
        cy.get('.product-box-add-to-cart-button[value="Add to cart"]').click()
        cy.get('#addtocart_4_EnteredQuantity').clear().type('2') // quantitiy
        cy.get('#add-to-cart-button-4').click() // add to cart after adding quantity

        cy.wait(5000)

        cy.get('#topcartlink > a > span.cart-label').click() // shopping cart link

        cy.wait(3000)

        cy.get('.product-unit-price').contains('$1,800.00') //validation point




    })



  })