import React,{useState} from "react";
import { Link } from 'react-router-dom';
import {Row,Col,Form,Button} from 'react-bootstrap';


const ResultLoginPage = () => {

      const[registerInput,setRegisterInput] = useState("")
      const[error,setError]= useState("")
      
      const submitHandler = ()=>{
        console.log("hello")
      }
    return(
        <>
            <Link to ='/' className="btn btn-dark"
            style={{marginTop:"1rem"}}>Go Back</Link>

            <Row className="text-center">
                <Col>
                  <h3>Check your results here...</h3>
                </Col>
                </Row>
                <br/>
            
            <Row>
                <Col></Col>
                <Col style={{marginLeft:"-20rem"}}>
                
                  <Form onSubmit={submitHandler}>
                    <Form.Label>Enter your Register No:</Form.Label><br/>
                    <Form.Control type="text" placeholder="Enter your register no"
                    style={{width:"70%"}}
                    value={registerInput} 
                    onChange={(e)=>setRegisterInput(e.target.value)}/>
                    <Button type="submit" style={{marginTop:"1rem"}}>Submit</Button>
                      
                  </Form>
                </Col>
            </Row>
        
        </>
    )
}
export default ResultLoginPage;