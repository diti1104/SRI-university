import React from 'react';
import './FaqAccordion.css';
import Accordion from 'react-bootstrap/Accordion';

function FaqAccordion() {
  return (
    <div className='faq-section'>
        <div className='container d-flex flex-column align-items-center'>
            <h2 className='text-center text-capitalize mb-5'>Frequently Asked Questions</h2>
            <p className='text-center mb-5'>
                Here you’ll find answers to some of the most common questions we receive. 
                Whether you’re curious about our programs, admissions process, or student life, 
                we’ve provided clear information to help you better understand what we offer. 
                If your question isn’t listed here, feel free to contact our support team.
            </p>
            <Accordion defaultActiveKey="" flush>
                <Accordion.Item eventKey='0'>
                    <Accordion.Header>First question?</Accordion.Header>
                    <Accordion.Body>
                        This is the answer to the first question. It explains the details clearly 
                        so that anyone can understand the process or information being discussed.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='1'>
                    <Accordion.Header>Second question?</Accordion.Header>
                    <Accordion.Body>
                        Here is where we address the second question in detail, providing 
                        relevant facts, examples, or steps as needed.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='2'>
                    <Accordion.Header>Third question?</Accordion.Header>
                    <Accordion.Body>
                        This section contains the answer to the third question, offering a 
                        clear and concise explanation for easy understanding.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey='3'>
                    <Accordion.Header>Fourth question?</Accordion.Header>
                    <Accordion.Body>
                        This is the explanation for the fourth question, summarizing the key 
                        points and providing any additional resources if applicable.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    </div>
  )
}


export default FaqAccordion;