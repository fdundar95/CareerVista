import { FormRow, Logo } from '../components';
import { toast } from 'react-toastify';
import { Form, redirect, Link } from 'react-router-dom';
import SubmitBtn from '../components/SubmitBtn';
import customFetch from '../utils/axios';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration successful');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  return (
    <section className='min-h-screen grid items-center'>
      <Form
        method='post'
        className='max-w-sm w-fluid py-8 px-10 my-12 mx-auto bg-white rounded shadow-md pad border-t-4 border-solid border-primary-500 transition-all duration-300 ease-in-out hover:shadow-xl'
      >
        <Logo classes={'mb-6 mx-auto block'} />
        <h3 className='text-center'>Register</h3>
        {/* name field */}
        <FormRow type='text' name='name' />
        {/* last name field */}
        <FormRow type='text' name='lastName' labelText={'Last Name'} />
        {/* location field */}
        <FormRow type='text' name='location' />
        {/* email field */}
        <FormRow type='email' name='email' />
        {/* password field */}
        <FormRow type='password' name='password' />
        <SubmitBtn />
        <p className='m-0 mt-4 text-center'>
          Already a member?
          <Link
            to={'/login'}
            className='bg-transparent border-transparent text-primary-500 cursor-pointer tracking-wider'
          >
            {' '}
            Login
          </Link>
        </p>
      </Form>
    </section>
  );
};
export default Register;
