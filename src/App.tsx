import { ImLinkedin2 } from 'react-icons/im'
import { ImGithub } from 'react-icons/im'

const App = () => {
  return (
    <div className="bg-gray-m h-screen w-screen">
      <header className="bg-forest-m relative flex h-1/2 flex-col items-center justify-center">
        <h1 className="text-5xl text-white">William Lempinen</h1>
        <h1 className="text-5xl text-gray-400">Software Developer</h1>
        <div className="absolute bottom-3 left-1 flex">
          <a
            href="https://www.linkedin.com/in/william-lempinen-0b6ba625a"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-120"
          >
            <ImLinkedin2 className="text-gray-m m-4 text-5xl" />
          </a>
          <a
            href="https://github.com/williamlempinen"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-120"
          >
            <ImGithub className="text-gray-m m-4 text-5xl" />
          </a>
        </div>
      </header>
      <main className="flex h-1/2 flex-col items-center justify-start pt-8">
        <div className="flex w-full max-w-[1400px] flex-1 flex-col items-center">
          <div className="flex gap-4">
            <button className="be-stylish text-tPri text-2xl font-bold">About</button>
            <p>Projects and ideas</p>
            <p>Contact</p>
          </div>
          <a
            href="https://www.linkedin.com/in/william-lempinen-0b6ba625a"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-120"
          >
            <ImLinkedin2 className="m-4 text-5xl text-blue-800" />
          </a>
          <div className="squircle h-44 w-44 transition-transform duration-300 hover:scale-120">
            <p>hello world</p>
          </div>
          <a
            href="https://github.com/williamlempinen"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-300 hover:scale-120"
          >
            <ImGithub className="m-4 text-5xl text-black" />
          </a>
        </div>
      </main>
    </div>
  )
}

export default App
