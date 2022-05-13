import React from 'react';

export interface IconProps {
	fill?: string;
	filled?: boolean;
	size?: number;
	height?: number;
	width?: number;
	label?: string;
}


function Icon({src, width, height, size, ...props}: IconProps & { src: string }) {
	return (
		<img src={src} width={size || width || 24}
		     height={size || height || 24} {...props}/>
	);
}

export default Icon;