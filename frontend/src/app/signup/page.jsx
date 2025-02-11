'use client';
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from 'yup';
import {useRouter} from 'next/navigation'
import toast from 'react-hot-toast';
import axios from 'axios';



const SignupSchema = Yup.object().shape({
  name: Yup.string()
  .required('name is required'),

  email: Yup.string()
    .email('Please enter a valid email address')
    .required('email is required'),

  password: Yup.string()
  .min(8, 'password must be at least 8 characters')
  .matches(/[a-z]/, 'password must contain at least one lowercase letter')
  .matches(/[A-z]/, 'password must contain at least one uppercase letter')
  .matches(/[0-9]/, 'password must contain at least one number')
  .matches(/[!@#$%^&*()_+=\[\]<>:;,.'"\/?{}]/, 'password must contain at least one character')
  .required('password is required'),

})

const Signup = () => {

  const router = useRouter()

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },
    onSubmit: (values, {resetForm}) => {
      console.log(values)

      axios.post('http://localhost:5165/user/add', values)
      .then((result) => {
        console.log(result.status)
        resetForm()
        toast.success('User added Successfully')
        router.push('/login')
      }).catch((err) => {
        console.log(err)
        toast.error('Failed to add user')
      });
    },
    validationSchema: SignupSchema
  })



  return (
    <div>
      <section className="relative py-12 2xl:py-12 min-h-screen">
        <img
          className="hidden lg:block absolute inset-0 mt-32"
          src="zospace-assets/lines/line-mountain.svg"
          alt=""
        />
        <img
          className="hidden lg:block absolute inset-y-0 right-0 -mr-40 -mt-32"
          src="zospace-assets/lines/line-right-long.svg"
          alt=""
        />
        <div className="relative container px-4 mx-auto">
          <div className="max-w-5xl mx-auto">
            <div className="flex flex-wrap items-center -mx-4">
              <div className="w-full lg:w-1/2 px-4 mb-16 lg:mb-0">
                <div className="max-w-md">
                  <span className="text-lg text-blue-400 font-bold">
                    Register Account
                  </span>
                  <h2 className="mt-8 mb-12 text-5xl font-bold font-heading">
                    Start your journey by creating an account.
                  </h2>
                  <p className="text-lg">
                    <span>The brown fox jumps over</span>
                    <span className="">the lazy dog.</span>
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/2 px-4">
                <div className="px-6 lg:px-20 py-12 lg:py-24 bg-gray-600 rounded-lg">
                  <form onSubmit={signupForm.handleSubmit}>
                    <h3 className="mb-10 text-2xl text-white font-bold font-heading">
                      Register Account
                    </h3>
                    <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                      <span className="inline-block pr-3 py-2 border-r border-gray-50">
                        <svg
                          className="w-5 h-5"  
                          width={31}
                          height={32}
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5zM12 14c-3.867 0-7 3.133-7 7h2c0-2.761 2.239-5 5-5s5 2.239 5 5h2c0-3.867-3.133-7-7-7z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      {signupForm.errors.name && signupForm.touched.name ? (
                        <div className='text-red-500 text-sm'>{signupForm.errors.name} </div>
                      ): null}
                      <input
                        className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none"
                        type="name"
                        id='name'
                        onChange={signupForm.handleChange}
                        value={signupForm.values.name}
                        placeholder="Username"
                      />
                    </div>
                    <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                      <span className="inline-block pr-3 py-2 border-r border-gray-50">
                        <svg
                          className="w-5 h-5"
                          width={20}
                          height={21}
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M7.29593 0.492188C4.81333 0.492188 2.80078 2.50474 2.80078 4.98734C2.80078 7.46993 4.81333 9.48248 7.29593 9.48248C9.77851 9.48248 11.7911 7.46993 11.7911 4.98734C11.7911 2.50474 9.77851 0.492188 7.29593 0.492188ZM3.69981 4.98734C3.69981 3.00125 5.30985 1.39122 7.29593 1.39122C9.28198 1.39122 10.892 3.00125 10.892 4.98734C10.892 6.97342 9.28198 8.58346 7.29593 8.58346C5.30985 8.58346 3.69981 6.97342 3.69981 4.98734Z"
                            fill="black"
                          />
                          <path
                            d="M5.3126 10.3816C2.38448 10.3816 0.103516 13.0524 0.103516 16.2253V19.8214C0.103516 20.0696 0.304772 20.2709 0.55303 20.2709H14.0385C14.2867 20.2709 14.488 20.0696 14.488 19.8214C14.488 19.5732 14.2867 19.3719 14.0385 19.3719H1.00255V16.2253C1.00255 13.4399 2.98344 11.2806 5.3126 11.2806H9.27892C10.5443 11.2806 11.6956 11.9083 12.4939 12.9335C12.6465 13.1293 12.9289 13.1644 13.1248 13.0119C13.3207 12.8594 13.3558 12.5769 13.2033 12.381C12.2573 11.1664 10.8566 10.3816 9.27892 10.3816H5.3126Z"
                            fill="black"
                          />
                          <rect
                            x={15}
                            y={15}
                            width={5}
                            height={1}
                            rx="0.5"
                            fill="black"
                          />
                          <rect
                            x={17}
                            y={18}
                            width={5}
                            height={1}
                            rx="0.5"
                            transform="rotate(-90 17 18)"
                            fill="black"
                          />
                        </svg>
                      </span>
                      {signupForm.errors.email && signupForm.touched.email ? (
                      <div className='text-red-500 text-sm'>{signupForm.errors.email} </div>
                      ): null}
                      <input
                        className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none"
                        type="email"
                        id='email'
                        onChange={signupForm.handleChange}
                        value={signupForm.values.email}
                        placeholder="example@habib.me"
                      />
                    </div>
                    <div className="flex items-center pl-6 mb-3 bg-white rounded-full">
                      <span className="inline-block pr-3 py-2 border-r border-gray-50">
                        <svg
                          className="w-5 h-5"
                          width={17}
                          height={21}
                          viewBox="0 0 17 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M15.184 8.48899H15.2011V6.25596C15.2011 2.6897 12.3193 0 8.49924 0C4.67919 0 1.7974 2.6897 1.7974 6.25596V8.48899H1.81568C0.958023 9.76774 0.457031 11.3049 0.457031 12.9569C0.457031 17.3921 4.06482 21 8.49924 21C12.9341 21 16.5424 17.3922 16.5428 12.9569C16.5428 11.3049 16.0417 9.76774 15.184 8.48899ZM2.69098 6.25596C2.69098 3.14895 5.13312 0.893578 8.49924 0.893578C11.8654 0.893578 14.3075 3.14895 14.3075 6.25596V7.39905C12.8423 5.86897 10.7804 4.91468 8.49966 4.91468C6.21837 4.91468 4.15607 5.86946 2.69098 7.40017V6.25596ZM8.49966 20.1064C4.55762 20.1064 1.35061 16.8989 1.35061 12.9569C1.35061 9.01534 4.5572 5.80826 8.49924 5.80826C12.4422 5.80826 15.6488 9.01534 15.6492 12.9569C15.6492 16.8989 12.4426 20.1064 8.49966 20.1064Z"
                            fill="black"
                          />
                          <path
                            d="M8.49957 8.93567C7.26775 8.93567 6.26562 9.93779 6.26562 11.1696C6.26562 11.8679 6.60247 12.5283 7.1592 12.9474V14.7439C7.1592 15.4829 7.76062 16.0843 8.49957 16.0843C9.2381 16.0843 9.83994 15.4829 9.83994 14.7439V12.9474C10.3966 12.5278 10.7335 11.8679 10.7335 11.1696C10.7335 9.93779 9.7309 8.93567 8.49957 8.93567ZM9.16793 12.3228C9.03032 12.4023 8.94636 12.5502 8.94636 12.7088V14.7439C8.94636 14.9906 8.74572 15.1907 8.49957 15.1907C8.25342 15.1907 8.05278 14.9906 8.05278 14.7439V12.7088C8.05278 12.5502 7.96833 12.4032 7.83072 12.3228C7.41026 12.078 7.1592 11.6468 7.1592 11.1696C7.1592 10.4307 7.76062 9.82925 8.49957 9.82925C9.2381 9.82925 9.83994 10.4307 9.83994 11.1696C9.83994 11.6468 9.58881 12.078 9.16793 12.3228Z"
                            fill="black"
                          />
                        </svg>
                      </span>
                      {signupForm.errors.password && signupForm.touched.password ? (
                      <div className='text-red-500 text-sm'>{signupForm.errors.password} </div>
                      ): null}
                      <input
                        className="w-full pl-4 pr-6 py-4 font-bold placeholder-gray-900 rounded-r-full focus:outline-none"
                        type="password"
                        id='password'
                        onChange={signupForm.handleChange}
                        value={signupForm.values.password}
                        placeholder="Password"
                      />
                    </div>

                    <div className="inline-flex mb-10">
                      <input className="mr-4" type="checkbox" />
                      <p className="-mt-2 text-sm text-gray-200">
                        By singning up, you agree to our{" "}
                        <a className="text-white" href="#">
                          Terms, Data Policy
                        </a>
                        and{" "}
                        <a className="text-white" href="#">
                          Cookies.
                        </a>
                      </p>
                    </div>
                    <button className="py-4 w-full bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-full transition duration-200">
                      Get started
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Signup