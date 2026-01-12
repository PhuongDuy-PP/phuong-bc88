import React from 'react'

//  C1: props là 1 object chứa tất cả các thuộc tính được truyền từ component cha
// C2: destructing
// LƯU Ý:
// - component con KHÔNG được sửa dữ liệu trực tiếp
// của component cha
const Child = ({name, age}) => {
  return (
    <div>
        Child
        <h2>{name}</h2>
        <p>{age}</p>
    </div>
  )
}

export default Child