import AstroIcon from "@/icons/skills/AstroIcon.astro"
import Express from "@/icons/skills/Express.astro"
import MongoDB from "@/icons/skills/MongoDB.astro"
import Next from "@/icons/skills/Next.astro"
import Node from "@/icons/skills/Node.astro"
import SocketIo from "@/icons/skills/SocketIo.astro"
import Tailwind from "@/icons/skills/Tailwind.astro"
import Typescript from "@/icons/skills/Typescript.astro"

interface Tag {
	name: string
	icon: any
}

export interface Project {
	title: string
	description: string
	image: string
	url?: string
	github?: string
	tags: Tag[]
}

export const projects: Project[] = [
	{
		title: 'Clon de spotify',
		description: 'Clon de la página principal de Spotify.',
		image: '/spotify-clone.webp',
		url: 'https://spotify-clone-app-blond.vercel.app',
		github: 'https://github.com/ebert-escalant/spotify-clone-app',
		tags: [
			{
				name: 'Astro',
				icon: AstroIcon
			},
			{
				name: 'TypeScript',
				icon: Typescript
			},
			{
				name: 'Tailwind CSS',
				icon: Tailwind
			}
		]
	},
	{
		title: 'Chat App',
		description: 'Aplicación de mensajería en tiempo real.',
		image: '/realtime-message.webp',
		url: 'https://appclientchat.vercel.app/',
		tags: [
			{
				name: 'NextJS',
				icon: Next
			},
			{
				name: 'TypeScript',
				icon: Typescript
			},
			{
				name: 'Tailwind CSS',
				icon: Tailwind
			},
			{
				name: 'Socket.io',
				icon: SocketIo
			},
			{
				name: 'NodeJS',
				icon: Node
			},
			{
				name: 'ExpressJS',
				icon: Express
			},
			{
				name: 'MongoDB',
				icon: MongoDB
			}
		]
	}
]
