import { Link } from 'react-router-dom';
import img from '../assets/images/not-found.svg';

const Error = () => {
  return (
    <main className='min-h-screen text-center flex items-center justify-center'>
      <div>
        <img
          src={img}
          alt='not found'
          className='w-fluid max-w-2xl block mb-8'
        />
        <h3 className='mb-2'>Ohh! Page Not Found</h3>
        <p className='mt-0 mb-2 text-gray-500'>
          We can't seem to find the page you're looking for
        </p>
        <Link to={'/'} className='text-primary-500 underline'>
          Back Home
        </Link>
      </div>
    </main>
  );
};
export default Error;
