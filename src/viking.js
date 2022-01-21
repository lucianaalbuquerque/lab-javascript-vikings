// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    //this.health.filter((points) => {damage !== points} )
  }
}


// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0 ) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return`${this.name} has died in act of combat`;
    }
  } 
  battleCry() {
    return "Odin Owns You All!"
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0 ) {
      return `A Saxon has received ${damage} points of damage`;
    } else {
      return`A Saxon has died in combat`;
    }
  }
}


let sax = new Saxon(100, 50)
console.log(sax)
sax.receiveDamage(5)
console.log(sax)

// War
class War {
  constructor() {
    this.saxonArmy = [];
    this.vikingArmy = [];
  };
  addViking(oneViking) {
    this.vikingArmy.push(oneViking)
  };
  addSaxon(oneSaxon) {
    this.saxonArmy.push(oneSaxon)
  };
  vikingAttack() {
    randomSxn = 1 + Math.floor(saxonArmy.length * Math.random());
    randomVkn = 1 + Math.floor(vikingArmy.length * Math.random());
    return this.saxonArmy[randomSxn].receiveDamage(this.vikingArmy[randomVkn].strength);
    //this.saxonArmy.filter((saxon) => {saxon.health > 0});
  }
  saxonAttack() {
    randomSxn = 1 + Math.floor(saxonArmy.length * Math.random());
    randomVkn = 1 + Math.floor(vikingArmy.length * Math.random());
    return this.vikingArmy[randomVkn].receiveDamage(this.saxonArmy[randomSxn].strength);
    //this.vikingArmy.filter((vkn) => {vkn.health > 0});
  }
  showStatus() {
    if (this.saxonArmy.length == 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length == 0) {
      return "Saxons have fought for their lives and survived another day..."
    } else {
      return "Vikings and Saxons are still in the thick of battle."
    }
  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}
