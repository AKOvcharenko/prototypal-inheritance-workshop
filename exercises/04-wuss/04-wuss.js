/*
*
* TODO 1. Create Class Wuss which takes arguments: team, name, power, exp.
* TODO 2. Wuss Class instance should inherits SuperHero Class, and should has methods:
    - greet: returns string - hello there! my name is `name`, and I am `team`'s team member.
    - kickAsses: returns string - I can not kick asses :'(, my power is `power`.
    - manageTheTeam: returns string - I manage `team` team, with experience `exp`.

    usage example var xavier = new SuperHero('x-men', 'Pr. Xavier', 3, 99);
* */

const SuperHero = require('../03-super-hero/03-super-hero');

function Wuss(team, name, power, exp) {
  SuperHero.apply(this, arguments);
}

Wuss.prototype = Object.create(SuperHero.prototype);
Object.assign(Wuss.prototype, {
    constructor: Wuss,
    kickAsses: function() {
      return `I can not kick asses :'( my power is ${this.power}.`;
    }
  }
);

module.exports = Wuss;

