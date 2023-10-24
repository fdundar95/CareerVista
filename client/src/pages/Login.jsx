import { FormRow, Logo } from '../components';
import { toast } from 'react-toastify';
import SubmitBtn from '../components/SubmitBtn';
import { Link, Form, redirect } from 'react-router-dom';
import customFetch from '../utils/axios';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/login', data);
    toast.success('Login successful');
    return redirect('/dashboard');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  return (
    <section className='min-h-screen grid items-center'>
      <Form
        method='post'
        className='max-w-sm w-fluid py-8 px-10 my-12 mx-auto bg-white rounded shadow-md pad border-t-4 border-solid border-primary-500 transition-all duration-300 ease-in-out hover:shadow-xl'
      >
        <Logo classes={'mb-6 mx-auto block'} />
        <h3 className='text-center'>Login</h3>
        <FormRow type='email' name='email' />
        <FormRow type='password' name='password' />
        <SubmitBtn />
        <button
          type='button'
          className='btn bg-primary-300 text-white w-full mt-4 h-9 hover:bg-primary-700'
          onClick={() => {
            console.log('demo user');
          }}
        >
          Explore the app
        </button>
        <p>
          Not a member yet?
          <Link
            to='/register'
            className='bg-transparent border-transparent text-primary-500 cursor-pointer tracking-wider'
          >
            {' '}
            Register
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Login;
