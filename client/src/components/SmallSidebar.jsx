import { FaTimes } from 'react-icons/fa';
import Logo from './Logo';
import { NavLinks } from '../components';
import { useDashboardContext } from '../pages/dashboard/DashboardLayout';

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <aside className='lg:hidden'>
      <div
        className={`fixed inset-0 bg-black/70 flex content-center items-center transition-all duration-300 ease-in-out ${
          showSidebar ? 'z-50 opacity-100' : '-z-10 opacity-0'
        }`}
      >
        <div className='bg-white mx-auto w-fluid rounded py-16 px-8 relative flex items-center flex-col h-[95vh} '>
          <button
            type='button'
            className='absolute top-3 left-3 bg-transparent border-transparent text-3xl text-red-900 pointer'
            onClick={toggleSidebar}
          >
            <FaTimes />
          </button>
          <header>
            <Logo />
          </header>
          <NavLinks />
        </div>
      </div>
    </aside>
  );
};
export default SmallSidebar;
