const {Character} = require('./character');
const {Enemy} = require('./enemy');
const {Food} = require('./food');

class Player extends Character {

  constructor(name, startingRoom) {
    super(name, "main character", startingRoom);
  }

  move(direction) {

    const nextRoom = this.currentRoom.getRoomInDirection(direction);

    // If the next room is valid, set the player to be in that room
    if (nextRoom) {
      this.currentRoom = nextRoom;

      nextRoom.printRoom(this);
    } else {
      console.log("You cannot move in that direction");
    }
  }

  printInventory() {
    if (this.items.length === 0) {
      console.log(`${this.name} is not carrying anything.`);
    } else {
      console.log(`${this.name} is carrying:`);
      for (let i = 0 ; i < this.items.length ; i++) {
        console.log(`  ${this.items[i].name}`);
      }
    }
  }

  takeItem(itemName) {
    const roomItems = this.currentRoom.items;
    const playerItems = this.items;
    const item = this.currentRoom.getItemByName(itemName);
    const itemIdx = roomItems.findIndex(item => item.name === itemName);

    playerItems.push(item);
    roomItems.splice(itemIdx, 1);
    console.log(`${item.name} is now in your inventory.`);
  }

  dropItem(itemName) {
    const playerItems = this.items;
    const roomItems = this.currentRoom.items;
    const item = this.getItemByName(itemName);
    const itemIdx = playerItems.findIndex(item => item.name === itemName);

    roomItems.push(item);
    playerItems.splice(itemIdx, 1);
    console.log(`You dropped ${item.name} in ${this.currentRoom.name}.`);
  }

  eatItem(itemName) {
    const item = this.getItemByName(itemName);
    const playerItems = this.items;

    if (item instanceof Food) {
        const itemIdx = playerItems.findIndex(item => item.name === itemName);

        playerItems.splice(itemIdx, 1);
        console.log(`You ate ${item.name}.`);
    } else {
        console.log('You cannot eat a non-food item.');
    }
  }

  getItemByName(name) {
    return this.items.find(item => item.name === name);
  }

  hit(name) {
    const enemy = this.currentRoom.getEnemyByName(name);
    enemy.applyDamage(10);
    console.log(`${this.name} attacks ${enemy.name} for 10 damage.`);
    console.log(`${enemy.name} now has ${enemy.health} health.`)
  }

  die() {
    console.log("You are dead!");
    process.exit();
  }

}

module.exports = {
  Player,
};
