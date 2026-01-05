import multer from 'multer';
import path from 'path';
import fs from 'fs';

// Ensure the uploads directory exists
const uploadDir = path.join(process.cwd(), "uploads");

// Create uploads directory if it doesn't exist
if(!fs.existsSync(uploadDir)){
    fs.mkdirSync(uploadDir);
}

// Configure multer storage
const storage = multer.diskStorage({
    destination: (_req, _file, cb) => {
        cb(null, uploadDir);
    },
    filename: (_req, file, cb) => {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        const ext = path.extname(file.originalname);
        cb(null, file.fieldname + '-' + uniqueSuffix + ext);
    }
})

function imageFileFilter(
    _req: any,
    file: Express.Multer.File,
    cb: multer.FileFilterCallback
){
    if(/^image\//.test(file.mimetype)){
        cb(null, true);
    }else{
        cb(new Error("Only image files are allowed!"));
    }
}

export const upload = multer({
    storage: storage,
    fileFilter: imageFileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // 5 MB limit
});

export default upload;