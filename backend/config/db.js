import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://deypritam7076:FK0NMutswHWPUrtZ@cluster0.nnrh3.mongodb.net/Art-products').then(()=>console.log("DB Connected"));
}