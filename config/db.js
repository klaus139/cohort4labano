import mongoose from 'mongoose';

const connectDb = async() => {
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log(`sucessfully connected to the database`);

    }catch(error){
        console.log('Error connecting to the database: ', error.message);
        process.exit(1)
    }
}

export default connectDb;