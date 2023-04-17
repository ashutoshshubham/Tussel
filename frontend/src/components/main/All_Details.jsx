import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';

const All_Details = () => {

    const [profile, setProfile] = useState([])

    const fetchProfiles = async() => {
      const res = await fetch('http://localhost:5000/organisation/getall');
      console.log(res.status)

      const data = await res.json();
      console.log(data)
      setProfile(data)
    }

    useEffect(() => {
      fetchProfiles();
    }, [])


  return (

    <div className='container'>
      <h2 className='text-center mx-3'>
        ORGANISATION DETAILS
      </h2>

      {profile.map((profiles) => (
        <div className="card mt-3">
        <div className="card-body">
          <h2 className="card-title">{profiles.org_name}</h2>
          <p className="card-text">
            {profiles.org_details}
          </p>
          <button type="button" className="btn btn-primary">
            Button
          </button>
        </div>
      </div>
      
      ))}






    </div>
  )
}

export default All_Details