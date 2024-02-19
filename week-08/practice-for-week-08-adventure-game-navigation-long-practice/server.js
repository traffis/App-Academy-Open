const http = require('http');
const fs = require('fs');

const { Player } = require('./game/class/player');
const { World } = require('./game/class/world');

const worldData = require('./game/data/basic-world-data');

let errorMsg = '';
let player;
let world = new World();
world.loadWorld(worldData);


const server = http.createServer((req, res) => {

  /* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => { // After the assembly of the request body is finished
    /* ==================== PARSE THE REQUEST BODY ====================== */
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }

    /* ======================== ROUTE HANDLERS ========================== */
    const urlParts = req.url.split('/');

    function redirect(locationUrl) {
      res.statusCode = 302;
      res.setHeader('Location', locationUrl);
      return res.end();
    }

    // Phase 1: GET /
    if (req.method === 'GET' && req.url === '/') {
      const htmlPage = fs.readFileSync('./views/new-player.html', 'utf-8');
      const resBody = htmlPage.replace(/#{availableRooms}/g, world.availableRoomsToString());

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      return res.end(resBody);
    }

    // Phase 2: POST /player

    if (req.method === 'POST' && req.url === ('/player')) {
      const {name, roomId} = req.body;
      player = new Player(name, world.rooms[roomId]);

      res.statusCode = 302;
      res.setHeader('Location', `/rooms/${roomId}`);
      return res.end();
    }

    // After phase 2, a player is required.
    // If there is no player, redirect to home.
    if (!player) {
      redirect('/');
      return;
    }

    // Phase 3: GET /rooms/:roomId
    if (req.method === 'GET' && req.url.startsWith('/rooms/') && urlParts.length === 3) {
      const roomId = urlParts[2];
      const room = world.rooms[roomId];

      if (room !== player.currentRoom) {
        redirect(`/rooms/${player.currentRoom.id}`);
        return;
      }

      const htmlPage = fs.readFileSync('./views/room.html', 'utf-8');
      const resBody = htmlPage
        .replace(/#{roomName}/g, room.name)
        .replace(/#{inventory}/g, player.inventoryToString())
        .replace(/#{roomItems}/g, room.itemsToString())
        .replace(/#{exits}/g, room.exitsToString());

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      return res.end(resBody);
    }

    // Phase 4: GET /rooms/:roomId/:direction
    if (req.method === 'GET' && req.url.startsWith('/rooms/') && urlParts.length === 4) {
      const roomId = urlParts[2];
      const room = world.rooms[roomId];
      const direction = urlParts[3];

      if (room !== player.currentRoom) {
        redirect(`/rooms/${player.currentRoom.id}`);
        return;
      }

      try {
        player.move(direction[0]);
        redirect(`/rooms/${player.currentRoom.id}`);
        return;
      } catch (error) {
        redirect(`/error`);
        errorMsg = error;
        console.log(errorMsg);
        return;
      }
    }

    // Phase 5: POST /items/:itemId/:action
    if (req.method === 'POST' && req.url.startsWith('/items/') && urlParts.length === 4) {
      const itemId = urlParts[2];
      const action = urlParts[3];

      switch (action) {
        case 'take':
          player.takeItem(itemId);
          break;
        case 'drop':
          player.dropItem(itemId);
          break;
        case 'eat':
          try {
            player.eatItem(itemId);
          } catch (error) {
            redirect('/error');
            errorMsg = error;
            console.log(errorMsg);
            return;
          }
          break;
      }
      redirect(`/rooms/${player.currentRoom.id}`);
      return;
    }

    // Error handling
    if (req.method === 'GET' && req.url === '/error') {
      const htmlPage = fs.readFileSync('./views/error.html', 'utf-8');
      const resBody = htmlPage
        .replace(/#{errorMessage}/g, errorMsg)
        .replace(/#{roomId}/g, player.currentRoom.id);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      return res.end(resBody);
    }

    // Phase 6: Redirect if no matching route handlers
    redirect(`/rooms/${player.currentRoom.id}`);
    return;
  })
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
