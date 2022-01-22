import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
	hide: { color: '#000', transition: '1s linear' },
	hideInstant: { opacity: 0, color: '#000',  animation: `$fadeOut linear 0s`, },
	marginLeft: {marginLeft:'222px'},
	none: { display: 'none' },
	delayVisible: {
		opacity: 0,
		transitionDelay: '1000',
		animationDelay: '1000',
		display: 'none',
	},
	nameElement: {
		color: '#484848',
		fontSize: '50px',
		fontWeight: 'bold',
		fontFamily: 'monospace',
		letterSpacing: '7px',
		cursor: 'pointer',
	},
	spanElement: {
		transition: '1s linear',
	},
	about: {
		color: '#000',
	},
	skills: {
		transition: '1s linear',
		color: '#fff',
		textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff',
		animation: '$fadeIn linear 1s',
	},
	letterS: {
		transition: '1s ease-in-out',
		color: '#fff',
		textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff',
		animation: '$fadeIn linear 1s',
	},
	fadeOut: {
		color: '#484848',
		animation: `$fadeOut linear 1s`,
		opacity: 0,
	},
	'@keyframes fadeOut': {
		'0%': { opacity: 1 },
		'100%': { opacity: 0 },
	},
	fadeIn: {
		animation: `$fadeIn linear 1s`,
		opacity: 1,
	},
	BLa:{
		opacity: 1,
		animation: `$fadeIn linear 1s`,
		color: '#fff',
		textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff',
	},
	'@keyframes fadeIn': {
		'0%': { opacity: 0 },
		'25%': { opacity: 0.1 },
		'50%': { opacity: 0.4 },
		'100%': { opacity: 1 },
	},
	aboutElements: {
		transition: '1s linear',
		opacity: 1,
		display: 'block',
		color: '#fff',
		textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff',
	},
})

export default useStyles
