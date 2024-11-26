import React,{useState,useEffect} from 'react'
import {Form,Button,Container} from 'react-bootstrap';
import './Login.css';

import { connect } from "react-redux";
import Multiselect from "multiselect-react-dropdown";
import { addPatientInfo,getPatient} from "../redux/patientReducer";


const AddPatient = ({addPatientInfo,msg,getPatient,patient,msg1}) => {
 

  
    const ailments=["Blood pressure","Diabetes","Thyroid","Asthama","Depression","None"]
    const [userlogin,setList]=useState([])
    const str = userlogin.toString();
    
    const handleClick=(e)=>{
        e.preventDefault();
        const patientdetails={
            id:patient.length+1,
            email:e.target.email.value,
            name:e.target.name.value,
            dob:e.target.dob.value,
            gender:e.target.gender.value,
            nationality:e.target.nationality.value,
            existingAilments:str,
            records:[{
              visitDate:e.target.visitDate.value,
              symptoms:e.target.symptoms.value,
              prescription:e.target.prescription.value
         }]
           

         }
        addPatientInfo({patientdetails:patientdetails});
        e.target.email.value="";
        e.target.name.value="";
       e.target.dob.value="";
        e.target.gender.value="";
        e.target.nationality.value="";
        e.target.symptoms.value="";
        e.target.visitDate.value="";
       setList([]);
       e.target.prescription.value="";
      };
       if(msg==="Patient Added"){
        console.log(msg)
       }
       useEffect(()=>{ 
        getPatient()
        
      },[getPatient])
   
    
    
    
  return (
   <>
  
     <Container className="mt-1" style={{ width: "100%",background: "white",padding:"2%" }}>
    <Form onSubmit={(e)=>handleClick(e)} className='d-block justify-content-center w-100%' >
      <Form.Group className="mb-3 d-flex justify-content-center w-100"  >
        <Form.Label className='lable d-inline' >
          <h4>Add Patient Details</h4></Form.Label>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="email">
        <Form.Label className='lable '>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">  
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label className='lable '>Name</Form.Label>
        <Form.Control type="name" placeholder="Name" />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="dob">
        <Form.Label className='lable '>Date of Birth</Form.Label>
        <Form.Control type="date" placeholder="Date of Birth" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="gender">
      <Form.Label className='lable '>Gender</Form.Label>
      <Form.Select aria-label="Default select example"  defaultValue={'DEFAULT'}>
      <option value="DEFAULT" disabled>Select</option>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3" controlId="nationality">
        <Form.Label className='lable '>Nationality</Form.Label>
        <Form.Control type="text" placeholder="Nationality" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="symptoms">
        <Form.Label className='lable '>Symptoms</Form.Label>
        <Form.Control type="text" placeholder="Symptoms" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="existingAilments">
      <Form.Label className='lable '>Existing Ailments</Form.Label>
      <Multiselect
  isObject={false}
  
  onRemove={(e) => setList([...e])}
  
  onSelect={(e) => setList([...e])}
  options={ailments}
/>
  </Form.Group>


    <Form.Group className="mb-3" controlId="prescription">
        <Form.Label className='lable '>Prescription</Form.Label>
        <Form.Control type="text" placeholder="Prescription" />
        </Form.Group>

      <Form.Group className="mb-3" controlId="visitDate">
        <Form.Label className='lable '>Next Visit Date</Form.Label>
        <Form.Control type="date" placeholder="visitDate" />
      </Form.Group>

      
     <Form.Group className="mb-3 d-flex justify-content-center" >
      <Button className="button d-block w-50 ms-" type="submit">
        Submit
      </Button>
    </Form.Group>
    </Form>
    </Container>

  </>
    
  
  )
      }
      

const mapStateToProps = (state) => {
    return {
      msg: state.patientdAdd.msg,
      patient: state.patientdAdd.details,
    };
  };
 const mapDispatchToProps =  {
    addPatientInfo,
    getPatient,
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(AddPatient);

