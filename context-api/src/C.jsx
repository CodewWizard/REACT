import React from "react";
import { firstName } from "./App";

const C=()=>{
    return(
        <>
            <firstName.Consumer>
            {(fname)=>{
                    return <h1> Hi I am {fname} </h1>
                }
            }  
            </firstName.Consumer>
        </>
    )
}

export default C;