import Job from '../models/JobModel.js';
import { StatusCodes } from 'http-status-codes';
import mongoose from 'mongoose';
import day from 'dayjs';

export const getAllJobs = async (req, res) => {
  // Extract search, jobStatus, jobType, and sort from req.query
  const { search, jobStatus, jobType, sort } = req.query;

  // Create a query object with the createdBy field set to req.user.userId
  const queryObject = {
    createdBy: req.user.userId,
  };

  // If search is present, add $or condition to the queryObject
  if (search) {
    queryObject.$or = [
      { position: { $regex: search, $options: 'i' } },
      { company: { $regex: search, $options: 'i' } },
    ];
  }

  // If jobStatus is present and not equal to 'all', add jobStatus condition to the queryObject
  if (jobStatus && jobStatus !== 'all') {
    queryObject.jobStatus = jobStatus;
  }

  // If jobType is present and not equal to 'all', add jobType condition to the queryObject
  if (jobType && jobType !== 'all') {
    queryObject.jobType = jobType;
  }

  // Define sort options
  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
    'a-z': 'position',
    'z-a': '-position',
  };

  // Get the sort key based on the sort parameter
  const sortKey = sortOptions[sort] || sortOptions.newest;

  // Setup pagination

  // Get page number from req.query, default to 1 if not present
  const page = Number(req.query.page) || 1;

  // Get limit from req.query, default to 10 if not present
  const limit = Number(req.query.limit) || 10;

  // Calculate the number of documents to skip based on page and limit
  const skip = (page - 1) * limit;

  // Find jobs based on the queryObject, sort them based on sortKey, skip the first skip documents, and limit the result to limit documents
  const jobs = await Job.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);

  // Count the total number of jobs based on the queryObject
  const totalJobs = await Job.countDocuments(queryObject);

  // Calculate the number of pages based on totalJobs and limit
  const numOfPages = Math.ceil(totalJobs / limit);

  // Send a JSON response with the totalJobs, numOfPages, currentPage, and jobs
  res
    .status(StatusCodes.OK)
    .json({ totalJobs, numOfPages, currentPage: page, jobs });
};

export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

export const getJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  res.status(StatusCodes.OK).json({ job });
};

export const updateJob = async (req, res) => {
  const updatedJob = await Job.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(StatusCodes.OK).json({ msg: 'job modified', job: updatedJob });
};

export const deleteJob = async (req, res) => {
  const removedJob = await Job.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ msg: 'job deleted', job: removedJob });
};

// This function retrieves statistics and monthly applications for a user
export const showStats = async (req, res) => {
  // Retrieve statistics for the user
  let stats = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } }, // Filter the documents based on the 'createdBy' field, which should match the 'userId' of the user making the request
    { $group: { _id: '$jobStatus', count: { $sum: 1 } } }, // Filter the documents based on the 'createdBy' field, which should match the 'userId' of the user making the request
  ]);

  // Reduce the stats array to an object with jobStatus as keys and count as values
  stats = stats.reduce((acc, curr) => {
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});

  // Set default values for each jobStatus if they are not present in the stats object
  const userStats = {
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  // Retrieve monthly applications for the user
  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } },
        count: { $sum: 1 },
      },
    },
    { $sort: { '_id.year': -1, '_id.month': -1 } },
    { $limit: 6 },
  ]);

  // Map the monthlyApplications array to an array of objects with date and count properties
  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      // Format the date as MMM YY
      const date = day()
        .month(month - 1)
        .year(year)
        .format('MMM YY');

      return { date, count };
    })
    .reverse();

  // Send the defaultStats and monthlyApplications as a JSON response
  res.status(StatusCodes.OK).json({ userStats, monthlyApplications });
};
