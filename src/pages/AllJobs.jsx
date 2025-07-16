import { toast } from 'react-toastify';
import { JobsContainer, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { useContext, createContext } from 'react';

export const loader = async ()=>{
  try{
    const {data} = await customFetch.get('/jobs');
    return {data}
  }catch(error){
    toast.error(error?.response?.date?.msg)
    return error;
  }
};

// CONTEXT
const AllJobsContext = createContext();

const AllJobs = () => {
  const {data} = useLoaderData()
  // PROVIDER
  return <AllJobsContext.Provider value={{data}}>
    <SearchContainer/>
    <JobsContainer/>
  </AllJobsContext.Provider>
}

// HOOK
export const useAllJobsContext = () => useContext(AllJobsContext);

export default AllJobs
