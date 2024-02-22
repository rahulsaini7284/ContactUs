import React, {  useEffect, useMemo, useState } from 'react'
import "./Css/contactUs.css"

const Contactus = () => {
    const [show,setShow]=useState(false)

    const submitHandler=(e)=>{
        e.preventDefault();
        setShow(true)
    }
    const hideAlert=(e)=>{
        e.preventDefault();
        setShow(false)
    }

  return (
    <>
    <div className='alert' style={{display:show?"flex":"none"}}>We received your message. Our team will contact you shortly with the solution to your query. <button onClick={hideAlert}>Okah!!</button></div>
    <div className="container" style={{filter:show?"blur(4px)":""}} >
        <div className='navbar'><h1>Logo</h1> <h1>Round One: Practical</h1></div>
        <div className='contact-us'><span className='side-line left'/><h1>Contact Us Form</h1><span className='side-line right'/></div>
       <div className='parent'>
        
       <form action="" onSubmit={submitHandler}>
            <input placeholder='First Name' type="text" name="firstName" id="firstName" />
            <input placeholder='Last Name' type="text" name="lastName" id="lastName" />
            <input placeholder='Phone Number' type="number" name="phoneNumber" id="phoneNumber" />
            <input placeholder='Email' type="email" name="email" id="email" />
            <input placeholder='About Yourself' type="text" name="aboutYourself" id="aboutYourself" />
            <button className='btn' type='submit'>Submit</button>
            <div className='box-container'>
                <div className="box box-one"> <span style={{fontWeight:700}}>Office Address: </span> QUARK ATRIUM, Industrial Area, Sector 74, Sahibzada Ajit Singh Nagar, Punjab 160072 </div>
                <div className="box box-two"><span style={{fontWeight:700}}>Mail: </span> info@codigomantra.com</div>
                <div className="box box-three"><span style={{fontWeight:700}}>Contact: </span>+91 9915202212</div>
            </div>
        </form>
       </div>
        <div className='footer'><h1>Assignment </h1><p>This is your round one for evaluating your skills</p></div>
    </div>
    </>
  )
}

export default Contactus