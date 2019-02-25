'use strict';

import React, { Component } from 'react';
import Image from './image';
import MadeWith from './madeWith';
import Title from './title';
import './css/card.css';

class Card extends Component {

    constructor(props) {
		super(props);
        this.state = {};
        this.state.isSelected = false;
	}
    
    setSelectedState = () => {
        const currentState = this.state.isSelected;
        this.setState({ isSelected: !currentState });
    };

    render = () => {
        
        const { props, state } = this;
        
        return (
            <div className={`card__container card-is-selected--${state.isSelected}`} onClick={this.setSelectedState}>
                <div className="card">
                    <div className="card__front">
                        <Image {...props} />
                    </div>
                    <div className="card__back">
                        <Title {...props} />
                        <div className="card__content">
                            <MadeWith {...props} />
                        </div>
                    </div>
                </div>
            </div>
        )
        
        // return (
        //     <div className={`card card-is-selected--${state.isSelected}`} onClick={this.setSelectedState}>
        //         <Title {...props} />
        //         <div className="card__content">
        //             <MadeWith {...props} />
        //         </div>
        //     </div>
        // );
    }
}

export default Card;
