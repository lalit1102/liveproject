import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { deleteData, editData } from '../Features/User/userSlice'

const UserTable = () => {
  const dispatch = useDispatch()
  const alldata = useSelector((state) => state.lalit.users)

  if (!alldata || alldata.length === 0) return <div>No users yet</div>

  return (
    <div>
      <div>
        <table border={2}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Password</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {alldata.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.password}</td>
                  <td>
                    <button onClick={() => dispatch(editData(index))}>Edit</button>
                    <button onClick={() => dispatch(deleteData(index))}>Delete</button>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default UserTable
