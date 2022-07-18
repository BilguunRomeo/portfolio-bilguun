import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Bilguun | Resume</title>
        <meta name='description' content='I’m a mobile application developer specializing in building (and occasionally designing) exceptional digital experiences.' />
        <link rel='icon' href='/fav.jpeg' />
      </Head>
      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>Munkhgerel Bilguun</h2>
          <div className='flex'>
            <a href='https://www.linkedin.com/in/m-bilguun-8a738115b/' target='_blank' rel='noreferrer'><FaLinkedinIn size={20} style={{ marginRight: '1rem' }} /></a>
            <a href='https://gitlab.com/bilguun-dev' target='_blank' rel='noreferrer'><FaGithub size={20} style={{ marginRight: '1rem' }} /></a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>Mobile Application Development<span className='px-1'>|</span>Web Development<span className='px-1'>|</span>UI UX Design</p>
          </div>
          <div className='block sm:hidden'>
            <p>Mobile Application Development</p><p className='py-2'>Web Development</p><p>UI UX Design</p>
          </div>
        </div>
        <p>I'm just a regular developer who loves to create something new and be a part of something big. 2022 Triathlon Finisher and love cycling, swimming, and running.</p>
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Mobile Application Development
            <span className='px-2'>|</span>Frontend Development
            <span className='px-2'>|</span>React Native
            <span className='px-2'>|</span>VueJS
            <span className='px-2'>|</span>Firebase
          </p>
          <p className='py-2'>
            <span className='font-bold'>Amazon Web Services</span>
            <span className='px-2'>|</span>Amazon Web Services Cloud
            Practitioner
          </p>
        </div>
        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>TokTok LLC</span>
            <span className='px-2'>|</span>Ulaanbaatar, MN
          </p>
          <p className='py-1 italic'>Mobile Application Developer (2020 MAR - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>React Native</li>
            <li>Firebase</li>
            <li>MySQL</li>
            <li>VueJS</li>
            <li>ExpressJS</li>
            <li>TypeScript</li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>DMT</span>
            <span className='px-2'>|</span>Ulaanbaatar, MN
          </p>
          <p className='py-1 italic'>ERP Developer (2019 NOV - 2020 MAR)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Frappe</li>
            <li>Python</li>
            <li>Javascript</li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Fibo Global</span>
            <span className='px-2'>|</span>Ulaanbaatar, MN
          </p>
          <p className='py-1 italic'>Backend Developer  (2019 MAR – 2019 NOV)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Golang (Beego)</li>
            <li>PostgreSQL</li>
            <li>MySQL</li>
            <li>Redis</li>
          </ul>
        </div>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>State Social Insurance General Office</span>
            <span className='px-2'>|</span>Ulaanbaatar, MN
          </p>
          <p className='py-1 italic'>Fullstack Developer, Intern  (2017 DEC – 2019 FEB)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>PHP (Laravel)</li>
            <li>Bootstrap</li>
            <li>MySQL</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
