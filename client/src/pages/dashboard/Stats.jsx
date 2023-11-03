import {
  ChartsContainer,
  LoadingSpinner,
  StatsContainer,
} from '../../components';
import customFetch from '../../utils/axios';
import { useNavigation } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';

const statsQuery = {
  queryKey: ['stats'],
  queryFn: async () => {
    const response = await customFetch.get('/jobs/stats');
    return response.data;
  },
};

export const loader = (queryClient) => async () => {
  const data = await queryClient.ensureQueryData(statsQuery);
  return data;
};

const Stats = () => {
  const navigation = useNavigation();
  const { data } = useQuery(statsQuery);
  const { userStats, monthlyApplications } = data;
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
