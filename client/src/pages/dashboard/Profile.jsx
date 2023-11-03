import FormRow from '../../components/FormRow';

import { Form, redirect, useOutletContext } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import { SubmitBtn } from '../../components';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const file = formData.get('avatar');
    if (file && file.size > 500000) {
      toast.error('Image size too large. Must be less than 0.5 MB');
      return null;
    }

    try {
      await customFetch.patch('/users/update-user', formData);
      toast.success('Profile updated successfully');
      queryClient.invalidateQueries(['user']);
      return redirect('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
    return null;
  };

const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;

  return (
    <section className='rounded w-full bg-white pt-12 pb-16 px-8 shadow-md hover:shadow-xl'>
      <Form
        className='w-full max-w-full bg-white rounded-none p-0 m-0 transition-all duration-300 ease-in-out'
        method='post'
        encType='multipart/form-data'
      >
        <h3 className='-mt-7 mb-2 md:my-0'>Profile</h3>
        <div className='grid gap-y-2 lg:grid-cols-2 items-center gap-x-4 xl:grid-cols-3'>
          {/* file input */}
          <div>
            <label
              htmlFor='image'
              className='mt-4 block text-sm mb-2 tracking-widest capitalize'
            >
              Select an image file (max 0.5 MB):
            </label>
            <input
              type='file'
              id='avatar'
              name='avatar'
              className='w-full py-1 px-3 rounded bg-gray-50 border-gray-200 border-2 h-9'
              accept='image/*'
            />
          </div>
          {/* name */}
          <FormRow type={'text'} name={'name'} defaultValue={name} />
          {/* last name */}
          <FormRow
            type={'text'}
            labelText={'last name'}
            name={'lastName'}
            defaultValue={lastName}
          />
          {/* email */}
          <FormRow type={'email'} name={'email'} defaultValue={email} />
          {/* location */}
          <FormRow type={'text'} name={'location'} defaultValue={location} />
          <div className='gap-x-4 self-end mt-2 lg:mt-0'>
            <SubmitBtn text={'Save Changes'} />
          </div>
        </div>
      </Form>
    </section>
  );
};
export default Profile;
