import React, { useEffect, useState } from 'react'

export default function Createform() {
    const data = {name:"" ,password:"" ,email:""};
    const [inputName,inputSet] = useState(data); 
    const [flag,setflag] = useState(false);

    useEffect(() =>{
        console.log("Registered")
    },[flag])


    function handlechange(e){
        inputSet({...inputName,[e.target.name]:e.target.value})
        console.log(inputName);

    }

    function submitform(e){
        e.preventDefault();
        if(!inputName.name || !inputName.password || !inputName.email){
            alert("All field Mandatory")
        }else{
            setflag(true);
        }

    }
  return (
    <>
    <pre>{(flag)?<h2>{inputName.name}, You've Registered successfully</h2> : ""}</pre>
    <form className='container mb-3' onSubmit={submitform}>
        <div className="position-relative">
            <h2 className='position-absolute top-50 start-50 translate-middle'>Registration form</h2>
        </div>
        <div className="mb-3 pt-5">
            <label className="form-label">Name</label>
            <input type="name" className="form-control" name="name" value={inputName.name} onChange={handlechange}/>
           </div>
        <div className="mb-3">
            <label className="form-label">Password</label>
            <input type="text" className="form-control" name="password" value={inputName.password} onChange={handlechange} />
        </div>
        <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="text" className="form-control" name="email" value={inputName.email} onChange={handlechange} />
        </div>
        
        <button type="submit" className="btn btn-outline-primary">Submit</button>
    </form>
    </>
  )
}
