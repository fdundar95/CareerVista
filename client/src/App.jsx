import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  AddJob,
  AllJobs,
  Profile,
  DashboardLayout,
  Stats,
} from './pages/dashboard';
import {
  Error,
  Landing,
  ProtectedRoute,
  Register,
  Login,
  RootLayout,
} from './pages';

import { action as registerAction } from './pages/Register';
import { action as loginAction } from './pages/Login';
import { loader as dashboardLoader } from './pages/dashboard/DashboardLayout';

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
        path: '/register',
        element: <Register />,
        action: registerAction,
      },
      {
        path: '/login',
        element: <Login />,
        action: loginAction,
      },
      {
        path: '/dashboard',
        element: <DashboardLayout />,
        loader: dashboardLoader,
        children: [
          { index: true, element: <Stats /> },
          { path: 'all-jobs', element: <AllJobs /> },
          { path: 'add-job', element: <AddJob /> },
          { path: 'profile', element: <Profile /> },
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
