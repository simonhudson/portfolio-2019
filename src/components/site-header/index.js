'use strict';

import React, { Component } from 'react';
import SiteLogo from '~/components/site-logo';
import './css/site-header.css';

class SiteHeader extends Component {

	constructor(props) {
		super(props);
        this.state = {};
        this.state.isScrolled = false;
	}
	
	componentDidMount = () => {
	};
	
	render = () => {
		return (
			<div className="site-header">
				<SiteLogo />
			</div>
		);
	}

};

export default SiteHeader;
