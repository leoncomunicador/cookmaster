const multer = require('multer');
const { resolve } = require('path');

// const changeImage = () => {
//   const updateImage = resolve(__dirname, '..', 'uploads');
//   const storage = multer.diskStorage({
//     destination: (_req, _file, callback) => {
//       callback(null, `${updateImage}`);
//     },
//     filename: (req, file, callback) => {
//       callback(null, `${req.params.id}.jpeg`);
//     },
//   });
//   const upload = multer({ storage });
//   return upload.single('image');
// };

const imageUpload = () => {
const uploadPath = resolve(__dirname, '..', 'uploads');
const storage = multer.diskStorage({
destination: (_req, _file, callback) => callback(null, `${uploadPath}`),
filename: (req, _file, callback) => callback(null, `${req.params.id}.jpeg`),
});
const upload = multer({ storage });
return upload.single('image');
};

module.exports = { imageUpload }; 

module.exports = {
  imageUpload,
};
