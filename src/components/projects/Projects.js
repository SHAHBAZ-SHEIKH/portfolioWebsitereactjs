import React from 'react'
import Title from '../layouts/Title'
import { hiringMine,post,ecommerce,expense,faraway,techwebsite} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="JOB APP"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={hiringMine}
          githubLink= "https://github.com/SHAHBAZ-SHEIKH?tab=repositories"
            codeLink= "https://shahbaz-sheikh.github.io/HiringMine/"
        />
        <ProjectsCard
          title="SOCIAL MEDIA APP"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={post}
          githubLink= "https://github.com/SHAHBAZ-SHEIKH?tab=repositories"
            codeLink= " https://shahbaz-sheikh.github.io/SocialMediaAppWithFireBase/"
        />
        <ProjectsCard
          title="E-commerce Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={ecommerce}
        />
        <ProjectsCard
          title="Expense Tracker App"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={expense}
          githubLink= "https://github.com/SHAHBAZ-SHEIKH?tab=repositories"
            codeLink= "https://expense-tracker-app-pd6g.vercel.app/"
        />
        <ProjectsCard
          title="Far-Away"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={faraway}
          githubLink= "https://github.com/SHAHBAZ-SHEIKH?tab=repositories"
            codeLink= "https://far-away-eight-rho.vercel.app/"
        />
        <ProjectsCard
          title="Tech Website"
          des=" Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
          src={techwebsite}
          githubLink= "https://github.com/SHAHBAZ-SHEIKH?tab=repositories"
            codeLink= "https://tech-website-reactjs.vercel.app/"
        />
      </div>
    </section>
  );
}

export default Projects