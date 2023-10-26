import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';
import { redirect } from 'react-router-dom';

export const action = async ({ params }) => {
  try {
    await customFetch.delete(`/jobs/${params.id}`);
    toast.success('Job deleted');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
  return redirect('/dashboard/all-jobs');
};
const DeleteJob = () => {
  return <></>;
};
export default DeleteJob;
