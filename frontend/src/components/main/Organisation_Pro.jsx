import React, { useEffect, useState } from 'react'
import { Formik } from 'formik'

const Organisation_Pro = () => {

    const [org, setOrg] = useState([])

    const fetchOrgData = async (id) => {
        const res = await fetch('http://localhost:5000/organisation/getbyid/' + id)

        const data = await res.json();
        console.log(data)
        setOrg(data)
    }

    // console.log(res.status)

    useEffect(() => {
        fetchOrgData();
    }, [])

    const orgSubmit = async (formdata, { resetForm }) => {


        console.log(formdata)
        resetForm()

        const res = await fetch('http://localhost:5000/organisation/add', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        console.log(res.status)
    }





    return (
        <div>
            <div className="card w-50 mx-auto mt-2">
                <div className="card-body">
                    <h2 className="card-title text-center mb-5">ORGANISATION DETAIL</h2>
                    <div className="mb-2">
                        <label className="form-label" htmlFor="formControlDisabled">
                            Name
                        </label>
                        <input
                            className="form-control"
                            id="formControlDisabled"
                            type="text"
                            aria-label="disabled input example"
                            disabled

                        />
                    </div>
                    <div className="mb-2">
                        <label className="form-label" htmlFor="formControlDisabled">
                            Email
                        </label>
                        <input
                            className="form-control"
                            id="formControlDisabled"
                            type="text"
                            aria-label="disabled input example"
                            disabled
                        />
                    </div>

                    <Formik
                        initialValues={{ org_name: '', org_details: '' }}
                        onSubmit={orgSubmit}>
                        {({ values, handleChange, handleSubmit }) => (
                            <form onSubmit={handleSubmit}>

                                <div className="mb-2">
                                    <label className="form-label" htmlFor="form12">
                                        Organisation Name
                                    </label>
                                    <input type="text" id="form12" className="form-control" name='org_name' onChange={handleChange} value={values.org_name}/>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label" htmlFor="textAreaExample">
                                        Organisation Details
                                    </label>
                                    <textarea
                                        className="form-control"
                                        id="textAreaExample"
                                        rows={4}
                                        name='org_details'
                                        onChange={handleChange}
                                        value={values.org_details}
                                    />
                                </div>

                                <button type="submit" className="btn btn-primary">
                                    Submit
                                </button>


                            </form>
                        )}
                    </Formik>



                </div>
            </div>

        </div>
    )
}

export default Organisation_Pro