import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    AddJob,
    AllJobs,
    Profile,
    SharedLayout,
    Stats,
} from './pages/dashboard';
import { RootLayout, Landing, Error, Register, ProtectedRoute} from './pages';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
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


function App() {
  return <RouterProvider router={router} />
}

export default App
