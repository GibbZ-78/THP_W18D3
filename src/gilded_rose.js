class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }

  // Used for all generic Items (hence excluding "Aged Brie", Sulfuras, Backstage Passes, and all "Conjured" items)
  updateItemQuality() {
    console.log(`  > Using 'generic Item' quality calculation with '${this.name}'`);
    this.sellIn--;
    this.sellIn < 0 
      ? (this.quality >= 2 ? this.quality -= 2 : this.quality = 0)
      : (this.quality >= 1 ? this.quality -= 1 : this.quality = 0);
  }

}

// AGED BRIE
// Augmente sa qualité avec le temps qui passe mais jamais au-dessus du plafind de 50 points
class AgedBrie extends Item {

  constructor(name="Aged Brie", sellIn, quality){
    super(name,sellIn,quality);
  }

  updateItemQuality() {
    console.log(`  > Using 'AgedBrie' quality calculation with '${this.name}'`);
    this.sellIn--;
    (this.quality < 50) ? (this.quality++) : (this.quality = 50);
  }

}

// SULFURAS
// Objet légendaire. N'a pas de date de péremption (valorisée à 0 par défaut) et ne perd jamais en qualité (à 80 par défaut)
class Sulfuras extends Item {

  constructor(name="Sulfuras, Hand of Ragnaros", sellIn=0, quality=80){
    super(name, 0, 80);
  }

  updateItemQuality() {
    console.log(`  > Using 'Sulfuras' quality calculation (i.e. nothing changes!) with '${this.name}'`);
    // Does nothing (except logging) as Sulfuras has no expiration date, nor any decrease in quality
    // However keeping this method in case any update in the rules was needed
  }

}

// BACKSTAGE PASSES
// Augmente sa qualité de :
//   +1 jusqu'au 11ème jour (compris) avant péremption, 
//   +2 entre 10 et 6 jours (inclus) avant péremption,
//   +3 entre 5 et 0 jours (inclus) avant péremption.
// Il perd toute qualité dès la date de vente dépassée
class BackstagePasses extends Item {

  constructor(name="Backstage passes to a TAFKAL80ETC concert", sellIn, quality){
    super(name,sellIn,quality);
  }

  updateItemQuality() {
    console.log(`  > Using 'BackstagePasses' quality calculation with '${this.name}'`);
    this.sellIn--;
    if (this.sellIn > 10) {
      (this.quality < 50) ? (this.quality++) : (this.quality = 50);
    }
    if (this.sellIn < 11 && this.sellIn > 5) {
      (this.quality <= 48) ? (this.quality += 2) : (this.quality = 50);
    }
    if (this.sellIn < 6 && this.sellIn >= 0) {
      (this.quality <= 47) ? (this.quality += 3) : (this.quality = 50);
    }
    if (this.sellIn < 0) {
      this.quality = 0;  // Could maybe be optimized by testing if already equal to 0 (cost of test vs. allocation cost ?)
    }
  }

}

class Shop {
  
  constructor(items=[]){
    this.items = items;
  }
  
  updateQualityOfAllShopItems() {
    for (var i = 0; i < this.items.length; i++) {
      this.items[i].updateItemQuality();
    }

    // return this.items;
  }
}

module.exports = {
  Item,
  AgedBrie, 
  Sulfuras, 
  BackstagePasses,
  ConjuredItem,
  Shop
}
