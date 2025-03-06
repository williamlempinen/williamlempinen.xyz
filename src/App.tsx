import * as React from 'react'
import About from './About'
import ProjectArticle from './ProjectArticle'
import Contact from './Contact'
import MovingGrid from './MovingGrid'
import { SOCIALS, TECH_STACK } from './consts'

export type Section = 'about' | 'projects' | 'contact' | 'grids'

const App = () => {
  const [currentSection, setCurrentSection] = React.useState<Section>('about')

  return (
    <div className="bg-grayBg h-screen w-screen">
      <header className="bg-forest-d flex h-1/4 flex-col items-center justify-center">
        <h1 className="text-5xl text-white">William Lempinen</h1>
        <h1 className="text-5xl text-gray-400">Software Developer</h1>
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
            <button
              className="be-stylish text-tPri text-2xl font-bold"
              onClick={() => setCurrentSection('grids')}
            >
              Grids
            </button>
          </div>
          <div className="border-forest-m mb-32 flex h-auto w-auto flex-col items-center gap-2 border-2 p-1">
            {currentSection === 'about' ? (
              <About />
            ) : currentSection === 'projects' ? (
              <ProjectArticle />
            ) : currentSection === 'contact' ? (
              <Contact />
            ) : (
              <div className="flex flex-col gap-8">
                {window.innerWidth >= 400 && (
                  <MovingGrid title="My current tech Stack" gridSize={4} items={TECH_STACK} />
                )}
                <MovingGrid title="Socials" gridSize={3} items={SOCIALS} />
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
