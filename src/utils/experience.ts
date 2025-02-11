interface Experience {
	date: string
	title: string
	company: string
	description: string,
	tasks: string[]
}

export const experience: Experience[] = [
	{
		date: 'Agosto 2024 - Enero 2025',
		title: 'Analista programador y Líder de equipo de Frontend',
		company: 'RUWAY TECH',
		description: 'Frontend Developer | Angular | React ',
		tasks: [
			'Participé y lideré en el desarrollo de un sistema de control presupuestal para una empresa, utilizando Angular.',
			'Participé en el desarrollo de una aplicación web de programación de preguntas y respuestas para diferentes sucursales de una empresa de retail, utilizando React.'
		]
	},
	{
		date: 'Abril 2023 - Octubre 2023',
		title: 'Analista programador',
		company: 'CODIDEEP E.I.R.L.',
		description: 'Full Stack Developer | Laravel | PHP | MySQL | SQLServer | Angular | Ionic | Socket.io | Express | Node.js',
		tasks: [
			'Participé en el desarrollo de una aplicación móvil que conecta proveedores de servicios como gasfitería y electricidad con clientes según su ubicación, usando Laravel, MySQL, Angular e Ionic.',
			'Participé en la actualizacíón e implementación de nuevos módulos de un sistema de facturación electrónica, utilizando Laravel y MySQL.',
			'Implementé una aplicación móvil de mensajería instantánea para la empresa, utilizando Ionic y Socket.io.',
			'Participé en el desarrollo de un sistema de caja chica utilizando Laravel y MySQL.'
		]
	},
	{
		date: 'Noviembre 2022 - Marzo 2023',
		title: 'Practicante de Desarrollo Web',
		company: 'CODIDEEP E.I.R.L.',
		description: 'Full Stack Developer | Laravel | PHP | MySQL | SQL Server',
		tasks: [
			'Participé en el mantenimiento de un sistema de facturación electrónica, utilizando Laravel y MySQL.',
			'Participé en el mantenimiento de un sistema de control de inventarios, utilizando Laravel y MySQL.',
			'Participé en el desarrollo de una aplicación web de control del personal de la empresa, utilizando Laravel y SQL Server.'
		]
	}
]