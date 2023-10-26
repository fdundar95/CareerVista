import links from '../utils/links';
import { NavLink } from 'react-router-dom';
import { useDashboardContext } from '../pages/dashboard/DashboardLayout';

const NavLinks = ({ classes, isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className='pt-8 flex flex-col'>
      {links.map((link) => {
        const { text, path, id, icon } = link;
        const { role } = user;

        if (path === 'admin' && role !== 'admin') {
          return;
        }

        return (
          <NavLink
            key={id}
            to={path}
            className={({ isActive }) =>
              isActive ? `nav-link ${classes} active` : `nav-link ${classes}`
            }
            onClick={isBigSidebar ? null : toggleSidebar}
          >
            <span className='text-2xl mr-4 grid place-items-center transition-all duration-300 ease-in-out hover:text-primary-500 icon'>
              {icon}
            </span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};
export default NavLinks;
