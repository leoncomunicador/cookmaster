const multer = require('multer');
const { resolve } = require('path');

const updateImage = () => {
  const pathImage = resolve(__dirname, '..', 'uploads');
  const storage = multer.diskStorage({
    destination: (_req, _file, callback) => {
      callback(null, `${pathImage}`);
    },
    filename: (req, file, callback) => {
      callback(null, `${req.params.id}.jpeg`);
    },
  });
  const upload = multer({ storage });
  return upload.single('image');
};

module.exports = {
  updateImage,
};
