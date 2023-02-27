import React, { useState, useEffect } from "react";
import {Card, Form, Row, Col, Button, Container } from 'react-bootstrap';
import {BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import Home from "./components/Home";
import Recomendation from "./components/Recomendation";
import Result from "./components/Result";
import Signup from "./components/Signup";
import Login from "./components/Login";
// import "./App.css";

function App() {
	// const [data, setdata] = useState({
	// 	name: "",
	// 	age: 0,
	// 	date: "",
	// 	programming: "",
	// });

//   const [sum, setSum] = useState({
		
// 	name: "Harish"
		
// 	});
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

//   useEffect(() => {
// 		fetch("/sum").then((res) =>
// 			res.json().then((sum) => {
// 				setSum({
// 					name: sum.Name
					
				
// 				});
// 			})
// 		);
// 	}, []);

	const marginTop = {marginTop:"20px"};

	return (


		<Router>
        <Container>
             <Row>
                <Col lg={12} style={marginTop}>
                    
                    <Routes>
                    {/* {!loading && <Route exact path="/login" element={!user ? <LoginFirebase /> : <Admin />} />} */}
                        <Route path="/home" element={<Home/>}/>
                        {/* <Route path="/register" element={<Registration id={dataId} setDataId={setDataId}/>}/> */}
                        {/* <Route path="/login" element={<LoginForm/>}/> */}
                        <Route path="/result" element={<Result/>}/>
                        <Route path="/recomendation" element={<Recomendation/>}/>
						<Route path="/" element={<Navigate to="/login" />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						{/* <Route exact path="/admin" element={<Admin />} /> */}
						{/* <Route exact path="/file" element={<File />} /> */}
                        {/* <Route path="/list" element={<Candidate getDataId={getDataIdHandler}/>}/> */}
                        {/* <Route path="/edit/" element={<Registration/>}/> */}
                        {/* <Route path="/register" element={<Update id={dataId} setDataId={setDataId}/>}/> */}
                    {/* {!user &&
                        // <Route exact path="/signup" element={<Signup />} />
                    } */}
                    {/* <Route path="*" element={<Navigate replace to="/login" />} /> */}
                    </Routes>
                </Col>
            </Row>
        </Container>
        {/* <Footer/> */}
    </Router>

		
		



		
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

export default App;
