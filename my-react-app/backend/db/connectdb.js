import mongoose from'mongoose';

const connectDB = async () => {
  try {
    // Replace <db_password> with your actual database password
    
    const mongoURI = process.env.MONGODB_URI;

    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('MongoDB connection error:', err);
  }
};

export default connectDB;

{/* import mongoose from 'mongoose';

const connectDB = async (DATABASE_URL)
try{
    const DB_OPTIONS = {
        // dbName: 'travelagency',
        dbName:'Tourist'
    }
    await mongoose.connect(DATABASE_URL,DB_OPTIONS);
    console.log('connected successfully..')
} catch(err){
    console.log(err);
}

export default connectDB;*/}