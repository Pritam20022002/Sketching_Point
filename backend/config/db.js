import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('_ADD DATABASE CONNECTION STRING_').then(()=>console.log("DB Connected"));
}
