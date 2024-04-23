import express from "express";

const app = express();
const port = 3000;

app.get('/', (request, response) => {
  response.json({
    message: 'Hello World'
  });
});

app.listen(port, () => { console.log('server is runing on port', port) });