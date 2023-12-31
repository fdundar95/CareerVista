import { FaAlignLeft, FaCaretDown, FaUserCircle } from 'react-icons/fa';
import Logo from './Logo';
import { useDashboardContext } from '../pages/dashboard/DashboardLayout';
import { useState } from 'react';

const Navbar = () => {
  const { toggleSidebar, user, logoutUser } = useDashboardContext();
  const [showLogout, setShowLogout] = useState(false);

  return (
    <nav className='bg-white h-24 flex items-center content-center shadow-nav lg:sticky top-0'>
      <div className='mx-auto flex w-fluid items-center justify-between lg:w-11/12'>
        <button
          type='button'
          className='bg-transparent border-transparent text-3xl text-primary-500 cursor-pointer flex items-center bg-white'
          onClick={toggleSidebar}
        >
          <FaAlignLeft />
        </button>
        <div>
          <Logo classes={'flex items-center w-24 lg:hidden'} />
          <h3 className='hidden m-0 lg:block'>dashboard</h3>
        </div>
        <div className='relative'>
          <button
            type='button'
            className='btn bg-primary-400/90 text-primary-50 flex items-center content-center gap-y-0 gap-x-2 relative shadow-md'
            onClick={() => setShowLogout(!showLogout)}
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                alt='avatar'
                className='w-6 h-6 rounded-full block object-cover'
              />
            ) : (
              <FaUserCircle />
            )}
            {user?.name}
            <FaCaretDown />
          </button>
          <div
            className={`absolute top-10 left-0 w-full bg-primary-100 shadow-md p-2 text-center rounded ${
              showLogout ? 'visible' : 'invisible'
            }`}
          >
            <button
              type='button'
              className='bg-transparent border-transparent text-primary-500 tracking-wide capitalize cursor-pointer'
              onClick={logoutUser}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
