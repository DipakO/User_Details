import React from 'react'
import { Link } from 'react-router-dom'
import {MdDeleteForever , MdCheck} from "react-icons/md"
const TableRow = ({srNo, firstName , lastName , emailId , contact}) => {
  return (
    
            <tr>
                <td>{srNo+1}</td>
                <td>{firstName}</td>
                <td>{lastName}</td>
                <td>{emailId}</td>
                <td>{contact}</td>
                <td><Link to={`./Edit/${firstName}/${lastName}/${emailId}/${contact}`}
                 className='btn btn-success'><MdCheck size={30} /> Edit</Link></td>
                <td><button className='btn btn-danger'><MdDeleteForever size={30} /> Delete</button></td>
           {/* <delete_forever /> */}
    
            </tr>
           
      
  )
}

export default TableRow