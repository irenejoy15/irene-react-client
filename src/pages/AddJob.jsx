import { FormRow,FormRowSelect } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useOutletContext } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../../../utils/constant'
import { Form, useNavigation, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';

const AddJob = () => {
  const {user} = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === 'submitting'
  console.log(user);
  return <Wrapper>
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
  </Wrapper>
}

export default AddJob
