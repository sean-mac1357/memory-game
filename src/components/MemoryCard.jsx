import React, { Component } from 'react';
import './MemoryCard.css'

class MemoryCard extends Component{
    constructor(props) {
        super(props);
        this.state = { 
            isFlipped: false 
        };
    }

    render() {
        let memoryCardInnerClass = "MemoryCardInner"
        if (this.state.isFlipped) {
            memoryCardInnerClass = "MemoryCardInner" + " " + "flipped"
        } 
        return(
            <div className="MemoryCard" onClick={this.clickHandler.bind(this)}>
                <div className={memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img className="DC-logo" src="https://www.digitalcrafts.com/img/digitalcrafts-logo-white-y.png" alt="DC Logo"></img>
                    </div>
                    <div className="MemoryCardFront">
                        ∆
                    </div>
                </div>
            </div>
            
        );
    }

    clickHandler() {
        this.setState({ 
            isFlipped: !this.state.isFlipped 
        });
    }
}


export default MemoryCard;