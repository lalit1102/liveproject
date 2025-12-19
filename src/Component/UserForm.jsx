import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser, updateUser, clearEdit } from '../Features/User/userSlice'

const UserForm = () => {
  const dispatch = useDispatch()
  const editUser = useSelector((state) => state.lalit.editUser)
  const editIndex = useSelector((state) => state.lalit.editIndex)

  const [data, setData] = useState({ name: '', email: '', password: '' })

  useEffect(() => {
    if (editUser) setData(editUser)
    else setData({ name: '', email: '', password: '' })
  }, [editUser])

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const savedata = (e) => {
    e.preventDefault()
    if (editUser && editIndex !== null) {
      dispatch(updateUser({ id: editIndex, users: data }))
      dispatch(clearEdit())
    } else {
      dispatch(addUser(data))
    }
    setData({ name: '', email: '', password: '' })
  }

  return (
    <div>
      <form onSubmit={savedata}>
        <table>
          <tbody>
            <tr>
              <td>
                <label>Name: </label>
                <input
                  type="text"
                  name="name"
                  placeholder="enter name"
                  value={data.name}
                  onChange={handleChange}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Email : </label>
                <input
                  type="email"
                  name="email"
                  placeholder="enter email"
                  onChange={handleChange}
                  value={data.email}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>Password: </label>
                <input
                  type="password"
                  name="password"
                  placeholder="enter password"
                  onChange={handleChange}
                  value={data.password}
                />
              </td>
            </tr>
            <tr>
              <td>
                <button type="submit">{editUser ? 'Update' : 'Save'}</button>
                {editUser && (
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(clearEdit())
                      setData({ name: '', email: '', password: '' })
                    }}
                    style={{ marginLeft: 8 }}
                  >
                    Cancel
                  </button>
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  )
}

export default UserForm
