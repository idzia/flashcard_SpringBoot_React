import React, { Component } from 'react';
import axios from 'axios';

class FlashcardsItem extends Component {
    
    handleRemoveFlashcardItem = () => {
        axios.delete('/api/flashcard/'+this.props.id).then(res => {this.props.callBack()})
    }

    render() {
        return (
            <tr> 
               <td>{this.props.question} </td>
               <td>{this.props.answer} </td>
               <td><button onClick={this.handleRemoveFlashcardItem}>X</button> </td>
            </tr>
       );
   } 
}

export default FlashcardsItem;