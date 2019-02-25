'use strict';

import React, { Component } from 'react';
import Portfolio from '~/components/portfolio';
import SiteHeader from '~/components/site-header';
import '~/client/assets/css/App.css';

class App extends Component {

    constructor(props) {
		super(props);
	}

    componentDidMount() {
        
    }

    render() {
        return (
            <>
                <Portfolio />
            </>
        );
    }
}

export default App;
