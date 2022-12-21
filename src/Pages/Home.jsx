import React from 'react'
import { MdAccountCircle } from 'react-icons/md'
import {Link} from "react-router-dom"
import TableRow from '../components/TableRow'
import users from '../userData'
const Home = () => {
  return (
    <div>
        <h1 className='text-center mt-1'> <MdAccountCircle size={50}
         color = {"red"}  />User App</h1>
        <div className='row my-4'>
            <div className='col-10 '>
                <input type="search"
                    className='form-control w-50 mx-auto'
                    placeholder='Search Anything....!'
                />
            </div>
            <div className='col-2 '>
                {/* <button className='btn btn-primary form-control'>Add Users !</button> */}
                <Link className='btn btn-primary form-control' to="/Adduser">Add Users !</Link>

            </div>
        </div>
        <table className="table bg-dark text-white">
            <thead>
            <tr>
                <th >Sr.No</th>
                <th >First Name</th>
                <th >Last Name</th>
                <th>Email Addreess</th>
                <th>Contact</th>
                <th></th>
                <th></th>
             </tr>
            </thead>
            <tbody>
                {
                    users.map((row , index)=>{
                        return(
                            <TableRow key={index} srNo ={index} firstName = {row.firstName} lastName = {row.lastName} emailId = {row.emailId} contact ={row.contactNumber} />

                        )
                    })
                }
            </tbody>
        </table>
        {/* <Add /> */}
    </div>
  )
}

export default Home