'use strict';

import React from 'react';
const kebabCase = require('lodash/kebabCase');
import image from './imgs/placeholder.jpg';

const Image = props => {
		
	return (
		<div className="card__image">
			<img alt={props.title} src={image} />
		</div>
	);

};

export default Image;
