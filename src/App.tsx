import * as React from 'react'
import { ImLinkedin2 } from 'react-icons/im'
import { ImGithub } from 'react-icons/im'
import About from './About'
import ProjectArticle from './ProjectArticle'
import Contact from './Contact'

export type Section = 'about' | 'projects' | 'contact'

const App = () => {
  const [currentSection, setCurrentSection] = React.useState<Section>('about')
  return (
    <div className="bg-gray-m h-screen w-screen">
      <header className="bg-forest-m relative flex h-1/4 flex-col items-center justify-center">
        <h1 className="text-5xl text-white">William Lempinen</h1>
        <h1 className="text-5xl text-gray-400">Software Developer</h1>
        <div className="absolute bottom-3 left-1 flex">
          <a
            href="https://www.linkedin.com/in/william-lempinen-0b6ba625a"
            target="_blank"
            rel="noopener noreferrer"
            className="be-stylish"
          >
            <ImLinkedin2 className="text-gray-m m-4 text-5xl" />
          </a>
          <a
            href="https://github.com/williamlempinen"
            target="_blank"
            rel="noopener noreferrer"
            className="be-stylish"
          >
            <ImGithub className="text-gray-m m-4 text-5xl" />
          </a>
        </div>
      </header>
      <main className="flex h-3/4 flex-col items-center justify-start pt-8">
        <div className="flex w-full max-w-[1400px] flex-1 flex-col items-center">
          <div className="flex gap-4">
            <button
              className="be-stylish text-tPri text-2xl font-bold"
              onClick={() => setCurrentSection('about')}
            >
              About
            </button>
            <button
              className="be-stylish text-tPri text-2xl font-bold"
              onClick={() => setCurrentSection('projects')}
            >
              Projects
            </button>
            <button
              className="be-stylish text-tPri text-2xl font-bold"
              onClick={() => setCurrentSection('contact')}
            >
              Contact
            </button>
          </div>
          <div className="border-forest-m flex h-auto w-auto flex-col items-center gap-2 border-2 p-1">
            {currentSection === 'about' ? (
              <About />
            ) : currentSection === 'projects' ? (
              <ProjectArticle />
            ) : (
              <Contact />
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
