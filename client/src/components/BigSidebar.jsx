import NavLinks from './NavLinks';
import Logo from '../components/Logo';
import { useSelector } from 'react-redux';

const BigSidebar = () => {
  const { isSidebarOpen } = useSelector((store) => store.user);
  return (
      <aside className="hidden lg:block shadow-sidebar">
        <div
            className={
              isSidebarOpen
                  ? 'bg-white min-h-screen h-full w-64 -ml-64 transition-all duration-300 ease-in-out'
                  : 'bg-white min-h-screen h-full w-64 ml-0 transition-all duration-300 ease-in-out'
            }
        >
          <div className="sticky top-0 ">
            <header className="h-24 flex items-center pl-10">
              <Logo/>
            </header>
            <NavLinks
                classes={'pl-10 hover:pl-12 hover:bg-gray-50 hover:text-gray-900'}
            />
          </div>
        </div>
      </aside>
  );
};
export default BigSidebar;
