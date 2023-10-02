import { Link, NavLink } from 'react-router-dom';
import main from '../assets/images/main.svg';
import { Logo } from '../components';

const Landing = () => {
  return (
    <main className='block bg-gradient-to-t from-primary-50 to-primary-100 overflow-x-hidden'>
      <header className='w-fluid max-w-6xl my-0 mx-auto h-24 flex items-center'>
        <Logo classes={'w-44 md:w-56 lg:w-64'} />
        <nav className='ml-auto'>
          <ul className='flex items-center mx-auto justify-between space-x-4 text-gray-600'>
            <li>
              <NavLink to={'/register'}>
                <h5
                  className={
                    'hover:text-primary-500 transition-all duration-300 ease-in-out'
                  }
                >
                  Register
                </h5>
              </NavLink>
            </li>
            <li>
              <NavLink to={'/register'}>
                <h5
                  className={
                    'hover:text-primary-500 transition-all duration-300 ease-in-out'
                  }
                >
                  Login
                </h5>
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <div className='w-fluid max-w-6xl my-0 mx-auto min-h-page grid items-center -mt-12 lg:grid grid-cols-2 gap-x-12'>
        <div className='w-inherit'>
          <h1 className='font-bold'>
            Companion for <span className='text-primary-500'>Job Seekers</span>
          </h1>
          <p className='text-gray-600'>
            Here you can track your job applications and track your application
            process. Find a job you love, and you'll never have to work again.
            Good luck!
          </p>
          <Link
            to={'/register'}
            className='btn bg-primary-500 text-white text-xl/8 px-5 mt-12'
          >
            Get Started
          </Link>
        </div>
        <img
          src={main}
          alt='job hunt'
          className='w-full object-cover ml-16 hidden lg:block'
        />
      </div>
    </main>
  );
};
export default Landing;
