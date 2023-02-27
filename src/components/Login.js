// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import React, { Component,useState ,useEffect} from 'react';
import { login,useAuth,logout} from "../firebase";
import { Link, useNavigate} from "react-router-dom";
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { Grid ,Paper,TextField,Avatar} from '@mui/material';
import {Card, Form, Row, Col, Button, Container, FormControl, Table } from 'react-bootstrap';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import LockPersonIcon from '@mui/icons-material/LockPerson';
import KeyIcon from '@mui/icons-material/Key';
import {Formik} from 'formik';
import * as yup from 'yup';

function Login(){
    // const [Lemail, setLemail] = useState("");
    // const [Lpass, setLpass] = useState("");

    const user=useAuth();
    const navigate=useNavigate();

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

    async function handleLogin(values) {
        try {
          
          const userc=await login(values.email,values.password);
          localStorage.setItem('Auth', userc.user.uid)
          navigate('/home')
      } catch {
           alert("Error!");
        }   
    
    }


    useEffect(() => {
        let authToken = localStorage.getItem('Auth')
        // console.log(authToken);
        // console.log("hii")
        if (authToken) {
                navigate('/home')
        }
        
        if (!authToken) {
            navigate('/Login')
        }
    }, []);

    
    

   

    const pstyle={padding:30 ,height:'50%',width:'70%',margin:'40px auto'}
    const astyle={backgroundColor:'green'}

    
    
    return(
        // <div style={{backgroundColor:'#66bb6a'}}>
        // <Grid>
        //     <Paper elevation={10} style={pstyle}>
        //         <Grid align='center'>
        //         {/* <Avatar style={astyle}><LockOutlinedIcon/></Avatar> */}
        //         <h2>Signin</h2>
        //         </Grid>
        //         <TextField onChange={(event) => {setLemail(event.target.value);}} label='Email' id='outlined-basic' fullWidth/><br/><br/>
        //         <TextField onChange={(event) => {setLpass(event.target.value);}} label='Password'  type='password'id='outlined-basic' fullWidth/><br/><br/>
        //         <Button onClick={() => {handleLogin()}} type='submit' fullWidth>Sign In</Button>
                
        //     </Paper>
        // </Grid>
        // </div>
        // // style={{backgroundColor:'#43a047'}}
    <Formik
        initialValues={{email: "", password: ""}}
        validateOnMount={true}
        onSubmit={values => handleLogin(values)}
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
        <div >
        <Grid align='center' style={{color:'#fcf799', fontSize:'50px'}}>
        
            <h2 className='signh1'><LockPersonIcon style={{fontSize:'50px'}}/>Login</h2>
        </Grid>
        <Grid className="upload-file" style={pstyle}>
        <div className="signupstyle">
            {/* <Paper elevation={10} style={pstyle}> */}
            <Form.Group as={Col} controlId="fromGridLink">
            <Form.Control  className={"bg-white text-dark"}  type="text" label='Email' placeholder="Email address" 
            // onChange={(event) => {setLemail(event.target.value);}}
            onChange={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}/>
            {errors.email && touched.email && (
            <p style={{fontSize:20, color:"red", margin:10}}>{errors.email}</p>
          )}
            </Form.Group><br/><br/>
                {/* <TextField fontColor="white" onChange={(event) => {setRemail(event.target.value);}} label='Email' id='outlined-basic' fullWidth/> */}
                <Form.Group as={Col} controlId="fromGridLink">
                
                <Form.Control className={"bg-white text-dark"} label='Password'  type='password' placeholder="Password"
                // onChange={(event) => {setLpass(event.target.value);}}
                onChange={handleChange('password')}
                onBlur={handleBlur('password')}
                value={values.password}
            />
            {errors.password && touched.password && (
                        <p style={{fontSize:20, color:"red", margin:10}}>{errors.password}</p>
                    )}
            </Form.Group><br/><br/><br/>
            {/* <TextField className='textfield' onChange={(event) => {setRpass(event.target.value);}} label='Password'  type='password'id='outlined-basic' fullWidth/><br/><br/><br/> */}
                <div style={{display:"flex", justifyContent:"center"}}>    <Button size="sm" variant="outline-primary" type="submit" onClick={()=>{handleSubmit()}}><LockPersonIcon />Sign Up</Button></div>
                <br/><br/>
                <div style={{fontSize:'20px', color:'white'}}>New here?<Link to="/signup"> Sign Up</Link></div>
            {/* </Paper> */}
            </div>
        </Grid>
        </div>
        )}
        </Formik>

    );
}
export default Login;
