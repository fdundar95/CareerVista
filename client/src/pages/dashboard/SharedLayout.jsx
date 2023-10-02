import { Outlet } from 'react-router-dom';
import { BigSidebar, Navbar, SmallSidebar } from '../../components';

const SharedLayout = () => {
  return (
    <section>
      <main className='grid grid-cols-1 lg:grid-cols-auto-1fr'>
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className='w-fluid my-0 mx-auto py-8 px-0 lg:w-11/12'>
            <Outlet />
          </div>
        </div>
      </main>
    </section>
  );
};
export default SharedLayout;
