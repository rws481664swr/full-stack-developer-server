import express from 'express';
import userController   from "./controllers/user-controller.js";
import helloController  from "./controllers/hello-controller.js";
import tuitsController   from "./controllers/tuits-controller.js";
import cors from "cors";
import mongoose from "mongoose";

const LOCAL= 'mongodb://localhost:27017/webdev'
const url =process.env.MONGO_CONNECTION_STRING || LOCAL;
console.log(`Using database: ${url===LOCAL ? "local":url}`)
mongoose.connect(url);
const app = express();

app.use(cors());
app.use(express.json());
helloController(app);
userController(app);
tuitsController(app);

app.get('/hello', (req, res) => {res.send('Hello World!')})

app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})

app.listen(process.env.PORT || 4000);


