const http = require('http');
const fs = require("fs");

const server = http.createServer((req, res) => {
  const assetsDir = './assets';

  if (req.method === 'GET' && req.url.startsWith('/static')) {
    const urlArray = req.url.split("/");
    const fileName = urlArray[urlArray.length - 1];
    const fileExtension = fileName.slice(fileName.indexOf('.') + 1);
    const assetType = urlArray[2];
    const assetPath = `${assetsDir}/${assetType}/${fileName}`;
    let asset;

    if (fileExtension === 'jpg') {
      res.setHeader('Content-Type', 'image/jpeg');
      asset = fs.readFileSync(assetPath);
    }

    if (fileExtension === 'css') {
      res.setHeader('Content-Type', 'text/css');
      asset = fs.readFileSync(assetPath, 'utf-8');
    }

    res.statusCode = 200;
    return res.end(asset);

  }

  const htmlFile = fs.readFileSync('./index.html', 'utf-8');
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/html");
  return res.end(htmlFile);
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));
