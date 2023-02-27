import React, { useState, useEffect } from "react";
import {Card, Form, Row, Col, Button, Container, FormControl, Table } from 'react-bootstrap';
// import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import "./styleResult.css";
import { useNavigate } from "react-router-dom";
import {logout,useAuth} from '../firebase';

function Result() {

	const navigate = useNavigate()
    const handleSubmit = () =>{
        navigate('/recomendation')
        console.log("HI");
    }
    const bt={margin:'0px 30px 0px 30px'}
    function Logout(){
        logout();
        localStorage.clear();
        navigate("/login")
        
      }

	return (
        <div>
             <div align='right'>
                    <Button size='sm' onClick={() => {Logout()}} style={bt} variant="outline-primary">Logout</Button>
                </div>
            <div className = "second-main" >
            <nav>
                <div style = {{"padding-right": "2%"}} className = "main-nav">
                    <p><a href ="/">HomePage</a></p>                
                </div>
               
            </nav>
            <div className = "header">
                <row style = {{"width": "100%" , "display": "flex", "justify-content": "center"}}>
                    <h3 className="header-text">Uploaded Image</h3>
                </row>
                <row style = {{"width": "100%" , "display": "flex", "justify-content": "center"}}>
                    <img className = "result-img" src='../components/download/' />
                </row>
            </div>

            <div className = "info">
            
                <row style = {{"width": "100%" , "display": "flex", "justify-content": "center"}}>
                    <h3 className = "header-text">Model Prediction</h3>
                </row>
                <row style = {{"width": "100%" , "display": "flex", "justify-content": "center"}}>
                    <Table className="table-bordered text-light table-custom">
                        <tr>
                            <th>Rank</th>
                            <th>className</th>
                            <th>Probability</th>
                            <th>Recommendation</th>
                        </tr>
                        <tr>
                            <td>1st</td>
                            <td>predictions.class1</td>
                            <td>predictions.prob1 %</td>
                            <td><form onSubmit={handleSubmit} method="post" >
                            <Button size="sm" variant="outline-info" type="submit">
						view
                        </Button>
                                </form></td>
                          </tr>
                           {/* <tr>
                            <td>2nd</td>
                            <td> predictions.className2 </td>                                                         
                            <td> predictions.prob2  %</td>                                                      
                        </tr>                                                                                                               
                        <tr>
                            <td>3rd</td>
                            <td> predictions.className3 </td>
                            <td> predictions.prob3  %</td>
                          </tr>  */}
                    </Table>
                </row>
            </div>
        </div>
            
        </div>

        
	);
}

export default Result;
