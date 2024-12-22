import mongoose from "mongoose";
import colors from "colors"
const connectDb = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL);
        console.log(`Connected to mongoDB Database ${conn.connection.host}`.bgGreen.yellow);
        
    }catch(error) {
        console.log(`Error in MongoDB ${error}`.red);
        
    }
}
export default connectDb