import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import Job from '../models/JobModel.js';
import cloudinary from 'cloudinary';
import { formatImage } from '../middleware/multerMiddleware.js';

export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};
export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  res.status(StatusCodes.OK).json({ users, jobs });
};
export const updateUser = async (req, res) => {
  // Create a copy of the request body and remove unnecessary properties
  const newUser = { ...req.body };
  delete newUser.password;
  delete newUser.role;

  // If a file is uploaded, format it and upload it to Cloudinary
  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }

  // Update the user in the database with the new user information
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  // If a file was uploaded and the user had an avatar, delete the old avatar from Cloudinary
  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }

  // Send a response with a success message
  res.status(StatusCodes.OK).json({ msg: 'updated user' });
};
