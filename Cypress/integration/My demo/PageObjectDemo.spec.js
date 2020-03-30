import LoginPage from "../PageObjects/LoginPage"

describe('Custom Commands Testing',()=>{

    it('Login testing',()=>{

        /// 'admin@yourstore.com', 'admin'
        const lp = new LoginPage();
        lp.visit();
        lp.fillEmail('admin@yourstore.com');
        lp.fillPassword('admin');
        lp.submit();
        cy.title().should('be.equal','Dashboard / nopCommerce administration')

    })

})