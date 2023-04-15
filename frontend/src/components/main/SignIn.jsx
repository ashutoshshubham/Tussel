import React from 'react'
import { Formik } from "formik"
import { Link, useNavigate } from 'react-router-dom'
import Swal from "sweetalert2"

const SignIn = () => {
    const navigate = useNavigate();

    const loginSubmit = async (formdata, { resetForm, setSubmitting }) => {
        console.log(formdata)
        resetForm()
        setSubmitting(true)

        const res = await fetch('http://localhost:5000/user/authenticate', {
            method: 'POST',
            body: JSON.stringify(formdata),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        console.log(res.status)

        if (res.status === 200) {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Login Successful'
            })
            const data = (await res.json());
            console.log(data);
            sessionStorage.setItem('user', JSON.stringify(data));
            navigate('/organisationPro');
        }
        else if (res.status === 401) {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Email or Password is incorrect'
            })
        }
        else {
            Swal.fire({
                iicon: 'error',
                title: 'Error',
                text: 'Something went wrong'
            })
        }

        setTimeout(() => {
            setSubmitting(false)
        }, 2000)
    }

    return (

        // <div className='col-md-3 mx-auto mt-5'>

        //   <Card className='mb-5'>
        //     <CardContent>
        //       <TextField fullWidth variant='standard' sx={{mb: 5}} label="Email Address" value={""} />
        //       <TextField fullWidth type="password" variant='standard' sx={{mb: 5}} label="Password" value={""}/>

        //       <Button color='primary' fullWidth>Submit</Button>
        //     </CardContent>
        //   </Card>



        // </div>

        <div className='container'>

            <div className="col-md-6 mx-auto mt-3 mb-5">
                    
                    <h1 className='text-center'>LOGIN FORM</h1>

                <div className="">
                    <img src="https://theuniqueacademy.co.in/assets/images/test.png" alt="" style={{ width: '100%' }} />
                </div>

                <div className="my-auto">


                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={loginSubmit}>
                        {({ values, handleSubmit, handleChange, isSubmitting }) => (
                            <form onSubmit={handleSubmit}>
                                <label>Email Address</label>
                                <input required type="email" className="form-control mb-3" value={values.email} name="email" onChange={handleChange} />

                                <label>Password</label>
                                <input required type="password" className="form-control mb-3" value={values.password} name="password" onChange={handleChange} />

                                <Link to="/forgetpswd" className="">
                                    Forgot Password
                                </Link>

                                <button type="submit" className="btn btn-success w-100 my-2">
                                    {isSubmitting ? <span className="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span> : "Submit"}
                                </button>
                            </form>
                        )}
                    </Formik>

                </div>

            </div>

        </div>




    )
}

export default SignIn