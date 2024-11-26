import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom';
import  AddPatient  from './AddPatient';
import './Login.css';
import  PatientList  from './PatientList';
import { connect } from "react-redux";
import { userlogout } from "../redux/loginReducer";



const DoctorDashboard = ({userlogout,msg1}) => {
  const navigate=useNavigate()
  
  const logout=()=>{
    userlogout();
   navigate('/')

  }

  const [state,setState]=useState(false)
  if(msg1==="loggedin"){
  return (
    
   
   <div>
      
   <h1 className="lable d-flex justify-content-center">Doctor Dashboard</h1>

   
    <div style={{background: "#00BFFF",padding:"1%", height: "100%"  }} >

    
   
        <button  className="button d-inline-block l-2 r-2  ms-" onClick={() => setState(true) }>Add New Patient</button>
       
        <button className="button d-inline-block l-2 r-2 ms-"  onClick={() => setState(false)}>Remove </button>
       
        <button style={{margin: "10px 0 10px 75%"}}  className="button d-inline-block l-2 r-2  ms-" onClick={() => logout() }>Log out</button>
        
        {state ? <AddPatient/>: null}
        <br/>
       { <PatientList/>
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
      
      
      msg1:state.login.msg
  };
};
const mapDispatchToProps =  {
  
  
  userlogout
 
 
};

export default connect(mapStateToProps,mapDispatchToProps)(DoctorDashboard);
