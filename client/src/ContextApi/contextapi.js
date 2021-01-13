import React, { createContext, useState } from "react";

export const productcontext=createContext();


export const Project=(props)=>{
    const [searchs,setSearchs]=useState();
    const [cook,setCook]=useState();
    const [details,setDetails]=useState();
   
    
     

    return(
        <productcontext.Provider value={
            {
                search:[searchs,setSearchs],
                cook:[cook,setCook],
                detail:[details,setDetails],
                
              
            }
        }>
          {props.children}
        </productcontext.Provider>
    )

}