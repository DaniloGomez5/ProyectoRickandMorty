/* const getCharById = require("./controllers/getCharById");
const http = require("http");
const PORT = 3001;

const servidor = http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    if (req.url.includes('/rickandmorty/character')) {
      let id = req.url.split("/").at(-1);
      getCharById(res, id);
    }
  })
  .listen(PORT, "localhost");
 */

const express = require("express");
const server = express();
const PORT = 3001;
const router = require ('./routes/index')


server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
     'Access-Control-Allow-Headers',
     'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
     'Access-Control-Allow-Methods',
     'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(express.json())
server.use('/rickandmorty', router)

server.listen(PORT, () => {
  console.log("Server raised in port: " + PORT);
});
