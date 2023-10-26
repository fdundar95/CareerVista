import { FaBriefcase, FaCalendarAlt, FaLocationArrow } from 'react-icons/fa';
import { Link, Form } from 'react-router-dom';
import JobInfo from './JobInfo';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
dayjs.extend(advancedFormat);

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  jobStatus,
}) => {
  const date = dayjs(createdAt).format('MMM Do, YYYY');
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
            className={`rounded capitalize tracking-wider text-center w-24 h-7 mt-2 ${jobStatus}`}
          >
            {jobStatus}
          </div>
        </div>
        <footer className='mt-4'>
          <div>
            <Link
              to={`../edit-job/${_id}`}
              className='btn text-white bg-primary-300/90 mr-2 tracking-wider cursor-pointer h-7 hover:bg-primary-700'
            >
              Edit
            </Link>
            <Form method='post' action={`../delete-job/${_id}`}>
              <button
                type='submit'
                className='btn bg-gray-200-200 text-red-400 tracking-wider cursor-pointer h-7 hover:bg-red-400 hover:text-red-50'
              >
                Delete
              </button>
            </Form>
          </div>
        </footer>
      </div>
    </article>
  );
};
export default Job;
