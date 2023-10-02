import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AddJob, AllJobs, Profile, DashboardLayout, Stats, } from './pages/dashboard';
import { Error, Landing, ProtectedRoute, Register, RootLayout } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <Error/>,
    children: [
      {
        element: (
            <ProtectedRoute>
              <DashboardLayout/>
            </ProtectedRoute>
        ),
        children: [
          { index: true, element: <Stats/> },
          { path: 'all-jobs', element: <AllJobs/> },
          { path: '/add-job', element: <AddJob/> },
          { path: '/profile', element: <Profile/> },
        ],
      },
      {
        path: '/landing',
        element: <Landing/>,
      },
      {
        path: '/register',
        element: <Register/>,
      },
    ],
  },
]);

function App() {
  return (
      <>
        <RouterProvider router={router}/>
        <ToastContainer
            position="top-center"
            autoClose={2500}
            style={{ textTransform: 'capitalize' }}
        />
      </>
  );
}

export default App;
