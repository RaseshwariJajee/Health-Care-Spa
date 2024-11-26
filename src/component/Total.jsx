import React from 'react'

export const Total = (props) => {
    var n=0;
    {props.med.map((d) => {
        var p=d.prescription.split(' ')[0]
        if(p==='Benylin'){n+=80}
        if(p==='Combiflam'){ n+=60}
        if(p==='Saridon'){n+=50}
        if(p==='Strepsils'){n+=30}
        if(p==='Diclofenac'){n+=20}
        if(p==='Otovin'){n+=70}
        if(p==='Imodium'){n+=88}
        if(p==='Visine'){n+=55}
        if(p==='Chloroquine'){n+=65}
        if(p==='Sitavig'){n+=28}
        return(n)
    })}
  return (
    <>{n}</>
  )
}
