const {Character} = require('./character');

const COOLDOWN_TIME = 3000;

class Enemy extends Character {
  constructor(name, description, currentRoom) {
    super(name, description, currentRoom);
    this.cooldown = COOLDOWN_TIME;
    this.attackTarget = null;
  }

  setPlayer(player) {
    this.player = player;
  }

  randomMove() {
    const rooms = this.currentRoom.getExits();
    const randomRoom = rooms[Math.floor(Math.random() * rooms.length)];
    const newRoom = this.currentRoom.getRoomInDirection(randomRoom)

    this.currentRoom = newRoom;
    this.cooldown = COOLDOWN_TIME;
  }

  takeSandwich() {
    // Fill this in
  }

  // Print the alert only if player is standing in the same room
  alert(message) {
    if (this.player && this.player.currentRoom === this.currentRoom) {
      console.log(message);
    }
  }

  rest() {
    // Wait until cooldown expires, then act
    const resetCooldown = function() {
      this.cooldown = 0;
      this.act();
    };
    setTimeout(resetCooldown(), this.cooldown);
  }

  attack() {
    this.attackTarget.applyDamage(10);
    this.cooldown = COOLDOWN_TIME;
    console.log(`${this.name} attacks ${this.player.name} for 10 damange.`);
    console.log(`${this.player.name} now has ${this.player.health} health.`);
  }

  applyDamage(amount) {
    super.applyDamage(amount);
    this.attackTarget = this.player;
  }

  act() {
    if (this.health <= 0) {
      // Dead, do nothing;
    } else if (this.cooldown > 0) {
      this.rest();
    } else {
      this.scratchNose();
      this.rest();
    }

    // Fill this in
  }

  scratchNose() {
    this.cooldown += 1000;

    this.alert(`${this.name} scratches its nose`);

  }
}

module.exports = {
  Enemy,
};
