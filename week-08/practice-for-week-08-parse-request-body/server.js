const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

const http = require('http');

server = http.createServer((req, res) => {
  console.log(`${req.method} ${req.url}`);

  let reqBody = "";
  req.on('data', data => {
    reqBody += data;
  });

  req.on("end", () => {
    req.body = parseBody(reqBody);
    sendFormPage(req, res);
  });
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };
