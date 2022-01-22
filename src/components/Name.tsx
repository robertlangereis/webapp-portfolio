import React, { useState } from 'react'
// @ts-ignore
import useStyles from './Name.styles.tsx'

export const Name: React.FC = () => {
	const classes = useStyles()
	const [aboutActive, setAboutActive] = useState(false)
	const [skillsActive, setSkillsActive] = useState(false)
	const [codeActive, setCodeActive] = useState(false)
	const [contactActive, setContactActive] = useState(false)

	const classSelector = (element: string, elNum?: number): string => {
		const classNames = []
		switch (element) {
			case 'about':
				if (aboutActive) classNames.push(classes.aboutElements)
				else classNames.push(classes.about)
				break
			case 'Robert':
				if (aboutActive) classNames.push(classes.aboutElements)
				if (skillsActive) classNames.push(classes.skills)
				if (contactActive) classNames.push(classes.fadeOut, classes.hide)
				else classNames.push(classes.spanElement)
				break
			case 'letterS':
				if (aboutActive || contactActive) classNames.push(classes.hide)
				if (skillsActive) classNames.push(classes.skills)
				if (contactActive) classNames.push(classes.hide)
				else classNames.push(classes.spanElement, classes.fadeIn)
				break
			case 'RobertS':
				if (aboutActive) classNames.push(classes.hide)
				if (skillsActive) classNames.push(classes.skills, classes.fadeIn)
				else classNames.push(classes.hide)
				break
			case 'ngerei':
				if (aboutActive) classNames.push(classes.hide)
				if (skillsActive) classNames.push(classes.none)
				if (contactActive) classNames.push(classes.fadeOut, classes.hide)
				else classNames.push(classes.spanElement, classes.fadeIn)
				break
			case 'La':
				if (aboutActive) classNames.push(classes.hide)
				if (skillsActive) classNames.push(classes.none)
				if (contactActive)
					classNames.push(classes.fadeIn, classes.aboutElements)
				else classNames.push(classes.spanElement, classes.fadeIn)
				break
			case 'skills':
				if (skillsActive) classNames.push(classes.skills, classes.fadeIn)
				else classNames.push(classes.hideInstant)
				break
			case 'B':
				if (contactActive)
					classNames.push(classes.fadeIn, classes.aboutElements)
				else classNames.push(classes.hide)
				break
			case 'BLa':
				if (contactActive) classNames.push(classes.fadeIn)
				else classNames.push(classes.hide)
				break
			case 'move':
				if (skillsActive) classNames.push(classes.marginLeft)
				break
			case '<':
				if (codeActive) classNames.push(classes.fadeIn, classes.aboutElements)
				if (skillsActive) classNames.push(classes.hideInstant)
				else classNames.push(classes.hide)
				break
			case '/>':
				if (codeActive) classNames.push(classes.fadeIn, classes.aboutElements)
				if (skillsActive)
					classNames.push(classes.hideInstant) && classNames.push(classes.none)
				else classNames.push(classes.hide)
				break
			default:
				break
		}
		return classNames.join(' ')
	}
	return (
		<div className='bg-primary-black flex mx-auto w-screen h-screen my-0'>
			<button
				className='bg-white absolute top-0 w-1/12 mx-auto left-0 right-0 rounded-full h-10'
				onClick={() => setAboutActive(!aboutActive)}
			>
				About
			</button>
			<button
				className='bg-white absolute top-0 bottom-0 my-auto w-1/12 right-0 rounded-full h-10'
				onClick={() => setContactActive(!contactActive)}
			>
				Contact
			</button>

			<h2
				className={`${skillsActive &&
					classes.hide} arrow-down text-opacity-50 from-shade-darkest transition ease-in-out absolute text-primary-lightest bottom-20 cursor-pointer text-5xl w-max text-center mx-auto left-0 right-0 h-10 font-extrabold font-mono`}
				onClick={() => setSkillsActive(!skillsActive)}
			>
				skills
				<span></span>
				<span></span>
				<span></span>
			</h2>
			<div className='absolute bottom-0 left-0 right-0'></div>
			<button
				className='bg-white absolute top-0 bottom-0 my-auto w-1/12 left-0 rounded-full h-10'
				onClick={() => setCodeActive(!codeActive)}
			>
				Code
			</button>
			<div className='flex w-full h-full justify-center  items-center'>
				<div
					className={`${classes.nameElement} flex flex-col items-center font-bold text-3xl`}
				>
					<span className={`${classSelector('about')} mr-7`}>about</span>
					<div className='flex flex-row'>
						<span className={`${classSelector('<')} pb-2`}>{'<'}</span>
						<span className={`${classSelector('Robert')} pb-2`}>Robert</span>
						<span className={`${classSelector('RobertS')} pb-2`}>s</span>
					</div>
					<div className={`${classSelector('move')} flex flex-row pl-64`}>
						<span className={`${classSelector('B')} pt-2`}>B</span>
						<span className={`${classSelector('La')} pt-2`}>La</span>
						<span className={`${classSelector('ngerei')} pt-2`}>ngerei</span>
						<span className={`${classSelector('letterS')} pt-2`}>s</span>
						<span className={`${classSelector('/>')} pt-2`}>{'/>'}</span>
						<span className={`${classSelector('skills')} pt-2`}>kills</span>
					</div>
					<div className='flex flex-col w-full pt-2 pl-64'>
						<span
							className={`${classSelector(
								'BLa'
							)} transition delay-500 ease-in-out pt-2 pl-32`}
						>
							BLa
						</span>
						<span
							className={`${classSelector(
								'BLa'
							)} transition delay-700 ease-in-out pt-2 pl-64`}
						>
							BLa
						</span>
						<span
							className={`${classSelector(
								'BLa'
							)} transition delay-1000 ease-in-out pt-2 pl-96`}
						>
							BLa
						</span>
					</div>
				</div>
			</div>
		</div>
	)
}
