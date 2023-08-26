import React, { useState } from 'react'
 import { Formik } from 'formik';
 import * as Yup from 'yup';
import { TextField } from '@mui/material';
import axios from 'axios';
import { $axios } from '../library/axios';


const Login = () => {

  const [error,setError]= useState(false);
  const [loading,setLoading]= useState(false);
  const [errorMessage,setErrorMessage]= useState('');


  return (


    <div style={{ 
        border:'',
        padding:"2rem",
        paddingTop:'1rem',
        backgroundColor:'lightgray',
        color:"red",
    flexDirection:'column',
    marginLeft:'6rem',
    justifyContent:"center",

    }}>

        <h2> Login Form</h2>
        <Formik 
    initialValues={{ email: '',password:'' }}
    validationSchema={Yup.object({
      email: Yup.string().email('Invalid email address').required('email is required'),
      password: Yup.string().trim().required('password is required'),
    })}
    onSubmit={async(values) => {
        console.log(values);
        try {
          setLoading(true);
            const response = await $axios.post("/user/login",values);
            console.log(response);
            const accessToken= response.data.accessToken;
            console.log(accessToken);
            localStorage.setItem('accesstoken',accessToken);
            
        } catch (error) {
          setError(true);
          setErrorMessage(error.message);
            console.log(error.message);
            
        }finally{
          setLoading(false);
        }
         
        
       

    }}
  >
    {formik => (
      <form onSubmit={formik.handleSubmit} style={{display:"flex",flexDirection:'column',gap:'1rem'}}>
      
       
        <TextField  label="Email" name='email'  {...formik.getFieldProps('email')}  />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
       
        <TextField  label="password" name='password'  {...formik.getFieldProps('password')}  />
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}


        <button style={{backgroundColor:'blue',color:'white'}} type="submit">Submit</button>
      </form>
    )}
  </Formik>

    </div>
  
    
  )
}

export default Login