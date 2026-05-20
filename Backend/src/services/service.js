import ImageKit from 'imagekit';
import dotenv from 'dotenv';
dotenv.config();

const imageKit = new ImageKit({
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

const uploadFile = async (buffer, originalname) => {
    const result = await imageKit.upload({
        file: buffer.toString('base64'),
        fileName: originalname,
    })
    return result;
}

export default uploadFile;