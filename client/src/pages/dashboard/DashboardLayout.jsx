import {
  Outlet,
  redirect,
  useNavigate,
  useNavigation,
  useLocation,
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
import { useQuery } from '@tanstack/react-query';

const userQuery = {
  queryKey: ['user'],
  queryFn: async () => {
    const { data } = await customFetch.get('/users/current-user');
    return data;
  },
};

export const loader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    return redirect('/');
  }
};

const DashboardContext = createContext();

const DashboardLayout = ({ queryClient }) => {
  const { user } = useQuery(userQuery)?.data;
  const navigate = useNavigate();
  const navigation = useNavigation();
  const isPageLoading = navigation.state === 'loading';
  const location = useLocation();
  const [showSidebar, setShowSidebar] = useState(false);
  const [isAuthError, setIsAuthError] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate('/');
    await customFetch.get('/auth/logout');
    queryClient.invalidateQueries();
    toast.success('Logged out successfully');
  };
  // Intercept the response errors and handle the 401 unauthorized status
  customFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        setIsAuthError(true);
      }
      return Promise.reject(error);
    }
  );
  // Handle the authentication error by logging out the user
  useEffect(() => {
    if (!isAuthError) return;
    logoutUser();
  }, [isAuthError]);

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
              {isPageLoading && location.pathname !== '/dashboard/all-jobs' ? (
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
