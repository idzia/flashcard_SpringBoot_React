import React, { Component } from 'react';
import FlashcardToLearn from './FlashcardToLearn'
import LinkButton from './LinkButton';

class Learn extends Component {

            // categoryId : this.props.match.params.id,
    
    // componentDidMount = () => {
    //     this.getFlashcardsCategory('/api/category/'+this.state.categoryId)
    // }

    render() {
        return (
            <div className="learn">
                <LinkButton className='homebuttonlearn' to="/">Home</LinkButton>
                {/* <h3>Kategoria: {this.state.flashcardsCategory.title}
                </h3> */}
                {/* <CategoryToLearn categoryId={this.props.match.params.id}/> */}
                <FlashcardToLearn categoryId={this.props.match.params.id}/>       
            </div>
       );
   } 
}
export default Learn;