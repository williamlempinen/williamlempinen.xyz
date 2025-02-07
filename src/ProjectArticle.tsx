export type Project = {
  name: string
  info: string
  url: string
  img: string
}

const projects: Project[] = [
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

const ProjectArticle = ({ name, info, url, img }: Project) => {
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
