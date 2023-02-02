import React, { useState, useEffect } from "react";
import {Card, Form, Row, Col, Button, Container, FormControl } from 'react-bootstrap';
// import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import "./styleResult.css";

function Recomendation() {
	

	return (
        <div>
            
            <div className="header">
                <h1 >Image classification Model</h1>
            </div>
            <Card style={{ backgroundColor: "rgba(0,0,0,0.1)"}}>
                <Card.Header>
                    <p className = "heading">Recommended Fretilizres</p>
                </Card.Header>
                <Card.Body>
                    <div className = "headingBody">
                        <p>This is Balasubramaniam</p>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <p style={{color : "rgb(252, 247, 153)"}}>Note:</p>
                </Card.Footer>
            </Card>
            
        </div>

        
	);
}

export default Recomendation;
