import React, { Component } from 'react';
import "./body.css";

//body same as head component
class Body extends Component {

    constructor(props) {
        super(props);

        this.state = {
            bodyClass: "bodyOriginalState",
            i: 0
        }
    }

    //clicks don't loop through, both start from 0
    //working code but not supposed to directly mutate state?
    mouseClickLeft() {
        this.setState( { bodyClass: "bodyClass" + this.state.i-- } )
        if (this.state.i < 0) {
            this.setState( {i: 2 } )
        }
        console.log(this.state.i)
    }
    
    //working code but not supposed to directly mutate state?
    mouseClickRight() {
        this.setState( { bodyClass: "bodyClass" + this.state.i++ } )
        if (this.state.i === 3) {
            this.setState( {i: 0 } )
        }
        console.log(this.state.i)
    }


    render() {
        return(
            <div className="bodyDiv">

                <div className="buttonLeft"
                    onClick={() => { this.mouseClickLeft() }}>
                </div>
                
                <div id="body" 
                    className={this.state.bodyClass}>
                </div>

                <div className="buttonRight"
                    onClick={() => { this.mouseClickRight() }}>
                </div>
            </div>

        )
    }


};

export default Body;