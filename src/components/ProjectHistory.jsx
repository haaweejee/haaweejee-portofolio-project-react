

import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const projectList = [
  {
    image: '/kompas.id-playstore.webp',
    title: 'Kompas.id (Android)',
    desc: 'A subscription-based news app by Harian Kompas offering ePaper, articles, eBooks, and text-to-speech features, accessible with an active subscription.',
    features: [
    ],
    tech: [
      'Kotlin', 'Android', 'MVVM', 'Clean Architecture',
      'Jetpack Compose'
    ]
  },
  {
    image: '/dg-logo-playstore.webp',
    title: 'Dunia Games (Android)',
    desc: 'An application that serves as the largest gaming portal in Indonesia, featuring articles, community, short videos, tournaments, livestreams, and top-up services.',
    features: [
    ],
    tech: [
      'Kotlin', 'Java', 'Android', 'MVVM', 'Clean Architecture',
      'Room', 'Jetpack Compose', 'DataStore', 'Modularization'
    ]
  },
  {
    image: '/image-conv-logo.webp',
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

const ProjectHistory = () => {
    return (
      <section id='projects' className="mx-auto my-[200px] max-w-[1100px] px-4">
          <Slide duration={1000}>
             <h2 className="text-[#3498db] md:text-2xl text-xl font-normal mb-0 max-w-[1100px] text-center">Case Studies</h2>
             <h1 className="md:text-3xl text-2xl font-bold m-0 max-w-[1100px] text-center text-[#333]">Project History</h1>
             <div className="w-[120px] h-1 bg-[#3498db] my-4 mx-auto rounded"></div>
          </Slide>
          <Fade duration={1000} delay={300}>
            <h3 className="text-xs m-0 font-normal text-[#666] mt-3">*Some of the projects in this history are owned by the companies where I have worked, while others are my personal projects. For company projects, they are not my property, but I contributed to their development.</h3>
          </Fade>

          {projectList.map((project, idx) => (
            <Fade duration={1000} delay={300}> 
              <div className="flex md:flex-row flex-col gap-10 max-w-[1300px] items-stretch mt-8" >
                  {/* Left Side */}
                  <div className="flex flex-col justify-start md:min-w-[400px] max-w[200px] relative">
                  <img
                      src={project.image}
                      alt={project.title}
                      className="w-full block"
                  />
                  </div>
                  <div className="flex-[1.5] bg-transparent text-white pt-8 flex flex-col justify-start">
                    <div className="flex items-center gap-3 mb-2 text-[#333]">
                        <h2>{project.title}</h2>
                    </div>
                    <p className="text-[#666] my-4">{project.desc}</p>
                    <ul className="text-[#666] mb-6 pl-5">
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