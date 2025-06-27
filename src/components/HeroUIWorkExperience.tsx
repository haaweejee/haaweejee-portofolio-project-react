import React, { useState } from "react";
import SectionTitle from "../components/widget/SectionTitle";
import {Chip} from "@heroui/react";
import { Fade } from "react-awesome-reveal";


const experiences = [
	{
		company: "SALT Indonesia",
		role: "Android Developer",
		companyUrl: "https://salt.id/",
        logo: './salt-logo.svg', // Ganti dengan logo asli jika ada
		date: "April 2024 - Present",
		details: [
			'Contributed to the development of the <a href="https://play.google.com/store/apps/details?id=id.co.duniagames">Dunia Games</a> Android application, collaborating with a team to deliver features based on Telkomsel\’s requirements as the Product Owner, enhancing the user experience for 1 million+ downloads on the Play Store.',
            'Ensured a Crash-Free Percentage above 99% using App Crash Monitoring to maintain app stability and performance.',
            'Redesigned the app’s architecture by migrating from MVP to MVVM, switching UI from XML to Jetpack Compose, and converting Java code to Kotlin. This improved maintainability and reduced development time by 50%.',
		],
        skill : [
            'Java','Kotlin', 'Shared Preferences', 'Android', 'Jetpack Compose', 'MVVM', 'Retrofit', 'MVP', 'Clean Architecture', 'Dagger 2', 'App Monitoring', 'Git', 'CI/CD', 'Agile', 'Unit Testing'
        ]
	},
	{
		company: "Harian Kompas",
		role: "Android Developer",
		companyUrl: "https://www.kompas.id/",
		date: "Maret 2022 - April 2024",
        logo: './kompas-logo.png', // Ganti dengan logo asli jika ada
		details: [
			'Contributed to the development of the <a href="https://play.google.com/store/apps/details?id=id.kompas.app">Kompas.id</a> Android application, enhancing the user experience for 500k+ downloads on the Play Store.',
            'Implemented unit testing in the Android application to ensure the reliability and correctness of core functionalities. Successfully increased unit test coverage from 0% to 40%, improving code quality and reducing potential bugs in production.',
            'Researched and developed new features and technologies for the Kompas.id app, enhancing performance and user experience.',
            'Planned and implemented Clean Architecture, making the codebase easier to maintain and reducing bug-fixing time by 50%, with clear documentation for future development.',
		],
         skill : [
            'Kotlin', 'Android', 'Jetpack Compose', 'Data Store','MVVM', 'Retrofit', 'Room', 'Clean Architecture', 'Dagger Hilt', 'App Monitoring', 'Git', 'CI/CD', 'Agile', 'Unit Testing'
        ]
	},
	{
		company: "Bangkit",
		role: "Mobile Development Fasilitator",
		companyUrl: "https://grow.google/intl/id_id/bangkit",
		date: "February 2022 – Juli 2022",
        logo: './bangkit-logo.png',
		details: [
			'Lead group discussions and training sessions to enhance understanding of course materials.',
            'Provide one-on-one guidance to participants struggling with concepts or assignments. ',
            'Motivate participants to achieve their learning goals and maintain consistent progress.',
            'Collaborate with mentors and Bangkit team members to streamline the learning experience.'
		],
         skill : [
            'Mentoring'
        ]
	},
    {
		company: "Harian Kompas",
		role: "Android Developer (Intern)",
		companyUrl: "https://www.kompas.id/",
        date: 'August 2021 – February 2022',
        logo: './kompas-logo.png', // Ganti dengan logo asli jika ada
		details: [
			'Collaborate with UI/UX Designers to apply the designs that have been made to the Kompas.id Android Application.',
            'Implement the API that has been created by the backend team for use in the Kompas.id Android application.',
            'Conduct research to create new features or technologies that will be implemented in the Kompas.id application.',
		],
         skill : [
            'Kotlin', 'Android', 'MVVM', 'Retrofit', 'Room', 'Git'
        ]
	},
];

