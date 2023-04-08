import React from 'react'
import { Link } from 'react-router-dom'

const Competition_det_entry = () => {
    return (
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className="card">
                <div className="card-body">
                    <h2 className="card-title mb-3">Select Mode of Competition</h2>

                    <>
                        {/* Default radio */}
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault1"
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                <Link to='/onlineComp'>Online</Link>
                            </label>
                        </div>
                        {/* Default checked radio */}
                        <div className="form-check mb-3">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioDefault"
                                id="flexRadioDefault2"
                                defaultChecked=""
                            />
                            <label className="form-check-label" htmlFor="flexRadioDefault2">
                                <Link to='/offlineComp'>Offline</Link>
                            </label>
                        </div>
                    </>



                </div>
            </div>

        </div>
    )
}

export default Competition_det_entry