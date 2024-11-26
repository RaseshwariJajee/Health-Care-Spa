import React,{useEffect} from 'react'
import {Form,Button,Container} from 'react-bootstrap';
import './Login.css';
import {useLocation,useNavigate} from 'react-router-dom';
import { connect } from "react-redux";
import { getInfo,editPatientInfo} from "../redux/patientReducer";
import { Records } from './Records';

const AddPatient = ({getInfo,editPatientInfo,msg,patient}) => {


    const location = useLocation();
  const navigate=useNavigate();
  
  const id=location.state.id;
  
  const cancel=()=>{
    
    navigate('/doctor')
 
   }
    useEffect(()=>{ 
      getInfo(id);
   },[getInfo,id])

 const handleClick=(e)=>{
        e.preventDefault();
       const patientdetails={
            id:location.state.id,
            email:e.target.email.value,
            name:e.target.name.value,
            dob:e.target.dob.value,
            gender:e.target.gender.value,
            nationality:e.target.nationality.value,
            existingAilments:e.target.existingAilments.value,
           record:{
            visitDate:e.target.visitDate.value,
            symptoms:e.target.symptoms.value,
            prescription:e.target.prescription.value
       }

         }
        
        editPatientInfo({details:patientdetails});
        navigate('/doctor')
    
      };
       if(msg==="edited"){
       console.log(msg)
       }
       
    
    
    
  return (
   <>
   
   { patient.length>0 && 
    <div>
        
    
    <div style={{background: "#00BFFF",padding:"3%", height: "100"  }} >
   
    <button style={{margin: "10px 0 10px 85%"}}  className="button d-inline-block l-2 r-2  ms-" onClick={() => cancel() }>Cancel</button>
       
     <Container className="mt-1" style={{ width: "100%",background: "white",padding:"2%" }}>
    <Form onSubmit={(e)=>handleClick(e)} className='d-block justify-content-center w-100%' >
      <Form.Group className="mb-3 d-flex justify-content-center w-100"  >
        <Form.Label className='lable d-inline' >
          <h4>Edit Patient Details</h4></Form.Label>
      </Form.Group>
      <Form.Group className="mb-3" controlId="id">
        <Form.Label className='lable '>Id</Form.Label>
        <Form.Control disabled type="text" defaultValue={location.state.id}/>
        <Form.Text className="text-immuted">  
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
        <Form.Label className='lable '>Email address</Form.Label>
        <Form.Control type="email" defaultValue={patient[0].email} />
        <Form.Text className="text-muted">  
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="name">
        <Form.Label className='lable '>Name</Form.Label>
        <Form.Control type="name" defaultValue={patient[0].name} />
      </Form.Group>
      

      <Form.Group className="mb-3" controlId="dob">
        <Form.Label className='lable '>Date of Birth</Form.Label>
        <Form.Control type="text" defaultValue ={patient[0].dob}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="gender">
      <Form.Label className='lable '>Gender</Form.Label>
      <Form.Select aria-label="Default select example"  defaultValue={patient[0].gender}>
      <option value="Male">Male</option>
      <option value="Female">Female</option>
    </Form.Select>
    </Form.Group>

    <Form.Group className="mb-3" controlId="nationality">
        <Form.Label className='lable '>Nationality</Form.Label>
        <Form.Control type="text" defaultValue ={patient[0].nationality}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="existingAilments">
        <Form.Label className='lable '>Existing Ailments</Form.Label>
        <Form.Control type="text" defaultValue={patient[0].existingAilments} />
      </Form.Group>

      <Records details={patient[0].records}/>
      <Form.Group className="mb-3" controlId="symptoms">
        <Form.Label className='lable '>Symptoms</Form.Label>
        <Form.Control type="text" />
      </Form.Group>

    <Form.Group className="mb-3" controlId="prescription">
        <Form.Label className='lable '>Prescription</Form.Label>
        <Form.Control type="text"/>
        </Form.Group>

      <Form.Group className="mb-3" controlId="visitDate">
        <Form.Label className='lable '>Next Visit Date</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>

      
     <Form.Group className="mb-3 d-flex justify-content-center" >
      <Button className="button d-block w-50 ms-" type="submit">
        Submit
      </Button>
    </Form.Group>
    </Form>
    </Container>
    </div>
    </div>
}


  </>
    
  
  )
}
const mapStateToProps = (state) => {
    return {
      msg: state.patientdAdd.msg,
    patient: state.patientdAdd.info,
    };
  };
 const mapDispatchToProps =  {
    editPatientInfo,
    getInfo
  };
  
  export default connect(mapStateToProps,mapDispatchToProps)(AddPatient);








