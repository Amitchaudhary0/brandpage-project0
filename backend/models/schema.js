import mongoose from "mongoose";

await mongoose.connect('mongodb+srv://rpant2004:HWWjIVRGgmHz75im@inote.9u9cn.mongodb.net/NikeAuth');

const NikeAuth = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    isAdmin: Boolean
});


export const authDB = mongoose.model('NikeAuth', NikeAuth);