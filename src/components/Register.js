import React from 'react'
import { Button, Container, Form, Image, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Register() {
  return (
    <section className="py-4 py-md-5 my-5">
        <Container className="py-md-5">
            <Row>
                <div className="col-md-6 text-center"><Image className="img-fluid w-100" src="./register.svg" alt="404"/></div>
                <div className="col-md-5 col-xl-4 text-center text-md-start">
                    <h2 className="display-6 fw-bold mb-4"><span className="underline pb-1"><strong>Sign up</strong></span></h2>
                    <Form method="post">
                        <div className="mb-3"><input className="shadow-sm form-control" type="text" name="name" required placeholder="Name"/></div>
                        <div className="mb-3"><input className="shadow-sm form-control" type="email" name="email"  required placeholder="Email"/></div>
                        <div className="mb-3"><input className="shadow-sm form-control" type="password" name="password"  required  placeholder="Password"/></div>
                        <div className="mb-3"><input className="shadow-sm form-control" type="password" name="password_repeat"  required placeholder="Repeat Password"/></div>
                        <div className="mb-5"><Button className="btn btn-primary shadow" type="submit">Create account</Button></div>
                        <p className="text-muted">Have an account? <Link to='/signin'>Log in&nbsp;<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icon-tabler-arrow-narrow-right">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <line x1="15" y1="16" x2="19" y2="12"></line>
                                    <line x1="15" y1="8" x2="19" y2="12"></line>
                                </svg></Link>&nbsp;</p>
                    </Form>
                </div>
            </Row>
        </Container>
    </section>
  )
}

export default Register