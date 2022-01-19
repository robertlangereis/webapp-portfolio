import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
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
		marginLeft: '0px',
	},
	about: {
		marginLeft: '0px',
		color: '#000',
	},
	aboutElements: {
		transition: '1s linear',
		marginLeft: '5px',
		color: '#fff',
		textShadow: '0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff',
	},
	langereisElement: {
		transition: '1s linear',
		marginLeft: '0px',
		color: '#000',
	},
})

export default useStyles
