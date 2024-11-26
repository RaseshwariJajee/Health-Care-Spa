
import {Container,Row,Col} from 'react-bootstrap';
import './Login.css';
import { connect } from "react-redux";
import { getInfo } from "../redux/patientReducer";

import { userlogout } from "../redux/loginReducer";
import React,{useEffect} from 'react';
import {useLocation,useNavigate} from 'react-router-dom';

import { PharmacistRecords } from './PharmacistRecords';

function Bill({patient,getInfo,msg1,userlogout} ){ 
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
 const location = useLocation();
  const navigate=useNavigate();
  const id=location.state.id;
  const logout=()=>{
    userlogout();
    navigate('/')
 
   }
    const back=()=>{
      navigate('/pharmacist' )
 
    }
    useEffect(()=>{ 
      getInfo(id);
   },[getInfo,id])
if(msg1==="loggedin"){

        return(
          <>
          { patient.length>0 &&  
          <div style={{ height: "100%" ,background: "#00BFFF",padding:"2%" }} >
            <Row className='d-flex-block justify-content-center'style={{width:"10%"}}>
              
            <button style={{margin: "10px 0 10px 75%"}}    className="button d-inline-block l-2 r-2  ms-"onClick={() => back()} >Back</button>
           
          <button style={{margin: "10px 0 10px 75%"}}    className="button d-inline-block l-2 r-2  ms-"onClick={() => logout()} >Log out</button>
          
          </Row>
      <Container className="mt-1 " style={{ width: "100vh", height: "80vh", border: "3px solid black", background: "white", borderRadius: "30px",padding:"2%" }}>
    
          <h1 className='lable d-flex justify-content-center'>Pharmacy Invoice</h1>
    
      
            <br/>
            <br/>
           
           <Row style={{paddingLeft:"10%"}} >
            <Col>
              <ul className="list-unstyled">
              <li style={{color: "#316fe2"}}><h6>{patient[0].name}</h6></li>
                 <li style={{color: "#316fe2"}}><h6>Id :{patient[0].id}</h6></li>
                 <li  style={{color: "#316fe2"}}><h6>Date of Birth:{patient[0].dob}</h6></li>
                 </ul>
                 </Col>
                 <Col>
               <ul className="list-unstyled">
               <li style={{color: "#316fe2"}}><h6>Invoice:#{  Math.floor(Math.random() * 100000) + 1 }</h6></li>
                <li style={{color: "#316fe2"}}><h6>Creation Date:{date}</h6></li>
              </ul>
              </Col>
               </Row>
               
               <PharmacistRecords details={patient[0].records}/>
               
       
      </Container>
      </div>
            
          }
          </>
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
    
    getInfo,
    userlogout
   
  };
  
  export default connect( mapStateToProps, mapDispatchToProps)(Bill);
/*   <div>
         
         { patient.length>0 &&  patient!==undefined &&
        
          
    <div style={{ height: "100%" ,background: "linear-gradient(to right,#316fe2,#00BFFF)",padding:"6%" }} >
    <button style={{margin: "10px 0 10px 80%"}}  className="button d-inline-block l-2 r-2  ms-" onClick={() => logout() }>Log out</button>
        
   <Container className="mt-1 " style={{ width: "100%", height: "100vh", border: "3px solid black", background: "white", borderRadius: "30px",padding:"2%" }}>
    
      <Form className='d-flex flex-column justify-content-around ml-3  w-100 px-5' >
      <Form.Group className="mb-3 d-flex justify-content-center w-100"  >
        <Form.Label className='lable d-inline' >
          <h1>Pharmacy Invoice</h1></Form.Label>
      </Form.Group>
      <Form.Group className=" mb-3" controlId="id">
        <Form.Label  style={{color: "#316fe2"}}><h4>Id :{patient[0].id}</h4></Form.Label>
        
      </Form.Group>


      <Form.Group className="mb-3" controlId="name">
        <Form.Label style={{color: "#316fe2"}}><h4>Name:{patient[0].name}</h4></Form.Label>
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="dob">
        <Form.Label style={{color: "#316fe2"}}><h4>Date of Birth:{patient[0].dob}</h4></Form.Label>
      </Form.Group>


    <Form.Group className="mb-3" controlId="prescription">
        <Form.Label style={{color: "#316fe2"}}><h4>Prescription:{patient[0].records[(patient[0].records.length)-1].prescription}</h4></Form.Label>
        </Form.Group>

      <Form.Group className="mb-3" controlId="visitDate">
        <Form.Label style={{color: "#316fe2"}}><h4>Next Visit Date:{patient[0]?.records[(patient[0].records.length)-1].visitDate}</h4></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="visitDate">
        <Form.Label style={{color: "#316fe2"}}><h4>Bill:<Cost med={patient[0]?.records[(patient[0].records.length)-1].prescription.split(' ')[0]}/></h4></Form.Label>
      </Form.Group>

       
     
    </Form>
    </Container>
        
    
    </div>
    
      }
    </div>*/