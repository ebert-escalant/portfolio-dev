interface Tech {
	name: string
	icon: string
}

interface Project {
	title: string
	description: string
	image: string
	url?: string
	github?: string
	techs: Tech[]
}

export const projects: Project[] = [
	{
		title: 'Clon de spotify',
		description: 'Clon de la página principal de Spotify.',
		image: '/spotify-clone.webp',
		url: 'https://spotify-clone-app-blond.vercel.app',
		github: 'https://github.com/ebert-escalant/spotify-clone-app',
		techs: [
			{
				name: 'React',
				icon: 'react'
			},
			{
				name: 'TypeScript',
				icon: 'typescript'
			},
			{
				name: 'Sass',
				icon: 'sass'
			}
		]
	},
	{
		title: 'Chat App',
		description: 'Aplicación de mensajería en tiempo real.',
		image: '/realtime-message.webp',
		url: 'https://appclientchat.vercel.app/',
		techs: [
			{
				name: 'React',
				icon: 'react'
			},
			{
				name: 'Node.js',
				icon: 'node'
			},
			{
				name: 'Express.js',
				icon: 'express'
			},
			{
				name: 'MongoDB',
				icon: 'mongodb'
			}
		]
	}
]
