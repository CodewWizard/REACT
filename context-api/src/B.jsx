import React, { useContext } from "react";
import C from './C';
import { firstName } from "./App";

const B =()=>{  
    const context = useContext(firstName);
    return(
        <>
            <h1>
                In B jsx {context}
            </h1>
            <C/>
        </>
    )
}

export default B;