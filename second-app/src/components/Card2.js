import React, { Component } from "react";

class Card2 extends Component {
    render() {
        return (
            <div>
                <h4>{this.props.name}</h4>
                <h4>{this.props.email}</h4>
            </div>
        )
    }
}

export default Card2;