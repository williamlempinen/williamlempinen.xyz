import { ImLinkedin2 } from 'react-icons/im'
import { ImGithub } from 'react-icons/im'

const App = () => {
  return (
    <div className="h-screen w-screen bg-gray-100 overflow-hidden">
      <header className="h-1/2 bg-[#222826] flex flex-col items-center justify-center">
        <h1 className="text-white text-5xl">William Lempinen</h1>
        <h1 className="text-gray-400 text-5xl">Software Developer</h1>
      </header>
      <main className="h-1/2 flex items-center justify-center gap-12">
        <a
          href="https://www.linkedin.com/in/william-lempinen-0b6ba625a"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-120 transition-transform duration-300"
        >
          <ImLinkedin2 className="text-5xl m-4 text-blue-800" />
        </a>

        <a
          href="https://github.com/williamlempinen"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:scale-120 transition-transform duration-300"
        >
          <ImGithub className="text-5xl m-4 text-black" />
        </a>
      </main>
    </div>
  )
}

export default App
