const { Shop, GenericItem, AgedBrie, Sulfuras, BackstagePasses } = require('../src/gilded_rose.js');

describe("Gilded Rose Test Bank", function() {

  const testItems = [
    new GenericItem("+5 Dexterity Vest", 10, 20),
    new AgedBrie("Aged Brie", 2, 0),
    new GenericItem("Elixir of the Mongoose", 5, 7),
    new Sulfuras("Sulfuras, Hand of Ragnaros", 0, 80),
    new Sulfuras("Sulfuras, Hand of Ragnaros", -1, 80),
    new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 15, 20),
    new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 10, 49),
    new BackstagePasses("Backstage passes to a TAFKAL80ETC concert", 5, 49),
    new GenericItem("Conjured Mana Cake", 3, 6),
    new GenericItem("Magical Monkey Conjured Poo", 6, 30),
  ];
  const testGildedRose = new Shop(testItems);
  const updatedTestItems = testGildedRose.updateQualityOfAllShopItems();

  it("Test type #1 - Quality decreases by 1 every day before deadline", function() {
    expect(updatedTestItems[0].quality).toEqual(19);
    expect(updatedTestItems[2].quality).toEqual(6);
  });

  it("Test type #2 - Quality decreases by 2 every day once beyond deadline", function() {
    expect(updatedTestItems[0].quality).toEqual(19);
    expect(updatedTestItems[2].quality).toEqual(6);
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
 