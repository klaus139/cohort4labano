import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db.js';

dotenv.config();

//connecting to database
connectDb();

import userRoutes from './routes/user-routes.js';

const app = express();

const Port = process.env.PORT;

app.use('/api/users', userRoutes);


app.get('/', function (req, res) {
    res.send('Hello from the server')
})






app.listen(Port, () => console.log(`server is running on port ${Port}`));