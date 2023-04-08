import React from 'react'
import Swal from 'sweetalert2'
import { Formik } from 'formik'

const Online_Comp = () => {

  
  const onlineData = async (formdata, {resetForm}) => {
    
    console.log(formdata)
    resetForm()
    
    const res = await fetch('http://localhost:5000/online/add', {
      method: 'POST',
      body: JSON.stringify({formdata}),
      headers: {
        'Content-Type': 'application/json'
      }
    })

    console.log(res.status)

    if (res.status === 200) {
      Swal.fire({
        icon: 'success',
        title: 'Success',
        text: 'Signed Successfully'
      })
    }
    
  }




  return (
    <div>
      <div className="card w-50 mx-auto mt-3">
        <div className="card-body">
          <h2 className="card-title text-center mb-5">ONLINE COMPETITION DESCRIPTION</h2>


          <button type="button" className="btn btn-primary">
            Button
          </button>
        </div>
      </div>

    </div>
  )
}

export default Online_Comp