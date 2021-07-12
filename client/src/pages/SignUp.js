import React from 'react'
import { Form, Button } from 'react-bootstrap';
import './style.css';
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
       <div className='form-container'>
       <Form className='login-form'>
           <h1>Sign Up</h1>
          <Form.Group className='mb-4' controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control type='text' placeholder='Enter Name' />
          </Form.Group>
          <Form.Group className='mb-4' controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className='mb-4' controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className='mb-4' controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
          <Button variant="secondary" type="submit">
            Submit
          </Button>
          <p>Already have an account? <Link to= '/login'>Login</Link></p>
        </Form>
        </div>
    )
}

export default SignUp