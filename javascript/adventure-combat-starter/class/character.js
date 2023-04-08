class Character {

  constructor(name, description, currentRoom) {
    this.name = name;
    this.description = description;
    this.currentRoom = currentRoom;
    this.health = 100;
    this.strength = 10;
    this.items = [];
  }

  applyDamage(amount) {
    this.health -= amount;

    if (this.health <= 0) {
      this.die();
    }
  }

  die() {
    while (this.items.length > 0) {
      this.currentRoom.items.push(this.items.pop());
    }

    this.currentRoom = null;
  }
}

module.exports = {
  Character,
};
