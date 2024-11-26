
import './Login.css';

import React from 'react';
import { Cost } from './Cost';
import { Total } from './Total';

export function PharmacistRecords  (info) {
   /* var total=0;
   
    
    info.details.map(d => {return(console.log(<Cost med={d.prescription.split(' ')[0]}/>))
})*/
     

 return(
  <div style={{paddingLeft:"10%",paddingRight:"10%",width: "100%", height: "100%"}} >
    
   
   { info.details.length>0 && 
   <div className="px-15">
   {info.details.map((d,index) => {
     return   (
       
    <div key={index} className="row" >
              <hr/>
              <div className="col-xl-10">
                <p >{d.prescription.split(' ')[0]}</p>
              </div>
              <div className="col-xl-2">
                
                <p className="float-end"><Cost med={d.prescription.split(' ')[0]}/>
               
                </p>
              </div>
              </div>)})}
           
            
  
   <hr style={{border: "2px solid black"}}/>
 <p className="float-end fw-bold"> Total:<Total med={info.details}/></p>
   <br/>
   
    <hr style={{border: "2px solid black"}}></hr> 
    <p  style={{color: "#316fe2"}} className="float-end fw-bold">Thank you Visit Again!</p>
  </div> 
}
</div>
    )

}
  

  


 
