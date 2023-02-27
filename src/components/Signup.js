import { async } from '@firebase/util';
import { render } from '@testing-library/react';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Grid ,Paper,TextField,Avatar} from '@mui/material';
import React, { Component,useState,useEffect} from 'react';
import {Card, Form, Row, Col, Button, Container, FormControl, Table } from 'react-bootstrap';
import { signup,useAuth} from "../firebase";
import { green } from '@mui/material/colors';
import front from './front.jpg'
import "./style.css";
import { Link, useNavigate} from "react-router-dom";
import {Formik} from 'formik';
import * as yup from 'yup';

function Signup(){
    const currentUser = useAuth();
    // const [Remail, setRemail] = useState("");
    // const [Rpass, setRpass] = useState("");

    const navigate=useNavigate();
    const pstyle={padding:30 ,height:'50%', width:'70%',margin:'40px auto'}

    const loginSchema = yup.object().shape({
        email: yup
            .string()
            .email('Enter a valid email')
            .required('Email is required'),
        password: yup
            .string()
            .min(8, ({min}) => 'password must be atleast 8 characters')
            .required('password is required')
            .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
            'Must Contain One Uppercase, One Lowercase, One Number and One Special Case Character',),
        });
    

async function handleSignup(values) {
    try {
      await signup(values.email,values.password);
      navigate('/home')
  } catch {
       alert("Error!");
    }   
}


  

    return(

        <Formik
        initialValues={{email: "", password: ""}}
        validateOnMount={true}
        onSubmit={values => handleSignup(values)}
        validationSchema={loginSchema}>
        {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            touched,
            errors,
            isValid,
        }) => (
        // style={{backgroundColor:'#43a047'}}
        <div >
        <Grid align='center' style={{color:'#fcf799', fontSize:'50px'}}>
        
            <h2 className='signh1'><HowToRegIcon style={{fontSize:'55px'}}></HowToRegIcon>Register</h2>
        </Grid>
        <Grid className="upload-file" style={pstyle}>
        <div className="signupstyle">
            {/* <Paper elevation={10} style={pstyle}> */}
            <Form.Group as={Col}>
            <Form.Control  className={"bg-white text-dark"} type="text" label='Email' placeholder="Email address" 
            // onChange={(event) => {setRemail(event.target.value);}}
                    onChange={handleChange('email')}
                    onBlur={handleBlur('email')}
                    value={values.email}/>
                    {errors.email && touched.email && (
                    <p style={{fontSize:20, color:"red", margin:10}}>{errors.email}</p>
                  )}
            </Form.Group><br/><br/>
                {/* <TextField fontColor="white" onChange={(event) => {setRemail(event.target.value);}} label='Email' id='outlined-basic' fullWidth/> */}
                <Form.Group as={Col} >
                    <Form.Control className={"bg-white text-dark"} label='Password'  type='password'id='outlined-basic' placeholder="Password"
                        // onChange={(event) => {setRpass(event.target.value);}}
                        onChange={handleChange('password')}
                        onBlur={handleBlur('password')}
                        value={values.password}
                    />
                    {errors.password && touched.password && (
                        <p style={{fontSize:20, color:"red", margin:10}}>{errors.password}</p>
                    )}
                    
            </Form.Group><br/><br/><br/>
            {/* <TextField className='textfield' onChange={(event) => {setRpass(event.target.value);}} label='Password'  type='password'id='outlined-basic' fullWidth/><br/><br/><br/> */}
                <div style={{display:"flex", justifyContent:"center"}}>    <Button size="sm" variant="outline-primary" type="submit" onClick={()=>{handleSubmit()}}><HowToRegIcon />Sign Up</Button></div>
            {/* </Paper> */}
            <br/><br/>
                <div style={{fontSize:'20px', color:'white'}}>Already a User?<Link to="/login"> Sign In</Link></div>
            
            </div>
        </Grid>
        </div>
        )}
        </Formik>

);

}
export default Signup;