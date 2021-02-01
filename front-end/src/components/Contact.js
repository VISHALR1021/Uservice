import {useState} from 'react'
import Navbar from './Navbar'

const Contact = () =>{

    const [name,setName] = useState('')
    const [message,setMessage] = useState('')

    const handleSubmit = ()=>{
        fetch('/contact',{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                sender:name,
                message:message
            })
        })
    }

    return(

        <div>
            
            <Navbar/>

            <section class="contact-us">
            <div class="contact-us">
            <div class="contact-us container">
                <div class="contact-us-form">
                    <form action="#">
                        <h2 class="title">Contact Us</h2>
                        <div class="input-fields">
                             <i class="fas fa-user"></i>
                             <input class="name" type="username" placeholder="*Name" onChange={(e)=>{setName(e.target.value)}} />
                        </div>
                        
                         <div class="contact-message">
                            <textarea class="message" placeholder="*Your Message here..." onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                         </div>   
                            <button class="ctn" type="button" value="submit" onClick={handleSubmit}>Send</button>  
                    </form> 
                </div>
            </div>
        </div>
    </section>

        </div>
    )
}

export default Contact