import React from 'react';
import {Row,Col,Form} from 'react-bootstrap';
import TableData from './TableData';

const ResultPage = () => {
    return(
        <>
           <Row className='justify-content-center my-5'>
            <Col sm ={12} md={6}>
            <h4>
                Visvesvaraya Technological University, Belagavi
            </h4>
            <h6 style={{marginLeft:"4rem", fontSize:"15px" }}>
                VII - Semester B.E Examination Result,Nov/Dec-2024
            </h6>
            </Col>
           </Row>
           <Row>

            <Col sm={12} md={6}>
                <Form.Group>
                     <Form.Label>Student Name:</Form.Label>
                     <Form.Label style={{marginLeft:"4.5rem"}}>Sneha Singh</Form.Label><br/>
                     <Form.Label>Father's/Mother' Name:</Form.Label>
                     <Form.Label style={{marginLeft:"1rem"}}>Dev.K</Form.Label><br/>
                     <Form.Label>College Name:</Form.Label>
                     <Form.Label style={{marginLeft:"4.5rem"}}>PES University</Form.Label>
                     
                </Form.Group>
            </Col>

             <Col sm={12} md={6}>
             <Form.Group>
                  <Form.Label style={{float:"right"}}>RegisterNo: PES2UG20CS343</Form.Label>
                  
             </Form.Group>
            </Col>

           </Row>

           <Row>
            <TableData/>
           </Row>
        </>
    )
}
export default ResultPage;