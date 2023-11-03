import { FormRow, FormRowSelect, SubmitBtn } from '../../components';
import { useOutletContext } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../../utils/axios';

export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await customFetch.post('/jobs', data);
      queryClient.invalidateQueries(['jobs']);
      toast.success('Job added successfully');
      return redirect('/dashboard/all-jobs');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const AddJob = () => {
  const { user } = useOutletContext();

  return (
    <section className='rounded w-full bg-white pt-12 pb-16 px-8 shadow-md hover:shadow-xl'>
      <Form
        method='post'
        className='w-full max-w-full bg-white rounded-none p-0 m-0 transition-all duration-300 ease-in-out'
      >
        <h3 className='-mt-7 mb-2 md:my-0'>Add Job</h3>
        <div className='grid gap-y-2 lg:grid-cols-2 items-center gap-x-4 xl:grid-cols-3'>
          {/* position */}
          <FormRow type='text' name='position' />
          {/* company */}
          <FormRow type='text' name='company' />
          {/* location */}
          <FormRow
            type='text'
            labelText='Job Location'
            name='jobLocation'
            defaultValue={user.location}
          />
          {/* job status */}
          <FormRowSelect
            name='jobStatus'
            labelText='Job Status'
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
          />
          {/* job type */}
          <FormRowSelect
            name='jobType'
            labelText='Job Type'
            defaultValue={JOB_TYPE.FULL_TIME}
            list={Object.values(JOB_TYPE)}
          />
          {/* submit button */}
          <div className='gap-x-4 self-end mt-2 lg:mt-0'>
            <SubmitBtn text={'Submit'} />
          </div>
        </div>
      </Form>
    </section>
  );
};
export default AddJob;
