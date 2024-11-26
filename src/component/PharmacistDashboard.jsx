
import {  Col,  ListGroup, Row ,FormControl,Button} from 'react-bootstrap';
import './Login.css';
import React,{useEffect,useState} from 'react'
import { connect } from "react-redux";
import { userlogout } from '../redux/loginReducer';
import { getPatient } from "../redux/patientReducer";
//import { Bill } from './Bill';
import { useNavigate } from 'react-router-dom';

 function PatientList({patient,loading,getPatient,msg1,userlogout}) {
  const Bill=(d)=>{
    navigate('/bill',{state:{id:d.id}})
   
    };
    
  const logout=()=>{
    userlogout();
    navigate('/')
 
   }
  const navigate=useNavigate();
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
  

    useEffect(()=>{ 
      getPatient()
      
    },[getPatient])
      if (loading) {
          return <div>Loading</div>
      }

      if(msg1==="loggedin"){
     return (
     
      <div >
      <h1 className="lable d-flex justify-content-center ">Pharmacist Dashboard</h1>
       
       <div className="h-100%" style={{background: "#00BFFF",padding:"1%",    height: "calc(100vh - 56px)" }} >
        <br/>
        
        <button style={{margin: "10px 0 10px 90%"}}  className="button d-inline-block l-2 r-2  ms-" onClick={() => logout() }>Log out</button>
    
       <FormControl className="w-20%" onChange={(e)=>onSearch(e)} placeholder="Search" >
     </FormControl>
     <br/>
    { patients.length>0 &&  
   <>
    <br/>
   
      < ListGroup.Item  className="mt-1 w-100 d-lg-block d-xs-inline" style={{ borderRadius: "10px", background: "linear-gradient(to left,#FFFFFF,#00BFFF)",textAlign: "center" }}>
     <Row   style={{color: "#316fe2"}}>
     <Col className='text-break ' sm="1" md="1" lg="1" xl="1">Id</Col>
      <Col className='text-break ' sm="2" md="2" lg="2" xl="2">Name</Col>
      <Col className='text-break'  sm="2" md="2" lg="2" xl="2">Date of Birth</Col>

      <Col className='text-break' sm="2" md="2" lg="2" xl="2">Visit Date</Col>
      <Col className='text-break'  sm="4" md="4" lg="4" xl="4">Prescription</Col>

      </Row>  
      <br/>
        {patients.map((d,index) => {
            return   <Row key={index}>
                     <Col sm="1" md="1" lg="1" xl="1"  className=' text-break '>
                        <h6 style={{color: "#316fe2"}}>{d.id}</h6>
                    </Col>
                    <Col sm="2" md="2" lg="2" xl="2"  className=' text-break '>
                        <h6 style={{color: "#316fe2"}}>{d.name}</h6>
                    </Col>
                    <Col sm="2" md="2" lg="2" xl="2" className=' text-break '>
                    <h6 style={{color: "#316fe2"}} >{d.dob}</h6>
                    </Col>
                    <Col sm="2" md="2" lg="2" xl="2" className=' text-break'>
                    <h6 style={{color: "#316fe2"}} >{d.records[(d.records.length)-1].visitDate}</h6>
                    </Col>
                    <Col sm="4" md="4" lg="4" xl="4" className='  text-break '>
                    <h6 style={{color: "#316fe2"}} >{d.records[(d.records.length)-1].prescription}</h6>
                    </Col>
                 
                    <Col sm="1"  md="1" lg="1" xl="1"  className=' text-center'>
                        <Row className='w-100 h-100 d-flex  justify-content-center'>
                                <Button onClick={()=>Bill(d)} className='button d-inline' >Bill</Button>
                        </Row>
        </Col>
                   
                    </Row>
                    
                    
            
          })}
     
      </ListGroup.Item>
      </>
  }
   </div>
   </div>
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
      userlogout
     
    };
    
    export default connect( mapStateToProps, mapDispatchToProps)(PatientList);
  



