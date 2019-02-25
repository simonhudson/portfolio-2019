'use strict';

import React from 'react';
import './css/button-link.css';

const ButtonLink = props => {

	const { newTab, text, url } = props

	return (
		<a className="btn" href={`${url}`} target="_blank">
			{text}
		</a>
	);

};

export default ButtonLink;
