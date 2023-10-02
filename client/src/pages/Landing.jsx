import { Link } from 'react-router-dom';
import main from '../assets/images/main.svg';
import { Logo } from '../components';

const Landing = () => {
  return (
    <main className='block'>
      <nav className='w-fluid max-w-6xl my-0 mx-auto h-24 flex items-center'>
        <Logo />
      </nav>
      <div className='w-fluid max-w-6xl my-0 mx-auto min-h-page grid items-center -mt-12 lg:grid grid-cols-2 gap-x-12'>
        <div className='w-inherit'>
          <h1 className='font-bold'>
            Job <span className='text-primary-500'>Tracking</span> App
          </h1>
          <p className='text-gray-600'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia
            magni pariatur, provident molestiae distinctio porro quasi cumque
            aliquam laborum alias.
          </p>
          <Link
            to={'/register'}
            className='btn bg-primary-500 text-white text-xl/8 px-5 mt-6'
          >
            Login/Register
          </Link>
        </div>
        <img
          src={main}
          alt='job hunt'
          className='w-full object-cover hidden lg:block'
        />
      </div>
    </main>
  );
};
export default Landing;
