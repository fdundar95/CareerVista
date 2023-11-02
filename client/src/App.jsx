import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AddJob,
  AllJobs,
  Profile,
  DashboardLayout,
  Stats,
  EditJob,
  Admin,
} from './pages/dashboard';
import { Error, Landing, Register, Login, RootLayout } from './pages';
import ErrorElement from './components/ErrorElement';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as addJobAction } from './pages/dashboard/AddJob';
import { action as editJobAction } from './pages/dashboard/EditJob';
import { action as deleteJobAction } from './pages/dashboard/DeleteJob';
import { action as profileAction } from './pages/dashboard/Profile';
import { loader as editJobLoader } from './pages/dashboard/EditJob';
import { loader as dashboardLoader } from './pages/dashboard/DashboardLayout';
import { loader as allJobsLoader } from './pages/dashboard/AllJobs';
import { loader as adminLoader } from './pages/dashboard/Admin';
import { loader as statsLoader } from './pages/dashboard/Stats';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: 'register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: 'login',
        element: <Login />,
        action: loginAction(queryClient),
      },
      {
        path: 'dashboard',
        element: <DashboardLayout queryClient={queryClient} />,
        loader: dashboardLoader(queryClient),
        children: [
          {
            index: true,
            element: <Stats />,
            errorElement: <ErrorElement />,
            loader: statsLoader(queryClient),
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
            loader: allJobsLoader(queryClient),
            errorElement: <ErrorElement />,
          },
          {
            path: 'add-job',
            element: <AddJob />,
            action: addJobAction(queryClient),
          },
          {
            path: 'profile',
            element: <Profile />,
            action: profileAction(queryClient),
          },
          {
            path: 'edit-job/:id',
            element: <EditJob />,
            action: editJobAction(queryClient),
            loader: editJobLoader(queryClient),
          },
          { path: 'admin', element: <Admin />, loader: adminLoader },
          { path: 'delete-job/:id', action: deleteJobAction(queryClient) },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
      <ToastContainer
        position='top-center'
        autoClose={2500}
        style={{ textTransform: 'capitalize' }}
      />
    </QueryClientProvider>
  );
}

export default App;
