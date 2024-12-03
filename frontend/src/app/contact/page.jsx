'use client';
import React from 'react'
import * as Yup from 'yup';
import { useFormik  } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';



const ContactSchema = Yup.object().shape({
    fName: Yup.string()
    .required('first name is required'),

    email: Yup.string()
    .email('Please enter a valid email address')
    .required('email is required'),

    pNumber: Yup.number()
    .min(10, 'please enter a valid phone number')
    .required('phone number is required'),

    details: Yup.string()
    .required('details is required'),
})




const Contact = () => {

    const contactForm = useFormik({
        initialValues: {
            fName: '',
            lName: '',
            email: '',
            pNumber: '',
            details: ''
        },
        onSubmit: (values, {resetForm}) => {
            console.log(values)

            axios.post('http://localhost:5165/contact/add', values)
            .then((result) => {
                console.log(result.status)
                resetForm()
                toast.success('Details Successfully Send')
            }).catch((err) => {
                console.log(err)
                toast.error('Failed to send details')
                
            });
        },
        validationSchema: ContactSchema
    })


    return (
        <div>
            <>
                {/* Contact Us */}
                <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="max-w-xl mx-auto">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                                Contact us
                            </h1>
                            <p className="mt-1 text-gray-600">
                                We'd love to talk about how we can help you.
                            </p>
                        </div>
                    </div>
                    <div className="mt-12 max-w-lg mx-auto">
                        {/* Card */}
                        <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
                            <h2 className="mb-8 text-xl font-semibold text-gray-800">
                                Fill in the form
                            </h2>
                            <form onSubmit={contactForm.handleSubmit}>
                                <div className="grid gap-4 lg:gap-6">
                                    {/* Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                        <div>
                                            <label
                                                htmlFor="hs-firstname-contacts-1"
                                                className="block mb-2 text-sm text-gray-700 font-medium"
                                            >
                                                First Name
                                            </label>
                                            {contactForm.errors.fName && contactForm.touched.fName ? (
                                                <div className='text-red-500 text-sm'>{contactForm.errors.fName}</div>
                                            ): null}
                                            <input
                                                type="text"
                                                name="fName"
                                                id="fName"
                                                onChange={contactForm.handleChange}
                                                value={contactForm.values.fName}
                                                className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="hs-lastname-contacts-1"
                                                className="block mb-2 text-sm text-gray-700 font-medium"
                                            >
                                                Last Name
                                            </label>
                                            {contactForm.errors.lName && contactForm.touched.lName ? (
                                                <div className='text-red-500 text-sm '>{contactForm.errors.lName}</div>
                                            ): null}
                                            <input
                                                type="text"
                                                name="lName"
                                                id="lName"
                                                onChange={contactForm.handleChange}
                                                value={contactForm.values.lName}
                                                className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            />
                                        </div>
                                    </div>
                                    {/* End Grid */}
                                    {/* Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 lg:gap-6">
                                        <div>
                                            <label
                                                htmlFor="hs-email-contacts-1"
                                                className="block mb-2 text-sm text-gray-700 font-medium"
                                            >
                                                Email
                                            </label>
                                            {contactForm.errors.email && contactForm.touched.email ? (
                                                <div className='text-red-500 text-sm'>{contactForm.errors.email}</div>
                                            ): null}
                                            <input
                                                type="email"
                                                name="email"
                                                id="email"
                                                onChange={contactForm.handleChange}
                                                values={contactForm.values.email}
                                                autoComplete="email"
                                                className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="pNumber"
                                                className="block mb-2 text-sm text-gray-700 font-medium"
                                            >
                                                Phone Number
                                            </label>
                                            {contactForm.errors.pNumber && contactForm.touched.pNumber ? (
                                                <div className='text-red-500 text-sm'>{contactForm.errors.pNumber}</div>
                                            ): null}
                                            <input
                                                type="number"
                                                name="pNumber"
                                                id="pNumber"
                                                onChange={contactForm.handleChange}
                                                value={contactForm.values.pNumber}
                                                className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            />
                                        </div>
                                    </div>
                                    {/* End Grid */}
                                    <div>
                                        <label
                                            htmlFor="hs-about-contacts-1"
                                            className="block mb-2 text-sm text-gray-700 font-medium"
                                        >
                                            Details
                                        </label>
                                        {contactForm.errors.details && contactForm.touched.details ? (
                                            <div className='text-red-500 text-sm'>{contactForm.errors.details}</div>
                                        ): null}
                                        <textarea
                                            id="details"
                                            name="details"
                                            onChange={contactForm.handleChange}
                                            value={contactForm.values.details}
                                            rows={4}
                                            className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            defaultValue={""}
                                        />
                                    </div>
                                </div>
                                {/* End Grid */}
                                <div className="mt-6 grid">
                                    <button
                                        type="submit"
                                        className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
                                    >
                                        Send inquiry
                                    </button>
                                </div>
                                <div className="mt-3 text-center">
                                    <p className="text-sm text-gray-500">
                                        We'll get back to you in 1-2 business days.
                                    </p>
                                </div>
                            </form>
                        </div>
                        {/* End Card */}
                    </div>

                </div>
                {/* End Contact Us */}
            </>

        </div>
    )
}

export default Contact