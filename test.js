import React from "react";
import { useState } from "react";
export function hello(){
    const [a,setArguments]=useState(0);
    
    return <>
    <button onClick={() => setArguments(a+1)}>Increment</button>
    <p>Value: {a}</p>
    </>
}