import React from 'react';
import PrimaryButton from './widget/PrimaryButton';
import SkillBox from './widget/SkillBox';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact, faNodeJs, faGoogle, faDocker, faJs, faGolang, faGithub, faGitAlt } from "@fortawesome/free-brands-svg-icons";
import { faDatabase } from "@fortawesome/free-solid-svg-icons";

const HeroUIContactMe: React.FC = () => {
    return (
        <section id='contact' className="max-w-6xl mx-auto mt-4 py-12 px-4">
            <div className='flex flex-col lg:flex-row gap-8'>
                <div className='flex flex-col flex-1'>
                    <h1 className="text-[2.5rem] font-bold text-white mb-4">
                        I&apos;m <span className="text-[#3498db]">Available</span> for Hire
                    </h1>
                    <p className="text-[1.2rem] text-[#888] mb-8  max-w-[600px]">
                        If you have a project in mind or just want to say hello, feel free to reach out. I&apos;m always open to discussing new opportunities and collaborations.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4"> 
                        <PrimaryButton className='text-white' href='https://www.linkedin.com/in/haaweejee/'>Let&apos;s Connect</PrimaryButton>
                        <PrimaryButton className='text-white' href='https://wa.me/6282217106768'> Let&apos;s Chat</PrimaryButton>
                    </div>
                </div>
                <div className='flex flex-col flex-1'>
                     <h1 className="text-[2.5rem] font-bold text-white mb-4">
                        My <span className="text-[#3498db]">Skills</span>
                    </h1>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-3 max-w-[500px]">
                        <SkillBox name="Kotlin" logo="/public/kotlin-original.svg" />
                        <SkillBox name="Dart" logo="/public/dart-original.svg" />
                        <SkillBox name="Java" logo="/public/java-original.svg" />
                        <SkillBox name="TypeScript" logo="/public/typescript-plain.svg" />
                        <SkillBox name='Golang' icon={<FontAwesomeIcon icon={faGolang} className="text-blue-400" />} />
                        <SkillBox name="React" icon={<FontAwesomeIcon icon={faReact} className="text-blue-400" />} />
                        <SkillBox name="Flutter" logo="/public/flutter-original.svg" />
                        <SkillBox name="Node.js" icon={<FontAwesomeIcon icon={faNodeJs} className="text-green-400" />} />
                        <SkillBox name="Firebase" icon={<FontAwesomeIcon icon={faGoogle} className="text-yellow-400" />} />
                        <SkillBox name="Postgres" icon={<FontAwesomeIcon icon={faDatabase} className="text-blue-400" />} />
                        <SkillBox name="Docker" icon={<FontAwesomeIcon icon={faDocker} className="text-blue-400" />} />
                        <SkillBox name="Git" icon={<FontAwesomeIcon icon={faGitAlt} className="text-orange-500" />} />
                        <SkillBox name="GitHub" icon={<FontAwesomeIcon icon={faGithub} className="text-white" />} />
                        <SkillBox name="Jetpack Compose" logo="/public/jetpack-compose.webp" />
                        <SkillBox name="Android Studio" logo="/public/androidstudio-original.svg" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroUIContactMe;