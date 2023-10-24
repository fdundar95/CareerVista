import {
  Outlet,
  useLoaderData,
  redirect,
  useNavigate,
  useNavigation,
} from 'react-router-dom';
import { createContext, useContext, useEffect, useState } from 'react';
import {
  BigSidebar,
  Navbar,
  SmallSidebar,
  LoadingSpinner,
} from '../../components';
import customFetch from '../../utils/axios';
import { toast } from 'react-toastify';

export const loader = async () => {
  try {
    const { data } = await customFetch('/users/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
};

const DashboardContext = createContext();

const DashboardLayout = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate('/');
    await customFetch.get('/auth/logout');
    // queryClient.invalidateQueries();
    toast.success('Logged out successfully');
  };

  return (
    <DashboardContext.Provider
      value={{ user, logoutUser, toggleSidebar, showSidebar }}
    >
      <section>
        <main className='grid grid-cols-1 lg:grid-cols-auto-1fr'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='w-fluid my-0 mx-auto py-8 px-0 lg:w-11/12'>
              {isPageLoading ? (
                <LoadingSpinner />
              ) : (
                <Outlet context={{ user }} />
              )}
            </div>
          </div>
        </main>
      </section>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;
