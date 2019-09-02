import React, { Component } from 'react';
import "./head.css";

//create a Head component
class Head extends Component {
    
    //define this.state for the headClass and i
    constructor(props) {
        super(props);

        this.state = {
            headClass: "headOriginalState",
            i: 0
        }
    }

    //clicks don't loop through, both start from 0
    //working code but not supposed to directly mutate state?
    //function for when you click the left arrow
    mouseClickLeft() {
        // change the class of the left button div after you click
        this.setState( { headClass: "headClass" + this.state.i-- } )
        //if the state increments below zero, send back to 2 since only have 3 classes (0,1,2)
        if (this.state.i < 0) {
            this.setState( {i: 2 } )
        }
        console.log(this.state.i)
    }
    
    //working code but not supposed to directly mutate state?
    //function for when you click the right arrow
    mouseClickRight() {
        // change the class of the left button div after you click
        this.setState( { headClass: "headClass" + this.state.i++ } )
        //if the state increments above three, send back to 0 since only have 3 classes (0,1,2
        if (this.state.i === 3) {
            this.setState( {i: 0 } )
        }
        console.log(this.state.i)
    }


    render() {
        return(
            <div className="headDiv">

                <div className="buttonLeft"
                    onClick={() => { this.mouseClickLeft() }}>
                </div>

                <div id="head"
                    className={this.state.headClass}>
                </div>

                <div className="buttonRight"
                    onClick={() => { this.mouseClickRight() }}>
                </div>

            </div>

        )
    }


};

export default Head;