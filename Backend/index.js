import express from 'express';
import connectDB from './src/db/db.js';
import postModel from './src/models/post.model.js';
import multer from 'multer';
import uploadFile from './src/services/service.js';
import cors from 'cors';

const app = express()

app.use(cors())

const PORT = 3000

app.use(express.json());


const upload = multer({
    storage: multer.memoryStorage(),
})


app.post('/upload', upload.single('image'), async (req, res) => {
    try {
        const { caption } = req.body;

        const result = await uploadFile(
            req.file.buffer,
            req.file.originalname
        );

        await postModel.create({
            image: result.url,
            caption
        });

        res.status(200).json({ message: 'File uploaded successfully' });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


app.get('/uploaded', async (req, res) => {
    try {
        const posts = await postModel.find();
        res.status(200).json({ posts });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})


app.delete('/delete/:id', async (req, res) => {
    try {
        const { id } = req.params;
        await postModel.findByIdAndDelete(id);
        res.status(200).json({ message: 'Post deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
})



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB()
})