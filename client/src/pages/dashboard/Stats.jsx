import { useEffect } from 'react';
import {
  ChartsContainer,
  LoadingSpinner,
  StatsContainer,
} from '../../components';

const Stats = () => {
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
