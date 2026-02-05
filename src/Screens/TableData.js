import React,{useState,useEffect} from 'react';
import { Container,Table} from 'react-bootstrap'
import axios from 'axios';



const TableData = ({studentId}) => {
    console.log("id",studentId)
    const[resultDetails,setResultDetails] = useState([])
    useEffect(() =>{
        axios.get('http://localhost:3001/studentInfo')
        .then((response) => {
            console.log("resss",response.data)
            let temp = []
            temp = response.data.filter((d) => d.registerId === studentId)
            setResultDetails(temp)
        }) 
        .catch((error) => console.log("err",error))
    },[studentId])
     console.log("state2",resultDetails)
     const getTotalMarks = (value) => {
        let sum = 0
        resultDetails.map((d) => 
            {sum += parseInt(d[value])

            })
            return sum
        }
    return(
        <>
        <Container>
        <Table className='my-5' responsive bordered>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>SL No</th>
                    <th colSpan={2}>Subject
                    <th style={{padding:"0px 10rem"}}>Code</th>
                    <th style={{paddingLeft:"10rem"}}>Subject</th>
                    </th>
                    <th colSpan={3}>Examination Marks Obtained
                    <th  style={{paddingLeft:"10rem"}}>Max</th>
                    <th  style={{paddingLeft:"10rem"}}>Min</th>
                    <th  style={{paddingLeft:"10rem"}}>Obtained</th>
                    </th>
                    <th style={{paddingLeft:"10rem"}}>Subject Results</th>
                </tr>
                
            </thead>
            <tbody>
                 
                 {
                    resultDetails.map((data,index) => (
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{data.code}</td>
                            <td>{data.subject}</td>
                            <td>{data.max_marks}</td>
                            <td>{data.min_marks}</td>
                            <td>{data.obtained_marks}</td>
                            <td>{data.result}</td>
                        </tr>
                    ))
                }
            </tbody>
            <thead>
                <tr>
                    <th colSpan={3}>Grand Total</th>
                     <td>{getTotalMarks('max_marks')}</td>
                     <td>{getTotalMarks('min_marks')}</td>
                     <td>{getTotalMarks('obtained_marks')}</td>
                     <td>PASS</td>
                </tr>
               
            </thead>
        </Table>
        <p><b>Total Marks Obtained [in Words]</b>:
        Two Hundred and Sixty Only </p>
        <p><b>Result of Semester</b>:PASS</p>
        <p><b>Percentage</b>:65%</p>
        <p><b>Date</b>:05 DEC 2025</p>
        </Container>
        </>


    )
}
export default TableData;