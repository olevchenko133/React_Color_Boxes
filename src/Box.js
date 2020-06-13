import React, { Component } from 'react';
import "./Box.css";
import { choice } from "./helpers"


class Box extends Component {
    static defaultProps = {
        allColors: ["purple", "#D8278F", "#E052A5", "#FFC0CB" , "#B27883" ,"#CB8F9A", "#E5A7B2", "#FFC0CB", "#64ACA4", "#7DC4BD", "#95DED6", "#033736", "#056360", "#088E8B","#0ABAB5"]
    };
    constructor(props) {
        super(props);
        this.state = {
            color: choice(this.props.allColors)
        };
        this.handleClick = this.handleClick.bind(this);
    }
    pickColor(){
        let newColor; 
        do{
newColor = choice(this.props.allColors);
        } 
        while(newColor === this.state.color)
        this.setState({color : newColor})
    }
    handleClick() {
        this.pickColor();

    };
    render() {
        return (
            <div className="Box" style={{ backgroundColor: this.state.color }} onClick={this.handleClick}> </div>
        )
    }
}

export default Box;