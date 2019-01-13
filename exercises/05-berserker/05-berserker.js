/*
*
* TODO 1. Create Class Berserker which takes arguments: team, name, power, exp.
* TODO 2. Wuss Class instance should inherits SuperHero Class, and should has methods:
    - greet: returns string - hello there! my name is `name`, and I am `team`'s team member.
    - kickAsses: returns string - I can not kick asses :'(, my power is `power`.
    - manageTheTeam: returns string - I manage `team` team, with experience `exp`.

    usage example var hulk = new Berserker('avengers', 'Hulk', 1000, 1);
* */

const SuperHero = require('../03-super-hero/03-super-hero');

function Berserker(team, name, power, exp) {
  SuperHero.apply(this, arguments);
}

Berserker.prototype = Object.create(SuperHero.prototype);
Object.assign(Berserker.prototype, {
    constructor: Berserker,
    manageTheTeam: function() {
      return `I can not manage team, I am too strong for this, my power is ${this.power}.`;
    }
  }
);

module.exports = Berserker;
