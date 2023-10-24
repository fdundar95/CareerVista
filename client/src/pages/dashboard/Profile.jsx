import FormRow from '../../components/FormRow';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    lastName: user?.lastName || '',
    location: user?.location || '',
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, lastName, location } = userData;

    if (!name || !email || !lastName || !location) {
      toast.error('Please fill out all fields');
      return;
    }
    dispatch(updateUser({ name, email, lastName, location }));
  };

  return (
    <section className='rounded w-full bg-white pt-12 pb-16 px-8 shadow-md hover:shadow-xl'>
      <form
        className='w-full max-w-full bg-white rounded-none p-0 m-0 transition-all duration-300 ease-in-out'
        onSubmit={handleSubmit}
      >
        <h3 className='-mt-7 mb-2 md:my-0'>Profile</h3>

        <div className='grid gap-y-2 lg:grid-cols-2 items-center gap-x-4 xl:grid-cols-3'>
          <FormRow
            type={'text'}
            name={'name'}
            value={userData.name}
            handleChange={handleChange}
          />
          <FormRow
            type={'text'}
            labelText={'last name'}
            name={'lastName'}
            value={userData.lastName}
            handleChange={handleChange}
          />
          <FormRow
            type={'email'}
            name={'email'}
            value={userData.email}
            handleChange={handleChange}
          />
          <FormRow
            type={'text'}
            name={'location'}
            value={userData.location}
            handleChange={handleChange}
          />
          <button
            type='submit'
            className='btn bg-primary-500 text-white h-9 mt-4 self-end w-full hover:bg-primary-700 xl:mt-0'
            disabled={isLoading}
          >
            {isLoading ? 'Please Wait...' : 'Save Changes'}
          </button>
        </div>
      </form>
    </section>
  );
};
export default Profile;
