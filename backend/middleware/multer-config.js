const multer =require('multer');

const MIME_TYPES ={
'image/jpg': 'jpg',
'image/jpeg': 'jpg',
'image/png': 'png'
};

const storage = multer.diskStorage({
  destination: (req, res, callback) =>{
    callback(null, 'images');
  },
  filename: (req, file, callback) =>{
    const name =file.originalname.split(' ').json('_');
    const extension =MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});
multer.exports = multer({storage: storage}).single('image');