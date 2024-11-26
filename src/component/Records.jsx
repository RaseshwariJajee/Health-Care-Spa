
import {   Col,  ListGroup, Row } from 'react-bootstrap';
import './Login.css';

import React from 'react';
export function Records(info) {

 return(
  <div>
    
   
   { info.details.length>0 && 
   <div>
   
      < ListGroup.Item  className="mt-1 w-100 d-lg-block d-xs-inline" style={{ borderRadius: "10px", background: "#00BFFF",textAlign: "center" }}>
      <Row   style={{color: "#316fe2"}}>
       
      <h6>--------------------------Previous Records--------------------------</h6>
      <br/>
      
      <Col className='text-break'  sm="3" md="3" lg="3" xl="3">Symptoms</Col>
      <Col className='text-break' sm="4" md="4" lg="4" xl="4">Visit Date</Col>
      <Col className='text-break'  sm="4" md="4" lg="4" xl="4">Prescription</Col>
      </Row>
      <br/>
        {info.details.map((d,index) => {
          
            return   (<Row key={index}>
                     
                    
                    <Col sm="3" md="3" lg="3" xl="3"   className=' text-break '>
                    <h6 style={{color: "#316fe2"}} >{d.symptoms}</h6>
                    </Col>
                    <Col sm="4" md="4" lg="4" xl="4" className=' text-break'>
                    <h6 style={{color: "#316fe2"}} >{d.visitDate}</h6>
                    </Col>
                    <Col sm="4" md="4" lg="4" xl="4" className='  text-break '>
                    <h6 style={{color: "#316fe2"}} >{d.prescription}</h6>
                    </Col>
                   
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
  

  

