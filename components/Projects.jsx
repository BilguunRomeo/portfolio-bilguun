import React from 'react';
import toktokImg from '../public/assets/projects/toktok.png';
import driverImg from '../public/assets/projects/driver.png'
import emptyImg from '../public/assets/projects/empty.jpg'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'> Projects</p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem title='TokTok Driver' backgroundImg={driverImg} tech='React Native' />
          <ProjectItem title='TokTok Application V3' backgroundImg={toktokImg} tech='React Native' />
          <ProjectItem title='CloudMN' backgroundImg={emptyImg} tech='Golang (Beego)' />
          <ProjectItem title='Small Projects' backgroundImg={emptyImg} tech='Laravel' />
        </div>
      </div>
    </div>
  );
};

export default Projects;
