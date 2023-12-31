import { useLoaderData } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import { FormRow, FormRowSelect, SubmitBtn } from '../../components';
import customFetch from '../../utils/axios';
import { useQuery } from '@tanstack/react-query';

const singleJobQuery = (id) => {
  return {
    queryKey: ['job', id],
    queryFn: async () => {
      const { data } = await customFetch.get(`/jobs/${id}`);
      return data;
    },
  };
};
export const loader =
  (queryClient) =>
  async ({ params }) => {
    try {
      await queryClient.ensureQueryData(singleJobQuery(params.id));
      return params.id;
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return redirect('/dashboard/all-jobs');
    }
  };
export const action =
  (queryClient) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);

    try {
      await customFetch.patch(`/jobs/${params.id}`, data);
      queryClient.invalidateQueries(['jobs']);
      queryClient.invalidateQueries(['job']);
      toast.success('Job edited successfully.');
      return redirect('/dashboard/all-jobs');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const EditJob = () => {
  const id = useLoaderData();
  const {
    data: { job },
  } = useQuery(singleJobQuery(id));

  return (
    <section className='rounded w-full bg-white pt-12 pb-16 px-8 shadow-md hover:shadow-xl'>
      <Form
        method='post'
        className='w-full max-w-full bg-white rounded-none p-0 m-0 transition-all duration-300 ease-in-out'
      >
        <h3 className='-mt-7 mb-2 md:my-0'>Edit Job</h3>
        <div className='grid gap-y-2 lg:grid-cols-2 items-center gap-x-4 xl:grid-cols-3'>
          {/* position */}
          <FormRow type='text' name='position' defaultValue={job.position} />
          {/* company */}
          <FormRow type='text' name='company' defaultValue={job.company} />
          {/* location */}
          <FormRow
            type='text'
            labelText='Job Location'
            name='jobLocation'
            defaultValue={job.jobLocation}
          />
          {/* job status */}
          <FormRowSelect
            name='jobStatus'
            labelText='Job Status'
            defaultValue={job.jobStatus}
            list={Object.values(JOB_STATUS)}
          />
          {/* job type */}
          <FormRowSelect
            name='jobType'
            labelText='Job Type'
            defaultValue={job.jobType}
            list={Object.values(JOB_TYPE)}
          />
          {/* submit button */}
          <div className='gap-x-4 self-end mt-2 lg:mt-0'>
            <SubmitBtn text={'Save Changes'} />
          </div>
        </div>
      </Form>
    </section>
  );
};
export default EditJob;
