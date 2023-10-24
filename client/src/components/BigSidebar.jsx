import NavLinks from './NavLinks';
import Logo from '../components/Logo';
import { useDashboardContext } from '../pages/dashboard/DashboardLayout';

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();
  return (
    <aside className='hidden lg:block shadow-sidebar'>
      <div
        className={
          showSidebar
            ? 'bg-white min-h-screen h-full w-64 -ml-64 transition-all duration-300 ease-in-out'
            : 'bg-white min-h-screen h-full w-64 ml-0 transition-all duration-300 ease-in-out'
        }
      >
        <div className='sticky top-0 '>
          <header className='h-24 flex items-center pl-10'>
            <Logo />
          </header>
          <NavLinks
            classes={'pl-10 hover:pl-12 hover:bg-gray-50 hover:text-gray-900'}
            isBigSidebar
          />
        </div>
      </div>
    </aside>
  );
};
export default BigSidebar;
