import { Controlador } from "./controllers/Controlador";
import { getData } from "./router/get";
const express = require("express");
const app = express();

getData(app);

app.listen(3000);
