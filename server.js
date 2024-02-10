import express, { urlencoded } from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';
import cookieParser from 'cookie-parser';

dotenv.config();

//connecting to database
connectDb();

import userRoutes from './routes/user-routes.js';

const app = express();

//middleware
app.use(express.json());
app.use(urlencoded({extended:false}));
app.use(cookieParser());

const Port = process.env.PORT;

app.use('/api/users', userRoutes);


app.get('/', function (req, res) {
    res.send('Hello from the server')
})






app.listen(Port, () => console.log(`server is running on port ${Port}`));