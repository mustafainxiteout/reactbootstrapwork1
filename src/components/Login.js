import React from 'react'
import { Button, Container, Form, Image, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


function Login() {
    const navigate=useNavigate();

    const handleSubmit=()=>{
        localStorage.setItem('access_token', '12345678');
        navigate('/');
    }
  return (
    <section className='py-4 py-md-5 my-5'>
        <Container className='py-md-5'>
          <Row>
            <div className='col-md-6 text-center'>
              <Image className='img-fluid w-100' src='./login.svg' alt='login' />
            </div>
            <div className='col-md-5 col-xl-4 text-start'>
              <h2 className='display-6 fw-bold mb-4 mx-2 mb-md-5'>
                <span className='underline pb-1'>
                  <strong>Login</strong>
                  <br />
                </span>
              </h2>
              <Form onSubmit={handleSubmit}>
                <div className='mb-3'>
                  <input
                    className='shadow form-control'
                    type='email'
                    name='email'
                    placeholder='Email'
                  />
                </div>
                <div className='mb-3'>
                  <input
                    className='shadow form-control'
                    type='password'
                    name='password'
                    placeholder='Password'
                  />
                </div>
                <div className='mb-4 mb-md-5'>
                  <Button className='btn btn-primary shadow' type='submit'>
                    Log in
                  </Button>
                </div>
              </Form>
            </div>
          </Row>
        </Container>
      </section>
  )
}

export default Login