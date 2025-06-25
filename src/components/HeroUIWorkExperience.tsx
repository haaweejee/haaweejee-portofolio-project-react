import React, { useState } from "react";
import SectionTitle from "../components/widget/SectionTitle";
import {Chip} from "@heroui/react";


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
            'Kotlin', 'Android', 'Jetpack Compose', 'MVVM', 'Clean Architecture', 'Koin', 'Dagger 2', 'App Monitoring'
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
            'Kotlin', 'Android', 'Jetpack Compose', 'MVVM', 'Clean Architecture', 'Koin', 'Dagger 2', 'App Monitoring'
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
            'Kotlin', 'Android', 'Jetpack Compose', 'MVVM', 'Clean Architecture', 'Koin', 'Dagger 2', 'App Monitoring'
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
            'Kotlin', 'Android', 'Jetpack Compose', 'MVVM', 'Clean Architecture', 'Koin', 'Dagger 2', 'App Monitoring'
        ]
	},
];

const HeroUIWorkExperience: React.FC = () => {
	const [activeIndex, setActiveIndex] = useState(0);

	return (
		<section id="experience" className="max-w-6xl mx-auto mt-20 py-12 px-4">
			<SectionTitle title="Work Experience" subtitle="Experience" />
			<div className="flex gap-12 mt-12">
				{/* Sidebar Company List */}
				<div className="relative flex flex-col items-start pr-8 min-w-[180px]">
					{experiences.map((exp, idx) => (
						<button
							key={exp.company}
							onClick={() => setActiveIndex(idx)}
							className={`relative text-left px-4 py-2 font-semibold transition-colors duration-200 w-full
                            ${
                                activeIndex === idx
                                    ? "text-[#3498db] bg-[#f5f5fa]"
                                    : "text-[#444]"
                            }
                        `}
							style={{ zIndex: 20 }}
						>
							{activeIndex === idx && (
								<div
									className="absolute left-0 top-0 h-full w-1 bg-[#3498db]"
									style={{ zIndex: 30 }}
								/>
							)}
							{exp.company}
						</button>
					))}
				</div>
				{/* Main Content */}
				<div className="flex-1">
					<h2 className="text-3xl font-bold mb-2 text-white">
						{experiences[activeIndex].role}{" "}
						<a
							href={experiences[activeIndex].companyUrl}
							className="text-[#3498db] underline"
							target="_blank"
							rel="noopener noreferrer"
						>
                            <img className="my-4" src={experiences[activeIndex].logo} alt={experiences[activeIndex].company} style={{ height: 40 }} />
						</a>
					</h2>
					<p className="text-white opacity-70 mb-4 font-semibold">
						{experiences[activeIndex].date}
					</p>
					<ul className="space-y-4">
						{experiences[activeIndex].details.map((item, i) => (
							<li
								key={i}
								className="flex items-start gap-3 text-lg text-[#444]"
							>
								<span className="text-[#3498db] mt-1 text-2xl">&#10003;</span>
								<span className="text-white opacity-70">
                                    {typeof item === 'string' && item.includes('<a')
                                    ? <span
                                        dangerouslySetInnerHTML={{
                                            __html: item.replace(
                                            '<a ',
                                            `<a style='font-weight:600;text-decoration:underline;' class='transition-colors hover:text-[#2176bd]' `
                                            )
                                        }}
                                        />
                                    : item}
                                </span>
							</li>
						))}
					</ul>
                    <div className="mt-6 flex flex-wrap">
                        {experiences[activeIndex].skill.map((item, i) => (
                            <Chip
                                key={i}
                                className="mr-2 mb-2 bg-[#222] text-white border border-[#444] px-3 py-1 rounded-lg"
                            >
                                {item}
                            </Chip>
                        ))}
                    </div>
				</div>
			</div>
		</section>
	);
};

export default HeroUIWorkExperience;
