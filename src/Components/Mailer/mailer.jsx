   import { useState } from 'react'   
   import emailjs from 'emailjs-com'  
   import Rasm from '../img/t.png'
    
   
   export const Mailer = () => {
     
      function sendEmail(e){
      e.preventDefault();
      emailjs.sendForm(
        'service_4duw006',
        'template_m7xgeo5',
        e.target,
        'user_FMU1hoLKxe6GOyPjprsTi'
      ).then(res=>{
        console.log(res);
      }
      
      ).catch(err=>console.log(err));
      
    
    }
    const [inputValue,setInputValue]=useState('')
    const onhandleOnclick =()=>{
      setInputValue('')
    }
      const hendleonchengch =(Event)=>{
      setInputValue(Event.value);
    }
      return (

      
       
       <div className='big'>
         <form  onSubmit={sendEmail}>
           <div className="reg">
           <h1 className='re'>Register</h1> 
           <img  src={Rasm} alt="" /> 
           </div>

           <div className="big2">
           < input className='email' type="text" placeholder='Email' name='name' value={inputValue} onChange={hendleonchengch}  /> <br /><br />
            <input  className='pass'  type="password" placeholder='Password' value={inputValue} name='name ' onChange={hendleonchengch}/><br /> <br />  
          </div>
          <div className="text4">
          <textarea name="message"  id="text" cols="30" rows="10" placeholder='About you' value={inputValue} onChange={hendleonchengch}></textarea>  <br /> 
          <input className='do' onClick={onhandleOnclick} type="submit" value='Send'  />
           
          </div>
          </form>
       </div>
     )
   }
    
    

    
    
    
    
    
        
    
    

      
      
                  
























































































































































































































































































































































































































































































































































































































































































































































































































































































































































