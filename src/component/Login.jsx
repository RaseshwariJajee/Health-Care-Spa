import {Form,Button,Container} from 'react-bootstrap';
import './Login.css';
import { connect } from "react-redux";
import React from "react";
import { useNavigate} from "react-router-dom";

import { startLogin } from "../redux/loginReducer";

function Login({startLogin,userlogininfo,msg}) {
    
    const navigate=useNavigate()
     const handleClick=(e)=>{
     e.preventDefault();
     const login={
        
        email:e.target.email.value,
        password:e.target.password.value,
        role:e.target.role.value,
     }
    startLogin({userlogin:login}); 
   
    
    };
    
    if(msg==='loggedin'){
       
        if(userlogininfo.role==='doctor')
          {
          navigate('/doctor');
          }
          if(userlogininfo.role==='patient')
          {
            sessionStorage.setItem("email", userlogininfo.email);
           navigate('/patient');
         }
          if(userlogininfo.role==='pharmacist')
          {
           navigate('/pharmacist');
          }
       }
       if(msg==='wrongemail'){

        alert("Wrong email")
       }
       if(msg==='wrongpassword'){

        alert("Wrong password")
       }

       if(msg==='wrongrole'){
        alert("Wrong role")
       }
  return (
    <div style={{ height: "100vh" ,background: "#00BFFF",padding:"8%" }} >
     <Container className="mt-1" style={{ width: "80%", border: "3px solid black", background: "white", borderRadius: "30px",padding:"2%" }}>
    <Form onSubmit={(e)=>handleClick(e)} className='d-block justify-content-center w-100%' >
      <Form.Group className="mb-3 d-flex justify-content-center w-100"  >
        <Form.Label className='lable d-inline' >
          <h1>Log in</h1></Form.Label>
      </Form.Group>
    
      <Form.Group className="mb-3" controlId="email">
        <Form.Label className='lable '>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
        <Form.Text className="text-muted">  
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="password">
        <Form.Label className='lable '>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="role">
      <Form.Label className='lable '>Login As:</Form.Label>
      <Form.Select aria-label="Default select example" title='User' defaultValue={'DEFAULT'}>
      <option value="DEFAULT" disabled>User</option>
      <option value="doctor">Doctor</option>
      <option value="patient">Patient</option>
      <option value="pharmacist">Pharmacist</option>
    </Form.Select>
      </Form.Group>
      <br/>
      <Form.Group className="mb-3 d-flex justify-content-center" >
      <Button className="button d-block w-50 ms-" type="submit">
        Log in
      </Button>
    </Form.Group>
    </Form>
    </Container>
  </div>

  );
}
const mapStateToProps = (state) => {
    return {
        userlogininfo:state.login.info,
      msg: state.login.msg
      
      
    };
  };
  
  const mapDispatchToProps =  {
    
      startLogin,
      
    
   
  };
  
  export default connect( mapStateToProps,mapDispatchToProps)(Login);

