import React from 'react'
import Card from './Card'

const Parent = () => {
    const users = [
        {id: 1, name: "Nguyen Van A", email: "a@gmail.com", role: "Admin"},
        {id: 2, name: "Tran Thi B", email: "b@gmail.com", role: "User"},
        {id: 3, name: "Le Van C", email: "c@gmail.com", role: "Admin"},
    ]

  return (
    <div>
        <Card user={users[0]} />
        <h2>Render list users</h2>
        {/* Muốn hiển thị list data */}
        {/* => map */}
        {/* code javascript phải được bao bọc trong dấu {} */}
        {
            users.map((user) => {
                return (
                    <Card key={user.id} user={user} />
                )
            })
        }
    </div>
  )
}

export default Parent