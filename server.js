const express = require('express');
const jsonServer = require('json-server');
//
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors()); // Agrega el middleware de CORS

app.use(jsonServer.router('./db.json'));

app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

//

const server = jsonServer.create();
// const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();
// const port = process.env.PORT || 4000;
 
server.use(middlewares);
server.use(router);
 
server.listen(port);