const HeroUIWorkExperience: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section id="experience" className="max-w-6xl mx-auto mt-2 py-6 px-4 sm:px-6 lg:px-8">
			<SectionTitle title="Work Experience" subtitle="Experience" />
            <Fade duration={1000} delay={300}>
                <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 mt-4 lg:mt-6">
                    {/* Desktop: Vertical sidebar */}
                    <div className="hidden lg:flex lg:min-w-[200px] lg:w-auto">
                        <div className="flex flex-col pr-8">
                            {experiences.map((exp, idx) => (
                                <button
                                    key={exp.company}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`relative text-left px-4 py-3 font-semibold transition-all duration-200 w-full rounded-lg group
                                    ${
                                        activeIndex === idx
                                            ? "text-[#3498db] bg-[#f5f5fa] shadow-md"
                                            : "text-gray-400 hover:text-[#3498db] hover:bg-gray-50/5 hover:shadow-sm"
                                    }
                                `}
                                >
                                    {activeIndex === idx && (
                                        <div className="absolute left-0 top-0 h-full w-1 bg-[#3498db] rounded-r-lg shadow-sm" />
                                    )}
                                    <span className="relative z-10 block">{exp.company}</span>
                                </button>
                            ))}
                        </div>
                    </div>
                    {/* Main Content Area */}
                    <div className="flex-1 min-w-0">
                        {/* Role and Company Header */}
                        <div className="mb-4">
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-2 text-white leading-tight">
                                {experiences[activeIndex].role}
                            </h2>
                            <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3">
                                <a
                                    href={experiences[activeIndex].companyUrl}
                                    className="inline-flex items-center text-[#3498db] hover:text-[#2176bd] transition-colors duration-200 group"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img 
                                        className="h-8 md:h-10 mr-3 group-hover:scale-105 transition-transform duration-200" 
                                        src={experiences[activeIndex].logo} 
                                        alt={experiences[activeIndex].company} 
                                    />
                                    <span className="font-semibold text-lg md:text-xl underline decoration-2 underline-offset-4">
                                        {experiences[activeIndex].company}
                                    </span>
                                </a>
                                <p className="text-gray-300 font-semibold text-base md:text-lg">
                                    {experiences[activeIndex].date}
                                </p>
                            </div>
                        </div>

                        {/* Experience Details */}
                        <div className="mb-6">
                            <ul className="space-y-3 md:space-y-4">
                                {experiences[activeIndex].details.map((item, i) => (
                                    <li
                                        key={i}
                                        className="flex items-start gap-3 md:gap-4 text-base md:text-lg leading-relaxed"
                                    >
                                        <span className="text-[#3498db] mt-1 text-xl md:text-2xl flex-shrink-0">&#10003;</span>
                                        <span className="text-gray-300 leading-relaxed">
                                            {typeof item === 'string' && item.includes('<a')
                                            ? <span
                                                dangerouslySetInnerHTML={{
                                                    __html: item.replace(
                                                    '<a ',
                                                    `<a style='font-weight:600;text-decoration:underline;color:#3498db;' class='transition-colors hover:text-[#2176bd]' `
                                                    )
                                                }}
                                                />
                                            : item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Skills/Technologies */}
                        <div>
                            <h4 className="text-lg md:text-xl font-semibold text-white mb-4">Technologies & Skills:</h4>
                            <div className="flex flex-wrap gap-2 md:gap-3">
                                {experiences[activeIndex].skill.map((item, i) => (
                                    <Chip
                                        key={i}
                                        className="bg-gray-800 text-gray-200 border border-gray-600 hover:border-[#3498db] hover:bg-gray-700 transition-all duration-200 px-3 py-1.5 rounded-lg text-sm md:text-base font-medium"
                                    >
                                        {item}
                                    </Chip>
                                ))}
                            </div>
                        </div>
                        
                        {/* Mobile: Company Selection - Moved to bottom */}
                        <div className="lg:hidden mt-6 pt-4 border-t border-gray-700">
                            <h4 className="text-lg font-semibold text-white mb-3 text-center">Other Experiences</h4>
                            <div className="flex overflow-x-auto scrollbar-thin gap-3 pb-4 px-1">
                                {experiences.map((exp, idx) => (
                                    <button
                                        key={exp.company}
                                        onClick={() => setActiveIndex(idx)}
                                        className={`relative px-4 py-2.5 font-semibold text-sm rounded-full border-2 transition-all duration-300 flex-shrink-0 whitespace-nowrap
                                        ${
                                            activeIndex === idx
                                                ? "bg-[#3498db] text-white border-[#3498db] shadow-lg shadow-[#3498db]/25"
                                                : "bg-transparent text-gray-300 border-gray-600 hover:border-[#3498db] hover:text-[#3498db] hover:shadow-md"
                                        }
                                    `}
                                    >
                                        {exp.company}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Fade>
		</section>
	);
};

export default HeroUIWorkExperience;
