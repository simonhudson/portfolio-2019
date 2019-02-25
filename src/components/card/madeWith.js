'use strict';

import React from 'react';

const MadeWith = props => {

	return (
		<ul className="card__made-with">
			{props.madeWith.map((item, index) => <li key={`made-with--${index}`}>{item}</li>)}
		</ul>
	);

};

export default MadeWith;
