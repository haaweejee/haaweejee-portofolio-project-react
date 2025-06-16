

import React from 'react';
import './WorkExperience.css'
import './ProjectHistory.css';

const projectList = [
  {
    image: '/kompas.id-playstore.webp',
    title: 'Kompas.id (Android)',
    desc: 'A subscription-based news app by Harian Kompas offering ePaper, articles, eBooks, and text-to-speech features, accessible with an active subscription.',
    features: [
      'Increased unit test coverage from 0% to 40%',
      'Designed and implemented Clean Architecture, replacing the previous Repository Pattern',
      'Developed and implemented new features by slicing designs from Figma into code',
    ],
    tech: [
      'Kotlin', 'Android', 'Retrofit', 'Firebase', 'MVVM', 'Clean Architecture',
      'Room', 'Jetpack Compose', 'DataStore', 'JUnit', 'Mockito', 'Modularization', 'Dagger Hilt'
    ]
  },
  {
    image: '/dg-logo-playstore.webp',
    title: 'Dunia Games (Android)',
    desc: 'An application that serves as the largest gaming portal in Indonesia, featuring articles, community, short videos, tournaments, livestreams, and top-up services.',
    features: [
      'Ensured a Crash-Free Percentage above 99% using Firebase Crashlytics to maintain app stability and performance.',
      'Migrate From MVP to MVVM, Xml View to Jetpack Compose',
      'Implement Firebase Monitoring to Monitor Network Request.'
    ],
    tech: [
      'Kotlin', 'Java', 'Android', 'Retrofit', 'Firebase', 'MVVM', 'Clean Architecture',
      'Room', 'Jetpack Compose', 'DataStore', 'JUnit', 'Mockito', 'Modularization', 'KTOR', 'Dagger 2'
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
    <section className="experience">
        <h2 className="experience-subtitle">Case Studies</h2>
        <h1 className="experience-title">Project History</h1>
        <div className="experience-underline"></div>
        <h3 className="experience-notes">*Some of the projects in this history are owned by the companies where I have worked, while others are my personal projects. For company projects, they are not my property, but I contributed to their development.</h3>

        {projectList.map((project, idx) => (
            <div className="project-history-container" key={idx} style={{ '--fade-delay': `${idx * 0.15}s` }} >
                {/* Left Side */}
                <div className="project-history-left">
                <img
                    src={project.image}
                    alt={project.title}
                    className="project-history-image"
                />
                </div>
                <div className="project-history-right">
                <div className="project-history-dot-title">
                    <h2>{project.title}</h2>
                </div>
                <p className="project-history-desc">{project.desc}</p>
                <ul className="project-history-features">
                    {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                    ))}
                </ul>
                <div className="project-history-tech">
                    {project.tech.map((tech, i) => (
                    <span className="tech-badge" key={i}>{tech}</span>
                    ))}
                </div>
                </div>
            </div>
    ))}
    </section>
    );
}

export default ProjectHistory;