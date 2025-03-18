
import express from 'express';
import adminRouter from './routes/adminRouter.js';
import userRouter from './routes/users.routes.js';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
import connectDB from'./db/connectdb.js';
dotenv.config(); // Load environment variables from .env file


const app = express();
//connect MongoDb
connectDB();
const port = process.env.port || '8000';

// Middleware setup
app.use(cors({ credentials: true, origin: '*' })); // Allow frontend to access backend with cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session setup
app.use(
  session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: false, 
      httpOnly: true,
    },
  })
);

// Routes setup
app.use('/user', userRouter);
app.use('/admin', adminRouter);

// Start server
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
