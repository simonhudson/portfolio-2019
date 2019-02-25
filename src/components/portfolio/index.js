'use strict';

import React from 'react';
import Card from '~/components/card';
import data from './data';

const Portfolio = props => {

	return (
		<div className="portfolio__wrap">
			{data.map((item, index) => <Card key={`card-${index}`} {...item} /> )}
		</div>
	);

};

export default Portfolio;
