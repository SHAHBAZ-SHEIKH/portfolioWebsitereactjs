import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSCS in Computer Science"
            subTitle="Sindh Madressatul Islam University (Continue)"
            result="3.2/4"
            des="I am currently pursuing a Bachelor of Science in Computer Science (BSCS) from Sindh Madressatul Islam University, where I am expanding my knowledge in various computer science disciplines."
          />
          <ResumeCard
            title="Intermediate pre-Engineering"
            subTitle="Jinnah Government College (2018 - 2020)"
            result="65%"
            des=" I have completed my Intermediate in Pre-Engineering from Jinnah Government College, which laid a strong foundation in analytical and problem-solving skills.."
          />
          <ResumeCard
            title="Web & Mobile App Development"
            subTitle="Saylani Mass It Training Program (2023-2024)"
            result="-"
            des="I am  enrolled in a one-year Web & Mobile App Development program at Saylani Mass IT Training Program to enhance my skills in modern web and mobile technologies."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="New Scholar Secondary School (2012-2018)"
            result="72%"
            des="I completed my Matriculation from New Scholar Secondary School."
          />
        </div>
      </div>
      {/* part Two */}

      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          
          <h2 className="text-3xl md:text-4xl font-bold">Job Experience</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Front-end Developer"
            subTitle="Code Alpha "
            result="India"
            des="Code Alpha is a leading IT services provider with over 10 years of experience. It provides IT services such as web development, app development, and cloud computing."
          />
          <ResumeCard
            title="Web Designer"
            subTitle="Mawakay"
            result="Karachi"
            des="Mawakay is a leading IT services provider with over 1 years of experience. It provides IT services such as web development, app development, and cloud computing."
          />
          <ResumeCard
            title="Front-end Developer"
            subTitle="Internee.pk"
            result="Karachi"
            des="Internee.pk is a leading IT services provider with over 1 years of experience. It provides IT services such as web development, app development, and cloud computing."
          />
        </div>
      </div>
    </motion.div>
  );
}

export default Education