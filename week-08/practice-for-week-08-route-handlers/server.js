const http = require('http');

let nextDogId = 1;

function getNewDogId() {
  const newDogId = nextDogId;
  nextDogId++;
  return newDogId;
}

const server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on("data", (data) => {
    reqBody += data;
  });

  // When the request is finished processing the entire body
  req.on("end", () => {
    // Parsing the body of the request
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
      console.log(req.body);
    }
    // Do not edit above this line

    // define route handlers here
    const urlRouteArray = req.url.split("/");
    let reqDogId = parseInt(urlRouteArray[2]) ? urlRouteArray[2] : undefined;

    // route handlers for GET methods
    if (req.method === "GET") {

      // route handler for root page
      if (req.url === "/") {
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/plain");
        return res.end("Dog Club");
      }

      // dogs page router handlers
      if (urlRouteArray.length >= 2) {

        // route handler for dogs page
        if (req.url === '/dogs') {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          return res.end("Dogs Index");
        }

        // route handler for retrieving details related to dogId
        if (req.url === `/dogs/${reqDogId}`) {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          return res.end(`Dog details for dogId: ${reqDogId}`);
        }

        // route handler for creating new dog page
        if (req.url === '/dogs/new') {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          return res.end("Dog create form page");
        }

        // route handler for editing existing dog page
        if (req.url === `/dogs/${reqDogId}/edit`) {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/plain");
          return res.end(`Dog edit form page for dogId: ${reqDogId}`);
        }
      }
    }

    // route handlers for POST methods
    if (req.method === "POST") {

      // route handler for new dog creation
      if (req.url === "/dogs") {
        res.statusCode = 302;
        res.setHeader("Location", `/dogs/${getNewDogId()}`);
        return res.end();
      }

      // route handler for new dog details by dogId
      if (req.url === `/dogs/${reqDogId}`) {
        res.statusCode = 302;
        res.setHeader("Location", `/dogs/${reqDogId}`);
        return res.end();
      }
    }

    // Do not edit below this line
    // Return a 404 response when there is no matching route handler
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    return res.end('No matching route handler found for this endpoint');
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
