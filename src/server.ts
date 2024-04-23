import express from "express";
import { routes } from "./routes";

const port = 3000;

const app = express();
app.use(express.json())
app.use(routes);

app.listen(port, () => { console.log('server is runing on port', port) });