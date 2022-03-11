import React,{useState, useRef} from "react";
import '../../App.css'

    
  
   
   
    export const Input =({setcitieList})=> {
        const[inputValue,setInputValue]=useState('')
        const inputRef=useRef(null);
        const handleOnclick =()=>{
            setcitieList((currentArray) => [...currentArray, inputValue] );
            setInputValue('')
        }

       const handleOnchage =(Event) =>{
           setInputValue(Event.target.value)
       }
       
            return(
                <div className="box">
                   <input className="Inp" onChange={handleOnchage} value={inputValue} ref={inputRef} />
                   <button className="btn" onClick={handleOnclick} >🌎</button>
                   
                </div>
                )
    }
