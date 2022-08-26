
import { Formik, Form } from 'formik';
import { v4 as uuidv4 } from "uuid";
import { TextField } from './TextField';
import * as Yup from 'yup';
import "./AddUser.scss"
import { Grid } from '@mui/material';
import { addData } from "../../store/slice/user";
import { useAppDispatch, useAppSelector } from '../../store/store';

export const AddUser = () => {
 
  const dispatch = useAppDispatch();
  // const formdata = useAppSelector((state) => state.user.formData);
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
    lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 charaters')
      .required('Password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Password must match')
      .required('Confirm password is required'),
  })
  return (
    <Formik
      initialValues={{
        id:uuidv4(),
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={validate}
      onSubmit={values => {
        console.log(values , "okokok")
        dispatch(addData(values))
      }}
    >
      {formik => (
        <div className='app'>
         
          <Form>
          <h1 className="my-4 font-weight-bold .display-4">Sign Up</h1>
          <Grid container columnSpacing={3}>
          <Grid md={6}>  <TextField label="First Name" name="firstName" type="text" /></Grid>
          <Grid md={6}>  <TextField label="last Name" name="lastName" type="text" /></Grid>
            </Grid>
            <Grid container columnSpacing={3}>
            <Grid md={6}>    <TextField label="Email" name="email" type="email" /></Grid>
            <Grid md={6}>  <TextField label="password" name="password" type="password" /></Grid>
            </Grid>
            <Grid container columnSpacing={3}>
            <Grid md={6}>  <TextField label="Confirm Password" name="confirmPassword" type="password" /></Grid>
            </Grid>
            <Grid container columnSpacing={3}>
           <Grid md={5.7}><button className="btn btn-dark mt-3" type="submit">Register</button></Grid> 
           <Grid md={5.7}>  <button className="btn btn-danger mt-3 ml-3" type="reset">Reset</button>
           </Grid>
            </Grid>
          </Form>
        </div>
      )}
    </Formik>
  )
}