import React, { useState } from 'react'
// @ts-ignore
import useStyles from './Name.styles.tsx'

export const Name: React.FC = () => {
	const classes = useStyles()
	const [aboutActive, setAboutActive] = useState(false)
	return (
		<div className='bg-primary-black flex mx-auto w-screen h-screen my-0 p-5'>
			<button
				className='bg-white relative top-0 left-1/2 w-1/12 rounded-full h-10'
				onClick={() => setAboutActive(!aboutActive)}
			>
				CLICK
			</button>
			<div className='flex w-full h-full justify-center  items-center'>
				<h1
					className={`${classes.nameElement} flex flex-col items-center font-bold text-3xl`}
				>
					<span
						className={`${
							aboutActive ? classes.aboutElements : classes.about
						} mr-7`}
					>
						about
					</span>
					<span
						className={`${
							aboutActive ? classes.aboutElements : classes.spanElement
						} pb-2`}
					>
						Robert
					</span>
					<span
						className={`${
							aboutActive ? classes.langereisElement : classes.spanElement
						} pt-2`}
					>
						Langereis
					</span>
				</h1>
			</div>
		</div>
	)
}
