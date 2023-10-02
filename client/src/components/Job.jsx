import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import JobInfo from './JobInfo';
import dayjs from 'dayjs';
import { deleteJob, setEditJob } from '../features/job/jobSlice';

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const dispatch = useDispatch();
    const date = dayjs(createdAt).format('MMM D, YYYY');
    return (
    <article className='bg-white rounded grid grid-rows-1fr-auto shadow-md'>
      <header className='py-4 px-6 border-b-gray-100 border-solid grid grid-cols-auto-1fr items-center'>
        <div className='w-16 h-16 grid items-center bg-primary-500 rounded text-2xl font-bold uppercase text-white mr-8'>
          <p className='mx-auto font-primary text-3xl'>{company.charAt(0)}</p>
        </div>
        <div>
          <h5 className='tracking-normal mb-1'>{position}</h5>
          <p className='m-0 capitalize text-gray-400 tracking-widest'>
            {company}
          </p>
        </div>
      </header>
      <div className='py-4 px-6'>
        <div className='grid grid-cols-1 gap-y-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2'>
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div
            className={`rounded capitalize tracking-wider text-center w-24 h-7 mt-2 ${status}`}
          >
            {status}
          </div>
        </div>
        <footer className='mt-4'>
          <div>
            <Link
              to={'/add-job'}
              onClick={() => {
                dispatch(
                  setEditJob({
                    editJobId: _id,
                    position,
                    company,
                    jobLocation,
                    jobType,
                    status,
                  })
                );
              }}
              className='btn text-white bg-primary-300/90 mr-2 tracking-wider cursor-pointer h-7 hover:bg-primary-700'
            >
              Edit
            </Link>
            <button
              type='button'
              onClick={() => {
                dispatch(deleteJob(_id));
              }}
              className='btn bg-gray-200-200 text-red-400 tracking-wider cursor-pointer h-7 hover:bg-red-400 hover:text-red-50'
            >
              Delete
            </button>
          </div>
        </footer>
      </div>
    </article>
  );
};
export default Job;
