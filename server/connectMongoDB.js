import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://admin:admin@stack-overflow-clone.pubrk73.mongodb.net/?retryWrites=true&w=majority', {
       useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB connected: ${conn.connection.host}`);

  } 
  catch (error) 
  {
    console.error(error);
    process.exit(1);
  }
};

export default connectDB;