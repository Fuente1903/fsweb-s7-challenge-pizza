describe('HomePageHeader Test', () => {
    beforeEach(() => {
      
      cy.visit('http://localhost:3000')
    })
  
    it('Anasayfa Sipariş Formuna Yönlendirme Yapmakta mı', () => {
      
      cy.get('button').click();
    });
  })

  describe('Form Sayfası İçin Test', () => {
    beforeEach(()=>{
        cy.visit('http://localhost:3000/Form')
    });

    it('Pizza boyutları seçilebilir mi ', ()=>{
        cy.get('[type="radio"]').first().check()
    })

    it('Ekstra malzeme ekleme aktif mi', ()=>{
      cy.get('[type="checkbox"]').check();
    })
  })