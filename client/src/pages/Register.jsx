import { useEffect, useState } from 'react';
import { FormRow, Logo } from '../components';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser, registerUser } from '../features/user/userSlice';
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
};

const Register = () => {
  const [values, setValues] = useState(initialState);
  const dispatch = useDispatch();
  const { isLoading, user } = useSelector((store) => store.user);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setValues({ ...values, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, isMember } = values;
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please fill out all fields');
      return;
    }
    if (isMember) {
      dispatch(loginUser({ email, password }));
      return;
    }
    dispatch(registerUser({ name, email, password }));
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  useEffect(() => {
    if (user) {
      navigate('/');
    }
  }, [user]);

  return (
    <section className='min-h-screen grid items-center'>
      <form
        onSubmit={handleSubmit}
        className='max-w-sm w-fluid py-8 px-10 my-12 mx-auto bg-white rounded shadow-md pad border-t-4 border-solid border-primary-500 transition-all duration-300 ease-in-out hover:shadow-xl'
      >
        <Logo classes={'mb-6 mx-auto block'} />
        <h3 className='text-center'>
          {values.isMember ? 'Login' : 'Register'}
        </h3>
        {/* name field */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* last name field */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='lastName'
            labelText={'Last Name'}
            // value={values.name}

            handleChange={handleChange}
          />
        )}
        {/* location field */}
        {!values.isMember && (
          <FormRow
            type='text'
            name='location'
            // value={values.name}

            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FormRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FormRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        <button
          type='submit'
          disabled={isLoading}
          className='btn bg-primary-500 text-white w-full mt-4 h-9 hover:bg-primary-700'
        >
          {isLoading ? 'Loading...' : 'Submit'}
        </button>
        <button
          type='button'
          disabled={isLoading}
          onClick={() => {
            dispatch(
              loginUser({ email: 'testUser@test.com', password: 'secret' })
            );
          }}
          className='btn bg-primary-300 text-white w-full mt-4 h-9 hover:bg-primary-700'
        >
          {isLoading ? 'Loading...' : 'Test User'}
        </button>
        <p className='m-0 mt-4 text-center'>
          {values.isMember ? 'Not a member yet? ' : 'Already a member? '}
          <button
            type='button'
            onClick={toggleMember}
            className='bg-transparent border-transparent text-primary-500 cursor-pointer tracking-wider'
          >
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </section>
  );
};
export default Register;
