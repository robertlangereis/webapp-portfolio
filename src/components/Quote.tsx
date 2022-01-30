import React from 'react'

export type QuoteProps = {
	inputActive: string
}

export const Quote: React.FC<QuoteProps> = ({ inputActive }) => {
	let quoteBlock
	switch (inputActive) {
		case 'codeActive':
			quoteBlock = '"the process or activity of writing computer programs"'
			break
		case 'skillsActive':
			quoteBlock = '"the ability to do something well; expertise"'
			break
		case 'aboutActive':
			quoteBlock = '"on the subject of; concerning"'
			break
		case 'contactActive':
			quoteBlock =
				'"communicate with someone, typically in order to give or receive information"'
			break
		default:
			break
	}
	return (
		<div className='typewriter pt-20'>
			<h3 className='overflow-hidden italic'> {quoteBlock}</h3>
		</div>
	)
}
