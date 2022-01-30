import { BaseCSSProperties } from '@mui/styles';

export interface StyleProps {
	hide: BaseCSSProperties
	hideInstant: BaseCSSProperties
	marginLeft: BaseCSSProperties
	none: BaseCSSProperties
	delayVisible: BaseCSSProperties
	nameElement: BaseCSSProperties
	spanElement: BaseCSSProperties
	about: BaseCSSProperties
	skills: BaseCSSProperties
	letterS: BaseCSSProperties
	fadeOut: BaseCSSProperties
	fadeIn: BaseCSSProperties
	BLa: BaseCSSProperties
	aboutElements: BaseCSSProperties
}
export type PropsClasses = Record<keyof StyleProps, string>