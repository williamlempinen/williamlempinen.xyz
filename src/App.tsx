import * as React from 'react'
import About from './About'
import Projects from './Projects'
import MovingGrid from './MovingGrid'
import { ANIMATION_SPEED, SOCIALS, TECH_STACK } from './consts'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

export type Section = 'about' | 'projects'

const App = () => {
  const [currentSection, setCurrentSection] = React.useState<Section>('about')

  return (
    <div className="h-screen w-screen bg-white">
      <header className="bg-forest-d relative flex h-1/4 flex-col items-center justify-center">
        <h1 className="text-5xl text-white">William Lempinen</h1>
        {window.innerWidth >= 428 && <h1 className="text-gray-l text-5xl">Software Developer</h1>}
        <div className="absolute bottom-0 flex flex-row gap-2">
          <p
            className={`text-gray-l text-2xl transition-all duration-[${ANIMATION_SPEED}] ease-in-out hover:scale-[1.02] hover:cursor-pointer ${currentSection === 'about' ? 'font-bold text-white' : ''} `}
            onClick={() => setCurrentSection('about')}
          >
            About
          </p>
          <p
            className={`text-gray-l text-2xl transition-all duration-[${ANIMATION_SPEED}] ease-in-out hover:scale-[1.02] hover:cursor-pointer ${currentSection === 'projects' ? 'font-bold text-white' : ''} `}
            onClick={() => setCurrentSection('projects')}
          >
            Some of my projects
          </p>
        </div>
      </header>
      <main className="flex h-3/4 flex-col items-center justify-start p-8">
        <div className="flex w-full max-w-[1400px] flex-1 flex-col items-center">
          <div className="flex h-auto w-auto flex-col items-center gap-12 p-2">
            <SwitchTransition>
              <CSSTransition
                key={currentSection}
                timeout={ANIMATION_SPEED}
                classNames="fade"
                unmountOnExit
              >
                {currentSection === 'about' ? (
                  <>
                    <About />
                    <MovingGrid title="Connect with me" gridSize={3} items={SOCIALS} />
                    {window.innerWidth >= 428 && (
                      <MovingGrid title="My current tech Stack" gridSize={4} items={TECH_STACK} />
                    )}
                  </>
                ) : (
                  <Projects />
                )}
              </CSSTransition>
            </SwitchTransition>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
