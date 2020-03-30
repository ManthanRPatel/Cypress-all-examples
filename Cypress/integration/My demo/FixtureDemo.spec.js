describe('Fixture Demo Test',()=>{

    var tt;
    before(()=>{
        cy.fixture('example.json').then((data)=>{

            //data 
            tt = data
        })
    })

    it('Fixture testing',()=>{

        cy.visit('https://admin-demo.nopcommerce.com/login?ReturnUrl=%2Fadmin%2F');
        cy.get('#Email').type(tt.email2) //email
        cy.get('#Password').type(tt.password) //password
        cy.get('input[type=submit]').click() //login

    })

})