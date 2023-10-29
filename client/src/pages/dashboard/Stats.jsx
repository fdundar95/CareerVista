import { toast } from 'react-toastify';
import {
  ChartsContainer,
  LoadingSpinner,
  StatsContainer,
} from '../../components';
import customFetch from '../../utils/axios';
import { useLoaderData, useNavigation } from 'react-router-dom';

export const loader = async () => {
  try {
    const response = await customFetch.get('/jobs/stats');
    return response.data;
  } catch (error) {
    return error;
  }
};

const Stats = () => {
  const navigation = useNavigation();
  const { userStats, monthlyApplications } = useLoaderData();
  const isLoading = navigation.state === 'loading';

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <>
      <StatsContainer userStats={userStats} />
      {monthlyApplications?.length > 0 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};
export default Stats;
