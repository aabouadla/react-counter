import React, {Component} from 'react';

export default class Button extends Component{
    render(){
        return <button class={this.props.class} onClick={this.props.action}>{this.props.title}</button>;
    }
}