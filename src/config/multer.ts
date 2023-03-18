import multer from 'multer'
import path from 'path'

const tmpFolder = path.resolve(__dirname, '..', 'uploads')

const multerConfig = multer.diskStorage({
    destination: tmpFolder,
    filename: (req, file, callback) => {
        const fileName = `${Date.now()}-${file.originalname}`
        return callback(null, fileName)
    }

})

export { multerConfig, tmpFolder }