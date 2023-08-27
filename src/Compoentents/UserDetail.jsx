import React, { useContext } from 'react'
import { DataContext } from './Context/DataContext'
const UserDetail = () => {
    const detail =useContext(DataContext)
    // console.log(`detail`,detail);
  return (
    <>
      <div>{detail.name}</div>
      <div>{detail.title}</div>
      </>
      )
}

export default UserDetail