import React, { Component } from 'react';
import LinkButton from './LinkButton';
import axios from 'axios';


class FlashCategory extends Component {

    handleRemoveCategory = () => {
        axios.delete('/api/categories/'+this.props.id).then(res => {this.props.callBack()})
        
    }

    render() {
        return (
            <tr> 
               <td>{this.props.title} </td>
               <td>
                   <LinkButton to={"/learn/"+this.props.id}>Start</LinkButton> 
                   <LinkButton to={"/flashcards/"+this.props.id}>Zarządzaj</LinkButton> 
                   <button onClick={this.handleRemoveCategory}>X</button> 
                </td>
            </tr>
       );
   } 
   
}
export default FlashCategory;