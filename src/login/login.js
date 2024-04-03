import React, { useState } from "react";
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import axios from "axios";
import "./loginStyle.css";

function Login() {
  //if they click login
  const [showLoginForm, setShowLoginForm] = useState(true);
  const [inputs, setInputs] = useState({});
  const [inputsLogin, setInputsLogin] = useState({});

  //When they successfully log in give a nice green success alert with Bootstrap 
  const [show, setShow] = useState(false);

if(show){
  return(
    <>
      <Alert show={show} variant="success">
        <Alert.Heading>Welcome</Alert.Heading>
        <p>
        Welcome! My name is Makayla and this is my AWS SA-C03 Exam Guide! I hope this helps you pass!
        </p>
        <hr />
        <div className="d-flex justify-content-end">
          <Button onClick={() => setShow(false)} variant="outline-success">
            Close me
          </Button>
        </div>
      </Alert>
    </>
  );
}


  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleChangeLogin = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputsLogin((values) => ({ ...values, [name]: value })); // Update inputsLogin
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Convert inputs object to JSON string
    const inputData = JSON.stringify(inputs);

    // Send the form data to the server
    axios
      .post("http://localhost/xampp/API/index.php", inputData, {
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
      })
      .then(function (response) {
        console.log(response);
        if (response.data=="1"){
          alert("Complete")
        }else{
        alert("The email may still exist in our database or there is some other problem with your credentials");
        }
      })
      .catch(function (error) {
        console.log(error);
        alert("Connection error.")
      });
  };

  //log in form
  //we will post the data inputted to then be compared to the data in our database
  const handleSubmitLogin = (event) => {
    event.preventDefault();

    // Convert inputs object to JSON string
    const inputData = JSON.stringify(inputsLogin);

    // Send the form data to the server
    axios
      .post("http://localhost/xampp/API/login.php", inputData, {
        headers: {
          "Content-Type": "application/json", // Set content type to JSON
        },
      })
      .then(function (response) {
        console.log(response.data);
        if (response.data=="1"){
          setShow(true);
          alert('Login Complete')
        }else{
          alert("Sorry, there is a problem with these credentials. ");
        }
        
      })
      .catch(function (error) {
        alert("There is a problem with connecting...")
        console.log(error);
      });
  };

  //change from showing the login form to the signup form
  const changeSignup = (event) => {
    if (showLoginForm) {
      setShowLoginForm(false);
    } else {
      setShowLoginForm(true);
    }
  };

  if (showLoginForm) {
    return (
      <div
        className={
          "background d-flex justify-content-center align-items-center"
        }
      >
        <div className={"p-2"}>
          <h3>Create an account</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                name="email"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Mobile:</label>
              <input
                type="text"
                name="mobile"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                name="password"
                className="form-control"
                onChange={handleChange}
              />
            </div>

            <div className={"save-button"}>
              <button type="submit" className="btn btn-primary">
                Save
              </button>
              <button onClick={changeSignup} className="btn btn-primary m-2">
                Back to Login
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  } else {
    return (
      <div
        className={
          "background d-flex justify-content-center align-items-center"
        }
      >
        <div className={"p-2"}>
          <h3>Login</h3>
          <form onSubmit={handleSubmitLogin}>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="text"
                name="email"
                className="form-control"
                onChange={handleChangeLogin}
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="text"
                name="password"
                className="form-control"
                onChange={handleChangeLogin}
              />
            </div>

            <div className={"save-button"}>
            
              <button type="submit" className="btn btn-primary m-2">
                Login
              </button>
              
              <button onClick={changeSignup} className="btn btn-primary">
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
