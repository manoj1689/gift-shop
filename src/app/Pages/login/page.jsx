"use client"
import React from "react";
import Link from "next/link";
import Layout from "@/app/Layout/page"
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useSession,signIn,signOut } from "next-auth/react";

function login() {

  async function GoogleSignIn(){
    signIn('google',{callbackUrl:"http://localhost:3000"})
  }
  async function GoogleSignOut(){
    signOut({redirect: "/", callbackUrl: "http://localhost:3000"})
  }
  return (
    <>
     <Layout>
     <div>
     <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
        <Form.Text className="text-muted">
          We will never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="dark" type="button" onClick={GoogleSignIn}>
      sign in with google
      </Button>
      <Button variant="dark" type="button">
        sign in with github
      </Button >
      <Button variant="light" type="button" onClick={GoogleSignOut}>SignOut </Button>
    </Form>

     </div>
     Do not have account?
        <Link href="/Pages/register">register</Link> 

     </Layout>
      
     
    </>
  );
}

export default login;
