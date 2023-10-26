import { createBrowserRouter, RouterProvider } from 'react-router-dom';
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

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { action as addJobAction } from './pages/dashboard/AddJob';
import { action as editJobAction } from './pages/dashboard/EditJob';
import { action as deleteJobAction } from './pages/dashboard/DeleteJob';
import { loader as editJobLoader } from './pages/dashboard/EditJob';
import { loader as dashboardLoader } from './pages/dashboard/DashboardLayout';
import { loader as allJobsLoader } from './pages/dashboard/AllJobs';
import { loader as adminLoader } from './pages/dashboard/Admin';

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
        action: loginAction,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          { index: true, element: <Stats /> },
          { path: 'all-jobs', element: <AllJobs />, loader: allJobsLoader },
          { path: 'add-job', element: <AddJob />, action: addJobAction },
          { path: 'profile', element: <Profile /> },
          {
            path: 'edit-job/:id',
            element: <EditJob />,
            action: editJobAction,
            loader: editJobLoader,
          },
          { path: 'admin', element: <Admin />, loader: adminLoader },
          { path: 'delete-job/:id', action: deleteJobAction },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position='top-center'
        autoClose={2500}
        style={{ textTransform: 'capitalize' }}
      />
    </>
  );
}

export default App;
