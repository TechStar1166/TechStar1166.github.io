import React from 'react'

const UserName = ({ placeholder, type, value, setValue }) => (

  <input
    type={type}
    placeholder={placeholder}
    value={value}
    onChange={e => setValue(e.target.value)}
  />
)

export default UserName