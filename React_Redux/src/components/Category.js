import React, { Component } from 'react';
import LinkButton from './LinkButton';

class Category extends Component {

    handleRemoveCategory = () => {
        console.log("usuwam: "+this.props.category.id);
    }

    render() {
        return (
            <tr> 
                <td>{this.props.category.title}</td>
                <td> 
                    <LinkButton to={"/learn/"+this.props.category.id}>Start</LinkButton> 
                    <LinkButton to={"/flashcards/"+this.props.category.id}>Zarządzaj</LinkButton> 
                    <button onClick={this.handleRemoveCategory}>X</button> 
                </td>
            </tr>
        )
    }
}
export default Category;
