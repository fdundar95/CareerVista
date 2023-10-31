import { createContext, useContext } from 'react';
import { JobsContainer, SearchContainer } from '../../components';
import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import customFetch from '../../utils/axios';

export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries(new URL(request.url).searchParams);
    const { data } = await customFetch.get('/jobs', { params });
    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AllJobsContext = createContext();

const AllJobs = () => {
  const { data, searchValues } = useLoaderData();
  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;
