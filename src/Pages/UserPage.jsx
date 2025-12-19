import React from 'react'
import UserForm from '../Component/UserForm'
import UserTable from '../Component/UserTable'

export default function UserPage() {
  return (
    <div className="user-page">
      <h2>Users</h2>
      <div style={{display: 'flex', gap: 24}}>
        <UserForm />
        <UserTable />
      </div>
    </div>
  )
}
