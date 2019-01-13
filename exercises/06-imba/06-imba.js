/*
*
* TODO 1. Create Class Imba which takes arguments: team, name, power, exp.
* TODO 2. Imba Class instance should inherits SuperHero Class, and should has methods:
    - greet: returns string - hello there! my name is `name`, and I am `team`'s team member.
    - kickAsses: returns string - I kick asses with power `power`.
    - manageTheTeam: returns string - I manage `team` team, with experience `exp`.
    -doAnything: returns string - I can do anything, because I am imba.

    usage example var steven = new Imba('avengers', 'Steven Rogers', 300, 100);
* */

const SuperHero = require('../03-super-hero/03-super-hero');

function Imba(team, name, power, exp) {
  SuperHero.apply(this, arguments);
}

Imba.prototype = Object.create(SuperHero.prototype);
Object.assign(Imba.prototype, {
    constructor: Imba,
    doAnything: function() {
      return 'I can do anything, because I am imba.';
    }
  }
);

module.exports = Imba;
