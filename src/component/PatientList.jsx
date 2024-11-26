
import {  Button, Col,  ListGroup, Row ,FormControl } from 'react-bootstrap';
import './Login.css';

import { useNavigate} from "react-router-dom";
import React,{useEffect,useState} from 'react'
import { connect } from "react-redux";
import { getPatient ,deletePatient} from "../redux/patientReducer";
function PatientList({patient,loading,getPatient,deletePatient,msg,msg1}) {
  
  const navigate=useNavigate()
  const [patients, setSearch] = useState(patient);
  const onSearch=(e)=>
  {
    if(e.target.value=== "")
    {
      setSearch(patient)
    }
    else{
setSearch(patient?.filter((d) => {
 
  if(isNaN(e.target.value))
  {
    return  d.name.toLowerCase().includes(e.target.value.toLowerCase());
  }
  else{
const n=parseInt(e.target.value )
if(n===d.id){
  return d.id
}
return 0;

  }

  }))}
}
  const Edit=(d)=>{
     navigate('/edit',{state:{id:d.id}})
   };
   const Delete=(d)=>{
    
   deletePatient(d.id)
   
   setSearch(patient)
   }
  if(msg==="Patient Deleted")
 {
  // console.log(msg)
   }

  useEffect(()=>{ 
    getPatient();
   setSearch(patient);
  },[getPatient,patient])

    if (loading) {
        return <div>Loading</div>
    }
    if(msg1==="loggedin"){
      
   return (
    <>
    <br/>
     <FormControl  onChange={(e)=>onSearch(e)} placeholder="Search" >
     </FormControl>
     <br/>
   
   { patients.length>0 && 
   <>
   
      < ListGroup.Item  className="mt-1 w-100 d-lg-block d-xs-inline" style={{ borderRadius: "10px", background: "#00BFFF",textAlign: "center" }}>
     <Row   style={{color: "#316fe2"}}>
     <Col className='text-break ' sm="1" md="1" lg="1" xl="1">Id</Col>
      <Col className='text-break ' sm="1" md="1" lg="1" xl="1">Name</Col>
      <Col className='text-break'  sm="1" md="1" lg="1" xl="1">Email</Col>
      <Col className='text-break'  sm="1" md="1" lg="1" xl="1">Date of Birth</Col>
      <Col className='text-break'  sm="1" md="1" lg="1" xl="1">Gender</Col>
      <Col className='text-break' sm="1" md="1" lg="1" xl="1">Nationality</Col>

      <Col className='text-break'  sm="1" md="1" lg="1" xl="1">Ailments</Col>
      <Col className='text-break'  sm="1" md="1" lg="1" xl="1">Symptoms</Col>
      <Col className='text-break' sm="1" md="1" lg="1" xl="1">Visit Date</Col>
      <Col className='text-break'  sm="1" md="1" lg="1" xl="2">Prescription</Col>
      </Row>  
      <br/>
        {patients.map((d,index) => {
            return  ( <Row key={index}>
                     <Col sm="1" md="1" lg="1" xl="1"  className=' text-break '>
                        <h6 style={{color: "#316fe2"}}>{d.id}</h6>
                    </Col>
                    <Col sm="1" md="1" lg="1" xl="1"  className=' text-break '>
                        <h6 style={{color: "#316fe2"}}>{d.name}</h6>
                    </Col>
                    <Col sm="1" md="1" lg="1" xl="1"  className=' text-break '>
                    <h6 style={{color: "#316fe2"}} >{d.email}</h6>
                    </Col>
                    <Col sm="1" md="1" lg="1" xl="1" className=' text-break '>
                    <h6 style={{color: "#316fe2"}} >{d.dob}</h6>
                    </Col>
                    <Col sm="1" md="1" lg="1" xl="1"className=' text-break '>
                    <h6  style={{color: "#316fe2"}}>{d.gender}</h6>
                    </Col>
                    <Col sm="1" md="1" lg="1" xl="1"   className='  text-break'>
                    <h6  style={{color: "#316fe2"}}>{d.nationality}</h6>
                    </Col>

                    <Col sm="1" md="1" lg="1" xl="1"   className=' text-break '>
                    <h6 style={{color: "#316fe2"}} >{d.existingAilments}</h6>
                    </Col>
                    <Col sm="1" md="1" lg="1" xl="1"   className=' text-break '>
                    <h6 style={{color: "#316fe2"}} >{d.records===undefined?" ":d.records[(d.records?.length)-1].symptoms}</h6>
                    </Col>
                    <Col sm="1" md="1" lg="1" xl="1" className=' text-break'>
                    <h6 style={{color: "#316fe2"}} >{d.records===undefined?" ":d.records[(d.records?.length)-1].visitDate}</h6>
                    </Col>
                    <Col sm="1" md="1" lg="1" xl="2" className='  text-break '>
                    <h6 style={{color: "#316fe2"}} >{d.records===undefined?" ":d.records[(d.records?.length)-1].prescription}</h6>
                    </Col>
                   <Col sm="2"  md="2" lg="1" xl="1"  className=' text-center'>
                        <Row className='w-100 h-100 d-flex  justify-content-center'>
                                <Button onClick={()=>Edit(d)} className="button d-inline  w-auto" >Edit</Button>
                                
                                <Button onClick={()=>Delete(d)} className='button d-inline  w-auto ' >Delete</Button>
                        </Row>
        </Col>
                </Row>
            )
        })}
   
    </ListGroup.Item>
    </>
}
</>
 
  );
  
    }
    else{
      navigate('/');
    }
  }
  
  const mapStateToProps = (state) => {
    return {
        
        patient: state.patientdAdd.details,
        loading: state.patientdAdd.loading,
        msg: state.patientdAdd.msg,
        msg1:state.login.msg
    };
  };
  
  const mapDispatchToProps =  {
    
    getPatient,
    deletePatient,
   
  };
  
  export default connect( mapStateToProps, mapDispatchToProps)(PatientList);


