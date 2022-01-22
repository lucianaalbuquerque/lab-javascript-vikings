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
  };

  receiveDamage(damage) {
    super.receiveDamage(damage);
    if (this.health > 0 ) {
      return `${this.name} has received ${damage} points of damage`;
    } else {
      return`${this.name} has died in act of combat`;
    }
  };

  battleCry() {
    return "Odin Owns You All!"
  };
};

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

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  };
  
  addViking(oneViking) {
    this.vikingArmy.push(oneViking);
  };
  addSaxon(oneSaxon) {
    this.saxonArmy.push(oneSaxon);
  };

  vikingAttack() {
    let randomSxnIndex = Math.floor(this.saxonArmy.length * Math.random());
    let randomSaxon = this.saxonArmy[randomSxnIndex];
    let randomVknIndex = Math.floor(this.vikingArmy.length * Math.random());
    let randomViking = this.vikingArmy[randomVknIndex];
    let result = randomSaxon.receiveDamage(randomViking.attack());
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSxnIndex, 1);
    };
    return result;
  };

  saxonAttack() {
    let randomSxnIndex = Math.floor(this.saxonArmy.length * Math.random());
    let randomSaxon = this.saxonArmy[randomSxnIndex];
    let randomVknIndex = Math.floor(this.vikingArmy.length * Math.random());
    let randomViking = this.vikingArmy[randomVknIndex];
    let result = randomViking.receiveDamage(randomSaxon.attack())
    if (randomViking.health <= 0 ) {
        this.vikingArmy.splice(randomVknIndex, 1)
    }
    return result
  };

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
