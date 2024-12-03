import React from 'react'

const About = () => {
    return (
        <div className=''>
            <section className='my-6 mx-6'>

                <h2 className='block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl text-center md:mb-10'>Who We Are?</h2>
                <div className='md:flex md:justify-between md:items-center md:mx-24'>
                    <div className='md:mr-10'>
                        <img className='rounded-xl  my-6' src="/about.jpg" alt="" />
                    </div>
                    <div>
                        <span className='font-semibold'><span className='text-lg font-bold'>Welcome to Code Collab</span> — Your go-to platform for discovering open-source projects tailored to your skills and interests! Whether you're a seasoned developer or just starting out, Code Contributor makes it easy to find repositories where you can contribute, grow, and make an impact. We believe in the power of collaboration and aim to bridge the gap between talented developers and meaningful projects, fostering an inclusive, thriving open-source community.</span>
                    </div>
                </div>
                <div className='md:mx-24 mt-10'>
                    <div><span className='font-bold text-xl'>What We Offer?</span>

                        <div className='py-3'><span className='text-lg font-bold'>Curated Project Listings:</span>Explore a carefully curated collection of repositories from across the web. We categorize projects by language, level of experience, and contribution type to help you find the right fit.</div>

                        <div className='py-3'><h5 className='text-lg font-bold'>Skill-Based Matching:</h5> Enter your skill set and interests, and we'll match you with projects where you can make the most impact, while enhancing your expertise.</div>

                        <div className='py-3'><h5 className='text-lg font-bold'>Beginner-Friendly Projects:</h5> For those new to open source, we highlight repositories with clear documentation and beginner-friendly issues, making it easier to dive in and contribute.</div>

                        <div className='py-3'><h5 className='text-lg font-bold'>Collaboration Tools:</h5> Connect with project maintainers, track your contributions, and celebrate your milestones as part of the Code Contributor community.</div></div>
                </div>
                <div>
                    <div className='md:mx-24 mt-10'><h2 className='font-bold text-xl'>Our Mission</h2>

                        <div className='py-3'>
                            Our mission is to empower developers at all levels to find rewarding open-source contributions, build connections, and accelerate their professional growth. We believe open source is for everyone, and Code Contributor is here to help you find your place in it.</div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default About