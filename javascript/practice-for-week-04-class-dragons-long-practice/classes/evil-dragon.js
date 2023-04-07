const Dragon = require('./dragon');

class EvilDragon extends Dragon {
  constructor(name, color, evilDoings, nemesis) {
    super(name, color);
    this.evilDoings = evilDoings;
    this.nemesis = nemesis;
  }

  dontInviteThemOverForDinner() {
    this.evilDoings.forEach(evilDoing => {
      console.log(`${this.name} will ${evilDoing}`)
    });
  }

  burnsNemesis() {
    return `${this.name} destroys ${this.nemesis} with fire! WHOOOSH!!!`;
  }
}

/****************************************************************************/
/******************* DO NOT EDIT CODE BELOW THIS LINE ***********************/

try {
  module.exports = EvilDragon;
} catch {
  module.exports = null;
}
