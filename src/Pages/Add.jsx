import React from 'react'
import { useNavigate } from 'react-router-dom';
const Add = () => {
  const navigate = useNavigate()
  return (
    <div >
      <h1 className='text-center'>Add New Users..!</h1>
      
      <form className='form' onSubmit={
        (e)=>{
          e.preventDefault();
          alert("Users Detels Submitted Succesfully....!")
          navigate("/")
        }
      }>
      <div>
        <label className='text-center'>Enter First Name</label>
        <input type="text" placeholder='Enter First Name'className='w-50'id='i1' />
      </div>
      <div>
        <label>Enter Last Name</label>
        <input type="text" placeholder='Enter Last Name'className='w-50'id='i2' />
      </div>
      <div>
        <label>Enter Email Address </label>
        <input type="email"placeholder='Enter Email Address'className='w-50' id='i3' />
      </div>
      <div>
        <label>Enter Contanct Number</label>
        <input type="number" placeholder='Enter Contanct Number'className='w-50' id='i4' />
      </div>
        <div>
        <button className='btn btn-success ' id='subbtn'>Submit here</button>
      </div>
      </form>
      
    </div>
  )
}

export default Add