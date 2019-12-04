import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-reflex/styles.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import {
  ReflexContainer,
  ReflexSplitter,
  ReflexElement
} from 'react-reflex'
 


class App extends Component {
	
  render() {
	
	const fakeimg = {
      height: "200px",
      background: "#aaa"
    };
	const container = {
      height: "200px",
      background: "#aaa"
    };
	
  return (
    <div className="App">
	{ /*
	 <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
	</header> 
	*/}
		<html lang="en">
		<head>
		  <title>Bootstrap Website Example</title>
		  <meta charset="utf-8"></meta>
		  <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
		  <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
		  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>		
		</head>
		<body>

		<div className="jumbotron text-center" style={{marginBottom: "0"}}>
		  <h1>My First Bootstrap Page</h1>
		  <p>Resize this responsive page to see the effect!</p> 
		</div>

		  <Navbar bg="dark" variant="dark">
			<Navbar.Brand href="#home">Navbar</Navbar.Brand>
			<Nav className="mr-auto">
			  <Nav.Link href="#home">Home</Nav.Link>
			  <Nav.Link href="#features">Features</Nav.Link>
			  <Nav.Link href="#pricing">Pricing</Nav.Link>
			</Nav>
			<Form inline>
			  <FormControl type="text" placeholder="Search" className="mr-sm-2" />
			  <Button variant="outline-info">Search</Button>
			</Form>
		  </Navbar>
		<br />

		<div className="container">
		  <div className="row">
			<div className="col-sm-4">
			  <h2>About Me</h2>
			  <h5>Photo of me:</h5>
			  <div style={fakeimg}>Fake Image</div>
			  <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
			  <h3>Some Links</h3>
			  <p>Lorem ipsum dolor sit ame.</p>
			    <ListGroup as="ul">
				  <ListGroup.Item as="li" active>Link 1</ListGroup.Item>
				  <ListGroup.Item as="li">Link 2</ListGroup.Item>
				  <ListGroup.Item as="li" disabled>Link 3</ListGroup.Item>
				  <ListGroup.Item as="li">Link 4</ListGroup.Item>
				</ListGroup>
			  
			</div>
			<div className="col-sm-8">
			  <h2>TITLE HEADING</h2>
			  <h5>Title description, Dec 7, 2017</h5>
			  <div style={fakeimg}>Fake Image</div>
			  <p>Some text..</p>
			  <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
			  
			  <h2>TITLE HEADING</h2>
			  <h5>Title description, Sep 2, 2017</h5>
			  <div style={fakeimg}>Fake Image</div>
			  <p>Some text..</p>
			  <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
			</div>
		  </div>
		</div>
		<div>
		<ReflexContainer orientation="vertical">

        <ReflexElement className="left-pane">
          <div className="pane-content">
            <label>
              Left Pane (resizable)
            </label>
          </div>
        </ReflexElement>

        <ReflexSplitter/>

        <ReflexElement className="right-pane"
          minSize="200"
          maxSize="800">
          <div className="pane-content">
            <label>
              Right Pane (resizable)
              <br/>
              <br/>
              minSize = 200px
              <br/>
              maxSize = 800px
            </label>
          </div>
        </ReflexElement>

      </ReflexContainer>
		</div>

		<div className="jumbotron text-center" style={{marginBottom: "0"}}>
		  <p>Footer</p>
		</div>

		</body>
		</html>

    </div>
  );
}
}

export default App;
