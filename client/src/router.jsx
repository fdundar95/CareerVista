import { createBrowserRouter } from 'react-router-dom';
import {
  AddJob,
  AllJobs,
  Profile,
  SharedLayout,
  Stats,
} from './pages/dashboard';
import { Root, Landing, Error, Register, ProtectedRoute } from './pages';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        element: (
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
        ),
        children: [
          { index: true, element: <Stats /> },
          { path: 'all-jobs', element: <AllJobs /> },
          { path: '/add-job', element: <AddJob /> },
          { path: '/profile', element: <Profile /> },
        ],
      },
      {
        path: '/landing',
        element: <Landing />,
      },
      {
        path: '/register',
        element: <Register />,
      },
    ],
  },
]);
