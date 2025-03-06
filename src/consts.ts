import { IconType } from 'react-icons'
import {
  BiLogoTypescript,
  BiLogoJava,
  BiLogoPostgresql,
  BiLogoMongodb,
  BiLogoSpringBoot,
  BiLogoNodejs,
  BiLogoDiscordAlt,
  BiLogoSlack,
  BiLogoGithub,
  BiLogoGmail,
  BiLogoLinkedin,
} from 'react-icons/bi'
import { FaRust } from 'react-icons/fa'
import { FaBluesky } from 'react-icons/fa6'
import { SiNeovim } from 'react-icons/si'
import { BiLogoVisualStudio } from 'react-icons/bi'
import { BiLogoDocker } from 'react-icons/bi'
import { SiExpress } from 'react-icons/si'
import { FaLinux } from 'react-icons/fa6'
import { BiLogoGit } from 'react-icons/bi'
import { BiLogoReact } from 'react-icons/bi'
import { BsEmojiLaughing } from 'react-icons/bs'

export type HEX = `#${string}`

export type Cell = { x: number; y: number }

export type GridBlock = Cell & {
  id: string
  alt: string
  href: string
  icon: IconType
  blockColor: HEX | string
  iconColor: HEX | string
}

export const ANIMATION_SPEED = 250
export const MOVE_INTERVAL = 2500
export const BLOCK_SIZE = 100
export const GAP_SIZE = 2

export const INIT_CELL = { x: 0, y: 0 }
export const EMPTY_STRING = ''

export const TECH_STACK: GridBlock[] = [
  {
    id: 'tech-stack-ts',
    alt: 'TypeScript',
    href: 'https://www.typescriptlang.org',
    icon: BiLogoTypescript,
    blockColor: 'bg-forest-m',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'tech-stack-rust',
    alt: 'Rust',
    href: 'https://www.rust-lang.org',
    icon: FaRust,
    blockColor: 'bg-gray-d',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'tech-stack-postgresql',
    alt: 'PostgreSQL',
    href: 'https://www.postgresql.org',
    icon: BiLogoPostgresql,
    blockColor: 'bg-forest-l',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'tech-stack-java',
    alt: 'Java',
    href: 'https://www.java.com',
    icon: BiLogoJava,
    blockColor: 'bg-gray-l',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'tech-stack-mongodb',
    alt: 'MongoDB',
    href: 'https://www.mongodb.com',
    icon: BiLogoMongodb,
    blockColor: 'bg-gray-m',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'tech-stack-nodejs',
    alt: 'Node.js',
    href: 'https://nodejs.org',
    icon: BiLogoNodejs,
    blockColor: 'bg-forest-d',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'tech-stack-spring',
    alt: 'Spring',
    href: 'https://spring.io',
    icon: BiLogoSpringBoot,
    blockColor: 'bg-forest-m',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'tech-stack-neovim',
    alt: 'Neovim',
    href: 'https://neovim.io',
    icon: SiNeovim,
    blockColor: 'bg-forest-l',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'tech-stack-vscode',
    alt: 'Visual Studio Code',
    href: 'https://code.visualstudio.com',
    icon: BiLogoVisualStudio,
    blockColor: 'bg-gray-l',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'tech-stack-docker',
    alt: 'Docker',
    href: 'https://www.docker.com',
    icon: BiLogoDocker,
    blockColor: 'bg-forest-d',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'tech-stack-express',
    alt: 'Express',
    href: 'https://expressjs.com',
    icon: SiExpress,
    blockColor: 'bg-gray-m',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'tech-stack-linux',
    alt: 'Linux',
    href: 'https://www.kernel.org',
    icon: FaLinux,
    blockColor: 'bg-gray-d',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'tech-stack-git',
    alt: 'Git',
    href: 'https://git-scm.com',
    icon: BiLogoGit,
    blockColor: 'bg-forest-l',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'tech-stack-react',
    alt: 'React',
    href: 'https://reactjs.org',
    icon: BiLogoReact,
    blockColor: 'bg-forest-m',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
]

export const SOCIALS: GridBlock[] = [
  {
    id: 'socials-discord',
    alt: 'Discord',
    href: '',
    icon: BiLogoDiscordAlt,
    blockColor: 'bg-forest-l',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'socials-slack',
    alt: 'Slack',
    href: '',
    icon: BiLogoSlack,
    blockColor: 'bg-gray-d',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'socials-github',
    alt: 'GitHub',
    href: '',
    icon: BiLogoGithub,
    blockColor: 'bg-forest-d',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'socials-bluesky',
    alt: 'Bluesky',
    href: '',
    icon: FaBluesky,
    blockColor: 'bg-forest-m',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'socials-gmail',
    alt: 'Gmail',
    href: '',
    icon: BiLogoGmail,
    blockColor: 'bg-gray-m',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'lets-connect',
    alt: 'Lets connect!',
    href: '',
    icon: BsEmojiLaughing,
    blockColor: 'bg-forest-l',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
  {
    id: 'socials-linkedin',
    alt: 'LinkedIn',
    href: '',
    icon: BiLogoLinkedin,
    blockColor: 'bg-gray-l',
    iconColor: 'text-white',
    ...INIT_CELL,
  },
]
