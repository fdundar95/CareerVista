import { useDispatch, useSelector } from 'react-redux';
import { showStats } from '../../features/allJobs/allJobsSlice';
import { useEffect } from 'react';
import {
  ChartsContainer,
  LoadingSpinner,
  StatsContainer,
} from '../../components';

const Stats = () => {
  const { isLoading, monthlyApplications } = useSelector(
    (store) => store.allJobs
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(showStats());
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <StatsContainer />
      {monthlyApplications.length > 0 && <ChartsContainer />}
    </>
  );
};
export default Stats;
