import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { data } from "react-router-dom";
import "../styles/homeproduct.css"
function Homeproduct(){
    const{register,handleSubmit}=useForm();

    const send=(data)=>

    {
    const{Name,Email,subject,Message}=data;
    const formData=new FormData();
    try{
     formData.append('Name',Name)
     formData.append('Email',Email);
     formData.append('subject',subject);
     formData.append('Message',Message);

     const results= axios.post(`https://botiga-kvf9.onrender.com/contact/createContact`,formData,
     {

        headers:{
        "Content-Type": "multipart/form-data"
     }
    }
)
    }
    catch(error){
        console(error)
    }
   
    }
    return(
        <div className="formcontaine">
        <form className="forms" onSubmit={handleSubmit(send)}>
        <input type="text" placeholder="Name" name="Name"
         {...register('Name',{required:true})} />
        <input type="text" placeholder="Email" name="Email"
         {...register('Emailnpm',{required:true})}/>
        <input type="text" placeholder="subject" name="subject"
         {...register('subject',{required:true})}/>
        <input type="text" placeholder="Message" name="Message"
         {...register('Message',{required:true})}/>
        <button type="submit"className="create">createProduct</button>

        </form>
        </div>
    )

}
export default Homeproduct