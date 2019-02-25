'use strict';

import React from 'react';
import ButtonLink from '../button-link';

const Link = props => {

	const { url, text } = props;
	
	if (!url || !text) return null;

	return (
		<ButtonLink {...props} />
	);

};

export default Link;
