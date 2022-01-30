import React, { useState } from 'react'
// @ts-ignore
import { classSelector } from './ClassSelector.ts'
// @ts-ignore
import useStyles from './Name.styles.tsx'
// @ts-ignore
import { Quote } from './Quote.tsx'

export const Name: React.FC = () => {
	const classes = useStyles()
	const [inputActive, setInputActive] = useState('')
	return (
		<div className='bg-primary-black flex mx-auto w-screen h-screen my-0'>
			<h2
				className={`${(inputActive === 'codeActive' ||
					inputActive === 'contactActive' ||
					inputActive === 'skillsActive') &&
					classes.hide} typewriter text-opacity-50 from-shade-darkest transition ease-in-out absolute text-primary-lightest top-20 cursor-pointer text-4xl w-max text-center top-0 mx-auto left-0 right-0 h-10 font-extrabold font-mono`}
				onClick={() => setInputActive('aboutActive')}
			>
				About
			</h2>
			<h2
				className={`${(inputActive === 'codeActive' ||
					inputActive === 'skillsActive' ||
					inputActive === 'aboutActive') &&
					classes.hide} typewriter text-opacity-50 from-shade-darkest transition ease-in-out text-primary-lightest cursor-pointer text-4xl w-max text-center mx-auto h-10 font-extrabold font-mono
				absolute top-0 bottom-0 my-auto right-20`}
				onClick={() => setInputActive('contactActive')}
			>
				Contact
			</h2>

			<h2
				className={`${(inputActive === 'codeActive' ||
					inputActive === 'contactActive' ||
					inputActive === 'aboutActive') &&
					classes.hide} typewriter text-opacity-50 from-shade-darkest transition ease-in-out absolute text-primary-lightest bottom-20 cursor-pointer text-4xl w-max text-center mx-auto left-0 right-0 h-10 font-extrabold font-mono`}
				onClick={() => setInputActive('skillsActive')}
			>
				skills
				<span></span>
			</h2>
			<div className='absolute bottom-0 left-0 right-0'></div>
			<h2
				className={`${(inputActive === 'skillsActive' ||
					inputActive === 'contactActive' ||
					inputActive === 'aboutActive') &&
					classes.hide} typewriter text-opacity-50 from-shade-darkest transition ease-in-out absolute text-primary-lightest top-0 bottom-0 cursor-pointer w-max text-center my-auto left-20 h-10 font-extrabold font-mono`}
				onClick={() => setInputActive('codeActive')}
			>
				Coding
			</h2>
			<div className='flex w-full h-full justify-center  items-center'>
				<div
					className={`${classes.nameElement} flex flex-col items-center font-bold text-3xl`}
				>
					<span
						className={`${classSelector(classes, inputActive, 'about')} mr-7`}
					>
						about
					</span>
					<div className='flex flex-row'>
						<span
							className={`${classSelector(classes, inputActive, '<')} pb-2`}
						>
							{'<'}
						</span>
						<span
							className={`${classSelector(
								classes,
								inputActive,
								'Robert'
							)} pb-2`}
						>
							Robert
						</span>
						<span
							className={`${classSelector(
								classes,
								inputActive,
								'RobertS'
							)} pb-2`}
						>
							s
						</span>
					</div>
					<div
						className={`${classSelector(
							classes,
							inputActive,
							'move'
						)} flex flex-row pl-64`}
					>
						<span
							className={`${classSelector(classes, inputActive, 'B')} pt-2`}
						>
							B
						</span>
						<span
							className={`${classSelector(classes, inputActive, 'La')} pt-2`}
						>
							La
						</span>
						<span
							className={`${classSelector(
								classes,
								inputActive,
								'ngerei'
							)} pt-2`}
						>
							ngerei
						</span>
						<span
							className={`${classSelector(
								classes,
								inputActive,
								'letterS'
							)} pt-2`}
						>
							s
						</span>
						<span
							className={`${classSelector(classes, inputActive, '/>')} pt-2`}
						>
							{'/>'}
						</span>
						<span
							className={`${classSelector(
								classes,
								inputActive,
								'skills'
							)} pt-2`}
						>
							kills
						</span>
					</div>
					<div className='flex flex-col w-full pt-2 pl-64'>
						<span
							className={`${classSelector(
								classes,
								inputActive,
								'BLa'
							)} transition delay-500 ease-in-out pt-2 pl-32`}
						>
							BLa
						</span>
						<span
							className={`${classSelector(
								classes,
								inputActive,
								'BLa'
							)} transition delay-700 ease-in-out pt-2 pl-64`}
						>
							BLa
						</span>
						<span
							className={`${classSelector(
								classes,
								inputActive,
								'BLa'
							)} transition delay-1000 ease-in-out pt-2 pl-96`}
						>
							BLa
						</span>
					</div>
					{inputActive && <Quote inputActive={inputActive} />}
				</div>
			</div>
		</div>
	)
}
