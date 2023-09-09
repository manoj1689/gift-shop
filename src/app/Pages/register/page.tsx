"use client"
import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Link from 'next/link';

function register() {
  
  

  return (
    <div>
      <Form >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text"  required name="name" placeholder="Enter name"  value={name} onChange={handleChange}/>
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" required name="email" placeholder="Enter email" value={email} onChange={handleChange}/>
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label> Enter Password</Form.Label>
        <Form.Control type="password" required name="password" placeholder="Enter Password" value={password} onChange={handleChange} />
      </Form.Group>
     

    
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    
    </Form>
    Do you have account?
        <Link href="/Pages/login">login</Link> 
    </div>
  )
}

export default register