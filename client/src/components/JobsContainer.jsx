import { useEffect } from 'react';
import Job from './Job';
import { useDispatch, useSelector } from 'react-redux';
import LoadingSpinner from './LoadingSpinner';
import { getAllJobs } from '../features/allJobs/allJobsSlice';
import PageBtnContainer from './PageBtnContainer';

const JobsContainer = () => {
  const {
    jobs,
    isLoading,
    page,
    totalJobs,
    numOfPages,
    search,
    searchStatus,
    searchType,
    sort,
  } = useSelector((store) => store.allJobs);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllJobs());
  }, [page, search, searchStatus, searchType, sort]);

  if (isLoading) {
    return (
        <div>
          <LoadingSpinner/>
        </div>
    );
  }

  if (jobs.length === 0) {
    return <h2 className="transform-none">No jobs to display...</h2>;
  }

  return (
      <section className="mt-16">
        <h5 className="font-bold">
          {totalJobs} job{jobs.length > 1 && 's'} found
        </h5>
        <div className="grid grid-cols-1 gap-y-8 lg:grid-cols-2 gap-4">
          {jobs.map((job) => {
            return <Job key={job._id} {...job} />;
          })}
        </div>
        {numOfPages > 1 && <PageBtnContainer/>}
      </section>
  );
};
export default JobsContainer;
