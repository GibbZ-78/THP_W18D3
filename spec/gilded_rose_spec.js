var { Shop, Item, GenericItem, AgedBrie, Sulfuras, BackstagePasses } = require('../src/gilded_rose.js');

describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new GenericItem("foo", 0, 0) ]);
    const items = gildedRose.updateQualityOfAllShopItems();
    expect(items[0].name).toEqual("fixme");
  });

});

// Est-ce que, à chaque appel de "updateQualityOfAllShopItems()" :
//   1) La qualité (quality) baisse bien de 1 pour la plupart des items (GenericItems) tant que la date de vente n'est pas dépassée ?
//   2) La qualité (quality) de ces mêmes objets génériques baisse de 2 points par jour une fois la date de péremption dépassée ?
//   3) La qualité (quality) augmente bien de 1 pour les items concernés (ex: Aged Brie) 
//   4) La qualité (quality) augmente par ailleurs de 2 quand il reste entre 10 et 6 jours (inclus) avant la date limite de vente (sellIn) pour certains items (ex: Backstage passes) ?
//   5) La qualité (quality) augmente encore de 3 quand il reste entre 5 et 0 jours (inclus) avant la date limite de vente (sellIn) pour certains items (ex: Backstage passes) ?
//   6) La qualité (quality) passe et reste à 0 quand la date limite de vente (sellIn) est dépassée pour certains items (ex: Backstage passes) ?
//   7) La qualité (quality) de l'objet "Sulfuras" ne change jamais (valorisée à 80 par défaut) ; pas plus que sa date limite de vente (valorisée à 0 jour ou null par défaut) ?
//   8)
//   9) 
 