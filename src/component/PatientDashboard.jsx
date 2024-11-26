
import {Form,Container} from 'react-bootstrap';
import './Login.css';

import { connect } from "react-redux";import { userlogout } from "../redux/loginReducer";
import { getSelfInfo } from "../redux/patientReducer";
import React,{useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { PatientRecords } from './PatientRecords';


function PatientDashboard({patient,getSelfInfo,msg1,userlogout} ){ 
 
  const logout=()=>{
    userlogout();
    navigate('/')
   
 
   }
   var m=false;
    const email = sessionStorage.getItem("email");
    const navigate=useNavigate();
    useEffect(()=>{ 
      getSelfInfo(email);
      
      
    },[getSelfInfo,email])

    
    
       
       const today = new Date()
       if(patient!==undefined && patient.length>0 && patient[0].records.length>0)
    {
       var d1 = Date.parse(patient[0]?.records[(patient[0].records.length)-1].visitDate);
       var d2 = Date.parse(today.toISOString().split('T')[0]);
       
      if(d1>=d2)
      {
        m=true
      }
    }
      if(msg1==="loggedin"){

        return(
          <div>
         
         { patient.length>0 &&  
         <div>
          {m&&
           <marquee style={{width: "100%",color: "blue"}}><h4>Next Visit date is on {patient[0].records[(patient[0].records.length)-1].visitDate}</h4></marquee>
          }
    <div style={{ height: "100vh" ,background: "#00BFFF" }} >
    <button style={{margin: "10px 0 10px 80%"}}  className="button d-inline-block l-2 r-2  ms-" onClick={() => logout() }>Log out</button>
       <div className="d-inline-flex" style={{width:"100%",padding:"5%"}} > 
   <Container className="mt-1 " style={{ width: "100%", height: "50%", border: "3px solid black", background: "white", borderRadius: "30px" }}>
    
      <Form style={{ width: "100%"}}className='d-flex flex-column justify-content-around ml-3  w-100 px-5' >
      <Form.Group className="mb-3 d-flex justify-content-center w-100"  >
        <Form.Label className='lable d-inline' >
          <br/>
          <h1>{patient[0].name}</h1></Form.Label>
      </Form.Group>
      <Form.Group className="ml-4 mb-3" controlId="id">
        <Form.Label  style={{color: "#316fe2"}}><h4>Id :{patient[0].id}</h4></Form.Label>
        
      </Form.Group>


      <Form.Group className="mb-3" controlId="email">
        <Form.Label  style={{color: "#316fe2"}}><h4>Email :{patient[0].email}</h4></Form.Label>
        
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="dob">
        <Form.Label style={{color: "#316fe2"}}><h4>Date of Birth:{patient[0].dob}</h4></Form.Label>
      </Form.Group>

      <Form.Group className="mb-3" controlId="gender">
      <Form.Label style={{color: "#316fe2"}}><h4>Gender:{patient[0].gender}</h4></Form.Label>
      </Form.Group>

    <Form.Group className="mb-3" controlId="notionality">
        <Form.Label style={{color: "#316fe2"}}><h4>Nationality:{patient[0].nationality}</h4></Form.Label>
     </Form.Group>
     <Form.Group className="mb-3" controlId="existingAilments">
      <Form.Label style={{color: "#316fe2"}}><h4>Existing Ailments:{patient[0].existingAilments}</h4></Form.Label>
      </Form.Group>

      
     

      
     
    </Form>
    </Container>
    <PatientRecords details={patient[0].records}/>
        
    </div>
    </div>
    </div>
      }
    </div>
    
  )}
  else{
   
    navigate('/');
  };}
  const mapStateToProps = (state) => {
    return {
        
        patient: state.patientdAdd.info,
        msg1:state.login.msg
    };
  };
  
  const mapDispatchToProps =  {
    
    getSelfInfo,
    userlogout
   
   
  };
  
  export default connect( mapStateToProps, mapDispatchToProps)(PatientDashboard);