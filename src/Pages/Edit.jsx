import React from 'react'
import { useState } from 'react';
import { useParams , useNavigate } from 'react-router-dom';

const Edit = () => {
  const [firstName1 , setFirstName1] = useState()
  const [lastName1 , setLastName1] = useState()
  const [emailId1 , setEmailId1] = useState()
  const [contact1 , setContact1] = useState()

  const {firstName, lastName, emailId , contact} = useParams()

  const nevigate = useNavigate()

  const handleSubmit = (e)=>{
    e.preventDefault();

    const data = {
      firstName1 : firstName1,
      lastName : lastName1,
      emailId : emailId1,
      contact : contact1
    }

    console.log(data)
    alert("Upadete information succesfully...")
    nevigate("/")
  };
  return (
    <div>
         <h1 className='text-center'>Edit here..!</h1>
      <form action="" className='form'  onSubmit={handleSubmit}>
      <div>
        <label className='text-center'>Enter First Name</label>
        <input type="text" placeholder='Enter First Name'className='w-50'id='i1'
        onChange={(e)=>setFirstName1(e.target.value)}
        defaultValue = {firstName}
        />
      </div>
      <div>
        <label>Enter Last Name</label>
        <input type="text" placeholder='Enter Last Name'className='w-50'id='i2'
         onChange={(e)=>setLastName1(e.target.value)}
         defaultValue={lastName}
        />
      </div>
      <div>
        <label>Enter Email Address </label>
        <input type="email"placeholder='Enter Email Address'className='w-50' id='i3'
         onChange={(e)=>setEmailId1(e.target.value)}
        defaultValue={emailId}
        />
      </div>
      <div>
        <label>Enter Contanct Number</label>
        <input type="number" placeholder='Enter Contanct Number'className='w-50' id='i4'
         onChange={(e)=>setContact1(e.target.value)}
         defaultValue={contact}
        />
      </div>
        <div>
        <button className='btn btn-success ' id='subbtn'>Submit here</button>
      </div>
      </form>
    </div>
  )
}

export default Edit