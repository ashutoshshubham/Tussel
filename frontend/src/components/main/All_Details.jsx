import React, { useState } from 'react'

const All_Details = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')))
  console.log(currentUser)

  



  return (

    <div className='container'>






    </div>
  )
}

export default All_Details