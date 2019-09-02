import React, { Component } from 'react';
import "./legs.css";

//legs same as head component
class Legs extends Component {

    constructor(props) {
        super(props);

        this.state = {
            legsClass: "legsOriginalState",
            i: 0
        }
    }

    //clicks don't loop through, both start from 0
    //working code but not supposed to directly mutate state?
    mouseClickLeft() {
        this.setState( { legsClass: "legsClass" + this.state.i-- } )
        if (this.state.i < 0) {
            this.setState( {i: 2 } )
        }
        console.log(this.state.i)
    }
    
    //working code but not supposed to directly mutate state?
    mouseClickRight() {
        this.setState( { legsClass: "legsClass" + this.state.i++ } )
        if (this.state.i === 3) {
            this.setState( {i: 0 } )
        }
        console.log(this.state.i)
    }


    render() {
        return(
            <div className="legsDiv">

                 <div className="buttonLeft"
                    onClick={() => { this.mouseClickLeft() }}>
                </div>
                
                <div id="legs" 
                    className={this.state.legsClass}>
                </div>

                <div className="buttonRight"
                    onClick={() => { this.mouseClickRight() }}>
                </div>
            </div>

        )
    }


};

export default Legs;