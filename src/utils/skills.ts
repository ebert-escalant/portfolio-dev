import AstroIcon from "@icons/skills/AstroIcon.astro"
import Angular from "@icons/skills/Angular.astro"
import CSS from "@icons/skills/CSS.astro"
import Express from "@/icons/skills/Express.astro"
import Git from "@/icons/skills/Git.astro"
import GitHub from "@/icons/skills/GitHub.astro"
import GitLab from "@/icons/skills/GitLab.astro"
import HTML from "@/icons/skills/HTML.astro"
import JavaScript from "@/icons/skills/JavaScript.astro"
import PHP from "@/icons/skills/PHP.astro"
import Laravel from "@/icons/skills/Laravel.astro"
import Node from "@/icons/skills/Node.astro"
import MariaDB from "@/icons/skills/MariaDB.astro"
import MongoDB from "@/icons/skills/MongoDB.astro"
import MySQL from "@/icons/skills/MySQL.astro"
import Nest from "@/icons/skills/Nest.astro"
import Next from "@/icons/skills/Next.astro"
import PostgreSQL from "@/icons/skills/PostgreSQL.astro"
import React from "@/icons/skills/React.astro"
import Tailwind from "@/icons/skills/Tailwind.astro"
import Typescript from "@/icons/skills/Typescript.astro"

interface Skill {
	name: string
	icon: any
}

export const skills: Skill[] = [
	{
		name: 'Angular',
		icon: Angular
	},
	{
		name: 'Astro',
		icon: AstroIcon
	},
	{
		name: 'HTML',
		icon: HTML
	},
	{
		name: 'JavaScript',
		icon: JavaScript
	},
	{
		name: 'CSS',
		icon: CSS
	},
	{
		name: 'Express.js',
		icon: Express
	},

	{
		name: 'Git',
		icon: Git
	},
	{
		name: 'GitHub',
		icon: GitHub
	},
	{
		name: 'GitLab',
		icon: GitLab
	},
	{
		name: 'php',
		icon: PHP
	},
	{
		name: 'Laravel',
		icon: Laravel
	},
	{
		name: 'NodeJS',
		icon: Node
	},
	{
		name: 'MariaDB',
		icon: MariaDB
	},
	{
		name: 'MongoDB',
		icon: MongoDB
	},
	{
		name: 'MySQL',
		icon: MySQL
	},
	{
		name: 'NestJS',
		icon: Nest
	},
	{
		name: 'NextJS',
		icon: Next
	},
	{
		name: 'PostgreSQL',
		icon: PostgreSQL
	},
	{
		name: 'React',
		icon: React
	},
	{
		name: 'TailwindCSS',
		icon: Tailwind
	},
	{
		name: 'TypeScript',
		icon: Typescript
	}
]