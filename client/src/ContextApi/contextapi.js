import React, { createContext, useState } from "react";

export const productcontext=createContext();


export const Project=(props)=>{
    const [searchs,setSearchs]=useState();
    const [cook,setCook]=useState();
    const [details,setDetails]=useState();
    const [login,setLogin]=useState(false);
    const [username,setUsername]=useState();
    const [image,setImage]=useState();
   
    
     

    return(
        <productcontext.Provider value={
            {
                search:[searchs,setSearchs],
                cook:[cook,setCook],
                detail:[details,setDetails],
                loginuser:[login,setLogin],
                name:[username,setUsername],
                image:[image,setImage],
                
              
            }
        }>
          {props.children}
        </productcontext.Provider>
    )

}