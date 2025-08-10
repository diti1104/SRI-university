import React from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import vellorelocation from '../../utils/images/Vellore-location.jpg';
import amravatiLocation from '../../utils/images/amravati-location.jpg';
import bhopalLocation from '../../utils/images/bhopal-location.jpg';

function Contact() {
  return (
    <div className='contact-page'>
      {/* Header */}
      <header className='height-75'>
        <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
          <h1 className='text-center fw-semibold'>Get In Touch</h1>
          <p className='text-center w-75 mb-5'>
            Life at Sri University is vibrant and enriching, offering students opportunities to grow academically, professionally, and personally.
            With a supportive community and world-class resources, we help every learner achieve their highest potential.
          </p>
        </div>
      </header>

      {/* Contact Form */}
      <div className='container my-5 d-flex justify-content-center'>
        <Form id='contact-form'>
          <Row className='mb-3'>
            <Col sm={12} md={6} className='mb-3 mb-md-0'>
              <Form.Label>First Name</Form.Label>
              <Form.Control placeholder='First name' />
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Last Name</Form.Label>
              <Form.Control placeholder='Last name' />
            </Col>
          </Row>

          <Form.Group className='mb-3'>
            <Form.Label>Email</Form.Label>
            <Form.Control type='email' placeholder='Enter email' />
            <Form.Text className='text-muted'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className='mb-3'>
            <Form.Label>Address</Form.Label>
            <Form.Control placeholder='Your address' />
          </Form.Group>

          <Row className='mb-3'>
            <Col sm={12} md={6} className='mb-3 mb-md-0'>
              <Form.Label>Location</Form.Label>
              <Form.Select defaultValue="VELLORE">
                <option>VELLORE</option>
                <option>AMRAVATI</option>
                <option>BHOPAL</option>
              </Form.Select>
            </Col>
            <Col sm={12} md={6}>
              <Form.Label>Postcode</Form.Label>
              <Form.Control placeholder='Postcode' />
            </Col>
          </Row>

          <Form.Group className='mb-3'>
            <Form.Label>Your Message</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>

          <Button variant="danger btn-lg" type='submit'>Submit</Button>
        </Form>
      </div>

      {/* Locations */}
      <div className='bg-dark text-light p-5'>
        <div className='container'>
          <h2 className='text-center mb-5'>Our Locations</h2>
          <div className='row g-4 justify-content-center'>
            {[ 
              { name: 'VELLORE', img: vellorelocation },
              { name: 'AMRAVATI', img: amravatiLocation },
              { name: 'BHOPAL', img: bhopalLocation }
            ].map((loc, idx) => (
              <div key={idx} className='col-sm-12 col-md-6 col-lg-4 d-flex flex-column align-items-center location-card'>
                <img src={loc.img} className='img-fluid location-img' alt={loc.name} />
                <h3 className='text-center mt-3'>{loc.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
