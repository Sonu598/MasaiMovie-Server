const express=require('express');
const { connect } = require('./config/db');
const { userRouter } = require('./routes/user.route');
const { movieRouter } = require('./routes/movie.route');
const { reviewRouter } = require('./routes/review.route');
const { generateToken, generateRefreshToken, verifyToken, verifyRefreshToken, cookieParser }=require('./middleware/authentication');
const app=express();
app.use(express.json());
require('dotenv').config();

app.use('/api',userRouter);
app.use('/api',movieRouter);
app.use(generateToken, generateRefreshToken, verifyToken, verifyRefreshToken, cookieParser);
app.use('/api', reviewRouter)

app.listen(process.env.PORT, async()=>{
    try {
        await connect;
        console.log('Connected to Database');
    } catch (err) {
        console.log(err.message);
    }
    console.log(`Server is running on port ${process.env.PORT}`);
})