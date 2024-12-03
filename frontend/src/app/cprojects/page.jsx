'use client';
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import axios from 'axios';
import toast from 'react-hot-toast';
import LoadingSpinner from '../loadingspinner/page'; // Adjust path if needed

const Projects = () => {
    const [projectData, setProjectData] = useState([]);
    const [loading, setLoading] = useState(true); // Initial state set to true to show loading on mount

    const fetchProjectData = async () => {
        try {
            const res = await axios.get('http://localhost:5165/project/getall');
            setProjectData(res.data);
        } catch (error) {
            toast.error("Failed to fetch project data.");
            console.error("Error fetching project data:", error);
        } finally {
            setLoading(false); // Set loading to false regardless of success or error
        }
    };

    useEffect(() => {
        fetchProjectData();
    }, []);

    if (loading) return <LoadingSpinner />; // Display spinner while loading is true

    return (
        <div className='bg-gray-50'>
            <div className='mx-10 py-5'>
                <div className='font-semibold'>
                    <h3 className='text-xl py-5'>2024 Program</h3>
                    <h2 className='text-6xl'>Projects</h2>
                </div>
                <div className='flex flex-col justify-between items-center md:mx-10'>
                    {projectData.map((project) => (
                        <div key={project._id} className='md:px-20 bg-white w-full md:w-4/5 shadow-xl rounded-2xl p-8 md:p-14 mt-6'>
                            <div className='md:flex md:justify-between'>
                                <div>
                                    <h3 className='text-slate-500'>Contributor</h3>
                                    <h2 className='text-3xl'>{project.contributor}</h2>
                                </div>
                                <div className='pt-4 md:pt-0'>
                                    <h3 className='text-slate-500'>Mentor</h3>
                                    <h2>{project.mentor}</h2>
                                </div>
                                <div className='pt-4 md:pt-0'>
                                    <h3 className='text-slate-500'>Organization</h3>
                                    <h2>{project.organization}</h2>
                                </div>
                            </div>
                            <p className='pt-8 md:pt-12'>{project.projectName}</p>
                            <p className='py-4 md:py-3'>{project.description}</p>
                            <div className='pt-6'>
                                <Link
                                    className='p-3 px-6 text-white bg-blue-600 hover:bg-blue-700 rounded-lg'
                                    href={'/projectdetails/' + project._id}>
                                    View Project Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
