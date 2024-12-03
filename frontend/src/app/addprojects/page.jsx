'use client';
import React from 'react'
import { useFormik  } from 'formik';
import axios from 'axios';
import toast from 'react-hot-toast';



const Addproject = () => {

    const addprojectForm = useFormik({
        initialValues: {
          contributor: '',
          mentor: '',
          topics: '',
          organization: '',
          projectName: '',
          technologies: '',
          description: '',
          projectDetails: ''
        },
        onSubmit: (values, {resetForm}) => {
            console.log(values)

            axios.post('http://localhost:5165/project/add', values)
            .then((result) => {
                console.log(result.status)
                resetForm()
                toast.success('Project add successfully')
            }).catch((err) => {
                console.log(err)
                toast.error('Failed to add project')
            });
        },
    })


    return (
        <div>
            <>
                <div className=" px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                    <div className="max-w-xl mx-auto">
                        <div className="text-center">
                            <h1 className="text-3xl font-bold text-gray-800 sm:text-4xl">
                                Add Project Details
                            </h1>
                        </div>
                    </div>
                    <div className="mt-12 md:w-1/2 mx-auto">
                        {/* Card */}
                        <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-8">
                            <h2 className="mb-8 text-xl font-semibold text-gray-800">
                                Add project
                            </h2>
                            <form onSubmit={addprojectForm.handleSubmit}>
                                <div className="grid gap-4 lg:gap-6">
                                    {/* Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                                        <div>
                                            <label
                                                htmlFor="hs-firstname-contacts-1"
                                                className="block mb-2 text-sm text-gray-700 font-medium"
                                            >
                                                Contributor
                                            </label>
                                            {addprojectForm.errors.contributor && addprojectForm.touched.contributor ? (
                                                <div className='text-red-500 text-sm'>{addprojectForm.errors.contributor}</div>
                                            ): null}
                                            <input
                                                type="text"
                                                id="contributor"
                                                onChange={addprojectForm.handleChange}
                                                value={addprojectForm.values.contributor}
                                                className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="hs-lastname-contacts-1"
                                                className="block mb-2 text-sm text-gray-700 font-medium"
                                            >
                                                Mentor
                                            </label>
                                            {addprojectForm.errors.mentor && addprojectForm.touched.mentor ? (
                                                <div className='text-red-500 text-sm '>{addprojectForm.errors.mentor}</div>
                                            ): null}
                                            <input
                                                type="text"
                                                id="mentor"
                                                onChange={addprojectForm.handleChange}
                                                value={addprojectForm.values.mentor}
                                                className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="hs-lastname-contacts-1"
                                                className="block mb-2 text-sm text-gray-700 font-medium"
                                            >
                                                Topics
                                            </label>
                                            {addprojectForm.errors.topics && addprojectForm.touched.topics ? (
                                                <div className='text-red-500 text-sm '>{addprojectForm.errors.topics}</div>
                                            ): null}
                                            <input
                                                type="text"
                                                id="topics"
                                                onChange={addprojectForm.handleChange}
                                                value={addprojectForm.values.topics}
                                                className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            />
                                        </div>
                                    </div>
                                    {/* End Grid */}
                                    {/* Grid */}
                                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
                                        <div>
                                            <label
                                                htmlFor="hs-email-contacts-1"
                                                className="block mb-2 text-sm text-gray-700 font-medium"
                                            >
                                                Organization
                                            </label>
                                            {addprojectForm.errors.organization && addprojectForm.touched.organization ? (
                                                <div className='text-red-500 text-sm'>{addprojectForm.errors.organization}</div>
                                            ): null}
                                            <input
                                                type="text" 
                                                id="organization"
                                                onChange={addprojectForm.handleChange}
                                                values={addprojectForm.values.organization}
                                                autoComplete="email"
                                                className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="pNumber"
                                                className="block mb-2 text-sm text-gray-700 font-medium"
                                            >
                                                Project Name
                                            </label>
                                            {addprojectForm.errors.projectName && addprojectForm.touched.projectName ? (
                                                <div className='text-red-500 text-sm'>{addprojectForm.errors.projectName}</div>
                                            ): null}
                                            <input
                                                type="text"
                                                id="projectName"
                                                onChange={addprojectForm.handleChange}
                                                value={addprojectForm.values.projectName}
                                                className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            />
                                        </div>
                                        <div>
                                            <label
                                                htmlFor="pNumber"
                                                className="block mb-2 text-sm text-gray-700 font-medium"
                                            >
                                                Technologies
                                            </label>
                                            {addprojectForm.errors.technologies && addprojectForm.touched.technologies ? (
                                                <div className='text-red-500 text-sm'>{addprojectForm.errors.technologies}</div>
                                            ): null}
                                            <input
                                                type="text"
                                                id="technologies"
                                                onChange={addprojectForm.handleChange}
                                                value={addprojectForm.values.technologies}
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
                                            Description
                                        </label>
                                        {addprojectForm.errors.description && addprojectForm.touched.description ? (
                                            <div className='text-red-500 text-sm'>{addprojectForm.errors.description}</div>
                                        ): null}
                                        <textarea
                                            id="description"
                                            onChange={addprojectForm.handleChange}
                                            value={addprojectForm.values.description}
                                            rows={4}
                                            className="py-3 px-4 block w-full border border-gray-400 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none"
                                            defaultValue={""}
                                        />
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="hs-about-contacts-1"
                                            className="block mb-2 text-sm text-gray-700 font-medium"
                                        >
                                            Project Details
                                        </label>
                                        {addprojectForm.errors.projectDetails && addprojectForm.touched.projectDetails ? (
                                            <div className='text-red-500 text-sm'>{addprojectForm.errors.projectDetails}</div>
                                        ): null}
                                        <textarea
                                            id="projectDetails"
                                            onChange={addprojectForm.handleChange}
                                            value={addprojectForm.values.projectDetails}
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
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* End Card */}
                    </div>

                </div>
            </>

        </div>
    )
}

export default Addproject