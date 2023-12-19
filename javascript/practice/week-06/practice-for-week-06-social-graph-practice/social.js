// Implement the SocialNetwork class here
class SocialNetwork {

  constructor() {
    this.users = {};
    this.follows = {};
    this.currentID = 0;
  }

  addUser(name) {
    const id = Object.keys(this.users).length + 1;
    this.users[id] = { id: id, name: name };
    this.follows[id] = new Set();
    return id;
  }

  getUser(userID) {
    return this.users[userID] ? this.users[userID] : null;
  }

  follow(userID1, userID2) {
    if (!this.follows[userID1].has(userID2) && this.users[userID2]) {
      this.follows[userID1].add(userID2);
      return true;
    }

    return false;
  }

  getFollows(userID) {
    if (this.users[userID]) return this.follows[userID];
    return null;
  }

  getFollowers(userID) {
    const followers = new Set();

    for (const user in this.follows) {
      if (this.follows[user].has(userID)) followers.add(Number(user));
    }
    return followers;
  }

  getRecommendedFollows(userID, degrees) {
    const queue = [[userID]];
    const visited = new Set();
    const recommendedFollows = [];

    while (queue.length > 0) {
      let path = queue.shift();
      let currentUser = path[path.length - 1];

      if (!visited.has(currentUser)) {
        visited.add(currentUser);

        for (const user of this.follows[currentUser]) {
          const nextPath = path.concat(user);

          if (!this.follows[userID].has(user) && !visited.has(user)) {
            if (nextPath.length > 1 && nextPath.length <= degrees + 2) {
              recommendedFollows.push(user);
            }
          }
          queue.push(nextPath);
        }
      }
    }

    return recommendedFollows;
  }
}

module.exports = SocialNetwork;
