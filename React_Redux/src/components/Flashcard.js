import React, { Component } from 'react';

class Flashcard extends Component {
    
    handleRemoveFlashcard = () => {
        console.log("usuwam: ");
    }

    render() {
        return (
            <tr> 
               <td>{this.props.flashcard.question} </td>
               <td>{this.props.flashcard.answer} </td>
               <td><button onClick={this.handleRemoveFlashcard}>X</button> </td>
            </tr>
       );
   } 
}

export default Flashcard;