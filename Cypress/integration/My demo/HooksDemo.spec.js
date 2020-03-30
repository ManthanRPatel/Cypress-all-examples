describe('Hooks Demo testing',()=>{

    beforeEach(()=>{ //before all
        cy.log('######### Login block ###########');
    })

    before(()=>{ //only once
        cy.log('######### Set UP block ###########');
    })

    afterEach(()=>{ // after every
        cy.log('######### Log Out block ###########');
    })

    after(()=>{ //only once
        cy.log('######### Tear Down block ###########');
    })

    it('Searching',()=>{
        cy.log('######### searching ###########');
    })

    it('Advanced searching blog',()=>{
        cy.log('######### Advanced searching ###########');
    })

    it('Listing Product blog',()=>{
        cy.log('######### Listing Product ###########');
    })

})