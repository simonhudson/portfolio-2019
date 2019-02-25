'use strict';

import React, { Component } from 'react';
import Link from './link';
import Image from './image';
import MadeWith from './madeWith';
import Title from './title';
import './css/card.css';

class Card extends Component {

    constructor(props) {
		super(props);
        this.state = {};
        this.state.isSelected = undefined;
	}
    
    setSelectedState = () => {
        const currentStateIsSelected = this.state.isSelected === true;
        this.setState({ isSelected: !currentStateIsSelected });
    };

    setClass = state => {
        const values = ['card'];
        if (state.isSelected !== undefined) values.push(`card-is-selected--${state.isSelected}`);
        return values.join(' ');
    };
    
    generateCopyMarkup = props => {
    	let paragraphs = [];
    	props.content.map((item, index) => paragraphs.push(`<p>${item}</p>`));
    	return paragraphs.join(' ');
    };

    render = () => {
        
        const { props, state } = this;
        
        return (
            <div className={this.setClass(state)} onClick={this.setSelectedState}>
                <div className="card__overlay"></div>
                <Image {...props} />
                <div className="card__content">
                    <Title {...props} />
                    <MadeWith {...props} />
                    <div dangerouslySetInnerHTML={{ __html: this.generateCopyMarkup(props) }}></div>
                    <div className="card__links">
                        <Link url={props.url} text="View project" />
                        <Link url={props.github} text="Github" />
                    </div>
                </div>
            </div>
        )
        
    }
}

export default Card;
