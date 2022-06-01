class Item {
  constructor(name, sellIn, quality){
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
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
      this.quality = 0;  // Could maybe be optimized by testing if already equal to 0 (cost of this "===0" test vs. systematic allocation cost ?)
    }
  }

}

// GENERIC ITEMS (aka "All other items, be they conjured or not)
// Diminue leur qualité d'1 point avec le temps qui passe et de 2 points dès la date de péremption dépassée
// Cette dégressivité est 2 fois plus rapide dans le cas des objets "Conjured"
// Ladite qualité ne peut cependant jamais descendre sous 0
class GenericItem extends Item {

  constructor(name, sellIn, quality){
    super(name,sellIn,quality);
    this.isConjured = (this.name.indexOf("Conjured") !== -1);
  }

  // Used for all generic (conjured or not) items (hence so far excluding "Aged Brie", Sulfuras, and Backstage Passes...)
  updateItemQuality() {
    this.sellIn--;
    let qualityDecreaseSpeed = 1;
    if (this.isConjured) {
      console.log(`  > Using 'Conjured Item' quality calculation (i.e. decreasing 2x faster) with '${this.name}'`);
      qualityDecreaseSpeed = 2;
    } else {
      console.log(`  > Using 'Generic Item' quality calculation with '${this.name}'`);
    }
    this.sellIn < 0 
        ? (this.quality >= 2*qualityDecreaseSpeed ? this.quality -= 2*qualityDecreaseSpeed : this.quality = 0)
        : (this.quality >= qualityDecreaseSpeed ? this.quality -= qualityDecreaseSpeed : this.quality = 0);
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
  GenericItem,
  AgedBrie, 
  Sulfuras, 
  BackstagePasses,
  Shop
}
