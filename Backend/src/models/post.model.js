import mongoose from "mongoose";


const postSchema = new mongoose.Schema({
    image: String,
    caption: String,
})

const postModel = mongoose.model("Post", postSchema);

export default postModel;