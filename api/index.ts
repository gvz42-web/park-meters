import express from 'express'
import bodyParser from "body-parser";
import cors from 'cors'
import router from "./router";

const app = express()
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: 'http://localhost:4200'}));

app.use('/', router)



app.listen(3000, () => console.log(`API listening on port ${3000}`))
