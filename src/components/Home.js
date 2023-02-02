import React, { useState, useEffect } from "react";
import {Card, Form, Row, Col, Button, Container, FormControl, Table } from 'react-bootstrap';
// import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import "./style.css";

import Result from "./Result";
import { useNavigate } from "react-router-dom";

function Home() {
    const navigate = useNavigate()
	const [data, setdata] = useState({
		name: "",
		age: 0,
		date: "",
		programming: "",
	});

  const [sum, setSum] = useState({
		
	name: "Harish"
		
	});
	// useEffect(() => {
	// 	fetch("/data").then((res) =>
	// 		res.json().then((data) => {
	// 			setdata({
	// 				name: data.Name,
	// 				age: data.Age,
	// 				date: data.Date,
	// 				programming: data.programming,
	// 			});
	// 		})
	// 	);
	// }, []);

  useEffect(() => {
		fetch("/sum").then((res) =>
			res.json().then((sum) => {
				setSum({
					name: sum.Name
					
				
				});
			})
		);
	}, []);

    const handleSubmit = () =>{
        navigate('/result')
    }

    const submitDetails = (event) => {
        event.preventDefault();
        console.log("HI");
            
    }

	return (


<div >
		 
                        <div className="header">
                <h1 >Image classification Model</h1>
            </div>
           
                
            <div className="upload-section">
                <div className="upload-file">
                	<form onSubmit={handleSubmit} method="post" encType="multipart/form-data">
                    <Table>
                    <tr style={{display:"flex", flexDirection:'column'}}> 
                         <td><Form.Group  controlId="fromGridFile">
                            <Form.Control style={{"width" : "100%" , "height" : "100%" }} className={"bg-white text-dark"} type="file" name="file" autoComplete = "off" />
                            
                        </Form.Group></td>
                        <td style={{display:"flex", justifyContent:"center"}}><Button size="sm" variant="outline-primary" type="submit">
						Upload
                        </Button></td>
                          
                    </tr>		
                    </Table>
                    </form>
                </div>

                <div className="uploadOR">
                	<span>OR</span>
                </div>
                {/* <form method="post" action="/recommendation"><button class="buttonCase btn-success btn-sm">View</button></form> */}


                <div className="upload-link">
                <form onSubmit={handleSubmit} action="/Result" method="post" enctype="multipart/form-data">
                <Table>
                    <tr style={{display:"flex", flexDirection:'column'}}>
                         <td>

                         <Form.Group as={Col} controlId="fromGridLink">
                            <Form.Control style={{"width" : "100%" , "height" : "150%" }} className={"bg-white text-dark"} type="text" maxLength="1000" name="Link" autoComplete = "off" placeholder="Paste the image URL(not the site address)" />
                        </Form.Group></td>
                        <td style={{display:"flex", justifyContent:"center"}}><Button size="sm" variant="outline-primary" type="submit">
							Proceed
                        </Button>		
                    
                         </td>
                    </tr>
                    </Table>
                    </form>
                </div>

                <div className="header-content-sub">
                    <p style={{"fontSize" : "25px", "textAlign": "center", "marginTop": "15px", "color": "red"}} className="header-content-info">Error</p>
                </div>
            </div>


                <div className="footer">
                    <p style={{"fontSize" : "20px", "textAlign": "center","color": "white"}}>This Model create for the Disease classNameification for Agriculture</p>
                </div>
         

        </div>
    //  </div>



		
// 		<div classNameName="App">
// 			<header classNameName="App-header">
// 				<h1>React and flask</h1>
// 				{/* <p>{data.name}</p>
// 				<p>{data.age}</p>
// 				<p>{data.date}</p>
// 				<p>{data.programming}</p> */}

// <p>{sum.name}</p>
// 			</header>
// 		</div>
	// <div class="container-fluid bg-light text-dark">
        
	);
}

export default Home;
