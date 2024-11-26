import {Container} from 'react-bootstrap';
import {   Col,  ListGroup, Row } from 'react-bootstrap';
import './Login.css';

import React from 'react';
export function PatientRecords(info) {

 return(
  <div style={{width: "100%", height: "100%"}} >
    
   
   { info.details.length>0 && 
   <div >
    
      < ListGroup.Item  className="mt-1 w-100 d-lg-block d-inline" style={{ borderRadius: "10px",textAlign: "center" ,width: "90vh"}}>
    
      <br/>
        {info.details.map((d,index) => {
          
            return   (<Row key={index} style={{paddingLeft:"8%" }}>
                     
                     <Container className="mt-1" style={{ width: "100%", height: "100%", border: "3px solid black", background: "white", borderRadius: "30px",padding:"5%" }}>
                     <Col  className=' text-break'>
                    <h6 style={{color: "#316fe2"}} >{d.visitDate}</h6>
                    </Col>
                    <Col  className=' text-break '>
                    <h6 style={{color: "#316fe2"}} >{d.symptoms}</h6>
                    </Col>
                    
                    <Col className='  text-break '>
                    <h6 style={{color: "#316fe2"}} >{d.prescription}</h6>
                    </Col>
                   
                    </Container>
                </Row>
            )
        })}
   <br/>
    </ListGroup.Item>
  </div>
}
</div>
    )

}
  

  

