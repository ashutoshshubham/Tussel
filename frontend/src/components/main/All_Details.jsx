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






    </div>
  )
}

export default All_Details