import React from 'react'
import { Formik, Field, Form, ErrorMessage,useField } from 'formik';
 import * as Yup from 'yup';
 import ReactDOM from 'react-dom';
 import { Button } from '@mui/material';
 


 const MyTextInput = ({ label, ...props }) => {
  // useField() returns [formik.getFieldProps(), formik.getFieldMeta()]
  // which we can spread on <input>. We can use field meta to show an error
  // message if the field is invalid and it has been touched (i.e. visited)
  const [field, meta] = useField(props);
  return (
    <>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input className="text-input" {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </>
  );
};


 const MySelect = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
      {meta.touched && meta.error ? (
        <div className="error">{meta.error}</div>
      ) : null}
    </div>
  );
};



const Register = () => {
  return (
    <div>
         <Formik
       initialValues={{ 
        firstName: '',
        lastName: '', 
        email: '', 
        gender:'',
        dob:'', 
        role:'',
        password:'' }}
       validationSchema={Yup.object({

         firstName: Yup.string()
           .max(15, 'Must be 15 characters or less').min(3,'first name must be less then 3 character')
           .required('Required').trim(),
         lastName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('Required'),
         email: Yup.string().
                 email('Invalid email address').
                 required('email is required').min(5,'email must be 5 characters').max(55,'email must be atmost 55'),
         password: Yup.string().
            min(3,'password atleast be 3 character').
            trim(), 
         gender: Yup.string().required("Please choose any one gender").trim().oneOf(["male","female","preferNot"]) ,

         role: Yup.string().required("please select role").trim().oneOf(["buyer","seller"]),

         dob: Yup.date("must be valid date").required('date birth is required')

       })}
       onSubmit={(values) => {
        console.log(values)
       
       }}
     >
       <Form className='form'>
         <label htmlFor="firstName">First Name</label>
         <Field name="firstName" type="text" />
         <ErrorMessage name="firstName" />
 
         <label htmlFor="lastName">Last Name</label>
         <Field name="lastName" type="text" />
         <ErrorMessage name="lastName" />
 
         <label htmlFor="email">Email Address</label>
         <Field name="email" type="email" />
         <ErrorMessage name="email" />

         <label >Password</label>
         <Field name="password" type="password" />
         <ErrorMessage name="password" />

         <MySelect label="Choose gender" name="gender">
             <option value="">Select a gender</option>
             <option value="male">Male</option>
             <option value="female">Female</option>
             <option value="preferNot">PreferNotToSay</option>
            
           </MySelect>  

           
         <MySelect label="Choose Role" name="role">
             <option value="buyer">Buyer</option>
             <option value="seller">Seller</option>
            
            
           </MySelect>  

           <label >Dob</label>
         <Field name="dob" type='text' />
         <ErrorMessage name="dob" />




       
 
         <Button  type="submit" variant="contained">Register</Button>
        
       </Form>
     </Formik>


    </div>
  )
}

export default Register