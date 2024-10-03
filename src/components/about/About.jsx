import React from 'react'
// import aboutpic from '../assets/aboutpic.png'
//import { mypic } from '../../assets/index'
import { myProfile } from '../../assets/index'
import Title from '../layouts/Title'

const About = () => {
    return (
        <section id='about' className="w-full py-20 border-b-[1px] border-b-black">
            <Title title="about" des="who i am" />
            <div className=' text-white py-[10px]'>
                <div className='max-w-[1170px] mx-auto '>

                    <div className='flex lg:flex-row md:flex-col flex-col'>
                        

                        <div className="w-full  lgl:w-1/2 flex justify-center items-center relative">
                            <img
                                className="w-[300px] h-[400px] lgl:w-[500px] lgl:h-[600px] z-10 "
                                src={myProfile}
                                alt="bannerImg"
                                style={{ backgroundColor: "transparent;" }}
                            />
                            <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[500px] lgl:h-[500px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center"></div>
                        </div>

                        <div className='basis-[55%] flex flex-col justify-center  md:order-2 order-1 mt-[50px]'>
                            <div >
                                <h2 className="md:text-4xl md:text-start md:font-medium text-white text-4xl text-center  ">About<span className='text-designColor'>Me</span></h2>
                                <h3 className='py-2 text-4xl font-bold text-white md:text-start text-center'>Frontend Developer</h3>
                            </div>
                            <div className='md:text-start text-center'>
                                <p className=''>I am Shahbaz Ahmed,  a dedicated frontend developer with a strong background in web development.I have completed a comprehensive web development course from 10Pearls University, where I honed my skills in HTML, CSS, and JavaScript.</p>

                                <p>My passion lies in crafting visually appealing and user-friendly websites. I am committed to staying updated with the latest trends and technologies in web development to ensure that my work meets modern standards.</p>
                            </div>

                        </div>

                    </div>







                </div>
            </div>
        </section >





    )
}

export default About
