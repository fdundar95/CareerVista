import { FormRow, FormRowSelect } from '../../components';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { clearValues, createJob, editJob, handleChange, } from '../../features/job/jobSlice';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AddJob = () => {
  const { user } = useSelector((store) => store.user);
  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!position || !company || !jobLocation) {
      toast.error('Please Fill Out All Fields');
      return;
    }
    if (isEditing) {
      dispatch(
          editJob({
            jobId: editJobId,
            job: {
              position,
              company,
              jobLocation,
              jobType,
              status,
            },
            navigate,
          })
      );
      return;
    }

    dispatch(createJob({ position, company, jobLocation, jobType, status }));
  };

  useEffect(() => {
    if (!isEditing) {
      dispatch(handleChange({ name: 'jobLocation', value: user.location }));
    }
    return () => {
      dispatch(clearValues());
    };
  }, []);

  return (
      <section className="rounded w-full bg-white pt-12 pb-16 px-8 shadow-md hover:shadow-xl">
        <form className="w-full max-w-full bg-white rounded-none p-0 m-0 transition-all duration-300 ease-in-out">
          <h3 className="-mt-7 mb-2 md:my-0">
            {isEditing ? 'Edit Job' : 'Add Job'}
          </h3>
          <div className="grid gap-y-2 lg:grid-cols-2 items-center gap-x-4 xl:grid-cols-3">
            {/* position */}
            <FormRow
                type={'text'}
                name={'position'}
                value={position}
                handleChange={handleJobInput}
            />
            {/* company */}
            <FormRow
                type={'text'}
                name={'company'}
                value={company}
                handleChange={handleJobInput}
            />
            {/* location */}
            <FormRow
                type={'text'}
                labelText={'Job Location'}
                name={'jobLocation'}
                value={jobLocation}
                handleChange={handleJobInput}
            />
            {/* job status */}
            <FormRowSelect
                name={'status'}
                value={status}
                handleChange={handleJobInput}
                list={statusOptions}
            />
            {/* job type */}
            <FormRowSelect
                name={'jobType'}
                value={jobType}
                handleChange={handleJobInput}
                list={jobTypeOptions}
            />

            <div className="grid grid-cols-2 gap-x-4 self-end mt-2 lg:mt-0">
              <button
                  type="button"
                  onClick={() => {
                    dispatch(clearValues());
                  }}
                  className="btn w-full bg-gray-300 text-black h-9 hover:bg-primary-800 hover:text-white lg:mt-0"
              >
                Clear
              </button>
              <button
                  type="submit"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="btn w-full bg-primary-500 text-white h-9 hover:bg-primary-700 lg:mt-0"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
  );
};
export default AddJob;
