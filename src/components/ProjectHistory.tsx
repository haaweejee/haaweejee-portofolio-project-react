import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import SectionTitle from './widget/SectionTitle';

const projectList = [
  {
    image: '/image-conv-logo.webp',
    link: 'https://play.google.com/store/apps/details?id=id.haaweejee.imageconverter',
    title: 'Image Converter - JPG/WEBP/PNG',
    desc: 'A lightweight image format converter for mobile devices, allowing users to easily transform images into various common formats.',
    features: [
      'Can Convert JPG, WEBP, and PNG formats',
      'Supports Image Compression',
      'Supports Image Cropping',
    ],
    tech: [
      'Kotlin', 'Android', 'Ktor', 'Firebase', 'MVVM', 'Clean Architecture', 'Jetpack Compose', 'Koin'
    ]
  },
  {
    image: '/uber-logo.svg',
    title: 'Urunan Bersama (Uber)',
    link: '',
    desc: 'A crowdfunding platform that allows users to create and manage campaigns, enabling them to raise funds for various purposes.',
    features: [
      'Backend using Golang with Gin Framework, Database using PostgreSQL',
      'Integrated with Midtrans for payment processing',
      'Using Android Jetpack Compose for the Mobile Apps',
    ],
    tech: [
      'Kotlin', 'Android', 'Ktor', 'Firebase', 'MVVM', 'Clean Architecture', 'Jetpack Compose', 'Koin', 'Golang', 'Gin', 'PostgreSQL', 'Midtrans', 'Room', 'Datastore'
    ]
  },
  {
    image: '/jogja-pos.svg',
    title: 'Jogja Pos (Android)',
    link: '',
    desc: 'A Point of Sale (POS) application for managing sales transactions, inventory, and customer data in retail environments.',
    features: [
      'Backend using Golang with Gin Framework, Database using PostgreSQL',,
      'Using Android Jetpack Compose for the Mobile Apps',
      'Supports Offline Mode with Room Database',
    ],
    tech: [
      'Kotlin', 'Android', 'Ktor', 'Firebase', 'MVVM', 'Clean Architecture', 'Jetpack Compose', 'Koin', 'Golang', 'Gin', 'PostgreSQL', 'Midtrans', 'Room', 'Datastore'
    ]
  },
];

const ProjectHistory : React.FC = () => {
    return (
      <section id='projects' className="mx-auto mt-20 max-w-[1100px] px-4">
          <SectionTitle title='Project History' subtitle='Case Studies' />
          {projectList.map((project, idx) => (
            <Fade duration={1000} delay={300}> 
              <div className="flex md:flex-row flex-col gap-10 max-w-[1300px] items-stretch mt-8" key={idx}>
                  {/* Left Side */}
                  <div className="flex flex-col justify-start md:min-w-[400px] max-w[200px] relative">
                  <img
                      src={project.image}
                      alt={project.title}
                      className="w-full block"
                  />
                  </div>
                  <div className="flex-[1.5] bg-transparent text-white pt-8 flex flex-col justify-start">
                    <div className="flex items-center gap-3 mb-2 text-[#fff]">
                        <h2 className='text-2xl font-semibold'>{project.title}</h2>
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-[#2176bd] font-semibold underline hover:text-[#3498db] transition-colors mb-2"
                      >
                        View on Play Store
                      </a>
                    )}
                    <p className="text-white opacity-70 my-4">{project.desc}</p>
                    <ul className="text-white opacity-70 mb-6 pl-5">
                        {project.features.map((feature, i) => (
                        <li className='mb-2 list-disc' key={i}>{feature}</li>
                        ))}
                    </ul>
                    <div className="flex flex-wrap gap-3 max-w-full">
                        {project.tech.map((tech, i) => (
                        <span className="inline-flex items-center px-3 py-1 rounded-lg text-base font-medium bg-[#222] text-white border border-[#444] min-w-0 whitespace-nowrap" key={i}>{tech}</span>
                        ))}
                    </div>
                  </div>
              </div>
            </Fade>
      ))}
      </section>
    );
}

export default ProjectHistory;