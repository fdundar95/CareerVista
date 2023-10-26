import { FaCalendarCheck, FaSuitcaseRolling } from 'react-icons/fa';
import { redirect, useLoaderData } from 'react-router-dom';
import customFetch from '../../utils/axios';
import { toast } from 'react-toastify';
import { StatItem } from '../../components';

export const loader = async ({ request }) => {
  try {
    const response = await customFetch.get('/users/admin/app-stats');
    return response.data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard');
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();

  return (
    <section className='grid gap-y-8 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 lg:gap-x-4'>
      <StatItem
        count={users || 0}
        title='Current Users'
        color='text-primary-500'
        border='border-primary-500'
        bcg='bg-primary-100'
        icon={<FaSuitcaseRolling className='text-primary-500 m-auto' />}
      />
      <StatItem
        count={jobs || 0}
        title='Total Jobs'
        color='text-yellow-500'
        border='border-yellow-500'
        bcg='bg-yellow-100'
        icon={<FaCalendarCheck className='text-yellow-500 m-auto' />}
      />
    </section>
  );
};
export default Admin;
