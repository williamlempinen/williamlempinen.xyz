export type Project = {
  name: string
  info: string
  url: string
  img: string
}

const projects: Project[] = [
  {
    name: 'Rounal',
    info: 'Rounal is a TUI application for your journalctl entries written with Rust.',
    url: 'hello-world',
    img: 'image-path',
  },
  {
    name: 'Flappy bird game',
    info: 'flappy bird game written in haskell',
    url: 'hello-world',
    img: 'image-path',
  },
  {
    name: 'ZatChat',
    info: 'flappy bird game written in haskell',
    url: 'hello-world',
    img: 'image-path',
  },
  {
    name: 'Tweets',
    info: 'flappy bird game written in haskell',
    url: 'hello-world',
    img: 'image-path',
  },
]

const ProjectArticle = () => {
  return (
    <div>
      <p>hello wolr</p>
      <div>
        <p>hello</p>
      </div>
    </div>
  )
}

export default ProjectArticle
