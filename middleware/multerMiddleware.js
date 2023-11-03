import multer from 'multer';
import DataParser from 'datauri/parser.js';
import path from 'path';

// Creating a storage object for multer to store the uploaded file in memory
const storage = multer.memoryStorage();

// Creating an upload object with the storage configuration
const upload = multer({ storage });

// Creating a new instance of the DataParser class
const parser = new DataParser();

export const formatImage = (file) => {
  const fileExtension = path.extname(file.originalname).toString();

  // Formatting the file using the DataParser instance and returning the formatted content
  return parser.format(fileExtension, file.buffer).content;
};

export default upload;
