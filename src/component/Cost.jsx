import React from 'react'


    export const Cost= (props) => {
        var n=0;
        if(props.med==='Benylin'){n=80}
        if(props.med==='Combiflam'){n=60}
        if(props.med==='Saridon'){n=50}
        if(props.med==='Strepsils'){n=30}
        if(props.med==='Diclofenac'){n=20}
        if(props.med==='Otovin'){n=70}
        if(props.med==='Imodium'){n=88}
        if(props.med==='Visine'){n=55}
        if(props.med==='Chloroquine'){n=65}
        if(props.med==='Sitavig'){n=28}
      return (
        <>
        {n}
        </>
      )
    
    }

