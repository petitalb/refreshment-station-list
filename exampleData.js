const exampleData = {
  Issued: Date.parse('2020-10-12') / 1000,

  Ravitaillement: {
    Nom: 'Seyssins',
    Adresse: 'Parc F. Mitterrand, 38180 Seyssins',
    Massif: '.Massif',
    RefLog: '.Ref_log',
  },
  ChefsDePoste: [
    {
      Nom: 'Doe',
      Prenom: 'John',
      Poste: 'Chef de Poste',
      Telephone: '06.06.06.06.06'
    },
    {
      Nom: 'Doe',
      Prenom: 'Jane',
      Poste: 'Adjoint',
      Telephone: '06.06.06.06.06'
    }
  ],
  Course: {
    Nom: '180 Xtrem'
  },

  Nourriture: [
    {
      Nom: 'Banane',
      Quantite: 35,
      Conditionnement: 'Banane(s)',
      Commentaire: '',
    },
    {
      Nom: 'Bleu du vercors',
      Quantite: 30,
      Conditionnement: '1/2 fromage',
      Commentaire: '',
    },
  ]
};
