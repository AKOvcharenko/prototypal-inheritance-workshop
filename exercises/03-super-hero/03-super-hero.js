/*
*
* TODO 1. Create Class SuperHero which takes arguments: team, name, power, exp.
* TODO 2. Hero instance should has methods:
    - greet: returns string - hello there! my name is `name`, and I am `team`'s team member.
    - kickAsses: returns string - I kick asses with power `power`.
    - manageTheTeam: returns string - I manage `team` team, with experience `exp`.

    usage example var wolverine = new SuperHero('x-men', 'Logan', 45, 4);
* */

function SuperHero(team, name, power, exp) {
  this.team = team;
  this.power = power;
  this.exp = exp;
  this.name = name;
}


SuperHero.prototype = {
  constructor: SuperHero,
  greet: function() {
    return `hello there! my name is ${this.name}, and I am ${this.team}'s team member.`;
  },
  kickAsses: function() {
    return `I kick asses with power ${this.power}.`;
  },
  manageTheTeam: function() {
    return `I manage ${this.team} team, with experience ${this.exp}.`;
  }
};

module.exports = SuperHero;
