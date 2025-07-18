import { FormRow,FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constant'
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

export const action = async ({request}) => {
  console
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try{
    await customFetch.post('/jobs',data);
    toast.success('JOB successfully created')
    return redirect('/dashboard/all-jobs');
  }catch(error){
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddJob = () => {
  const {user} = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'
  console.log(user);
  return <Wrapper>
    <Form method='post' className='form'>
      <h4 className='form-title'>add job</h4>
      <div className="form-center">
        <FormRow type='text' labelText='position' name='position'/>
        <FormRow type='text' labelText='company' name='company'/>
        <FormRow type='text' labelText='job location' name='jobLocation' defaultValue={user.location}/>
        <FormRowSelect labelText='job status' name='jobStatus' defaultValue={JOB_STATUS.PENDING} list={Object.values(JOB_STATUS)}/>
        <FormRowSelect labelText='job type' name='jobType' defaultValue={JOB_TYPE.FULL_TIME} list={Object.values(JOB_TYPE)}/>
        
        <button type='submit' className='btn btn-block form-btn' disabled={isSubmitting}>
          {isSubmitting?'submitting':'submit'}
        </button>
      </div>
    </Form>
  </Wrapper>
}

export default AddJob
