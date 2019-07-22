import React, {Component} from 'react';
import {connect} from 'react-redux';
import { postNewFlashcard } from '../actions/actionIndex';

class FlashcardForm extends Component {

    state = {
        question : "",
        answer : ""
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAddFlashcard(this.props.categoryId, this.state);
        this.handleClear();
    }

    handleClear = () => {
        this.setState({
                    question : this.questionNode.value="", 
                    answer : this.answerNode.value=""})
    }

    handleChange = () => {
        this.setState({question : this.questionNode.value});
        this.setState({answer : this.answerNode.value});
    }

    render() {
        const corectInput = this.state.question.length>1 && this.state.answer.length>1;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
               
                    <input className="threeForm" type="text" onChange={this.handleChange} placeholder="Question..." ref={node => (this.questionNode = node)} />
                   
                    <input className="threeForm" type="text" onChange={this.handleChange} placeholder="Answer..." ref={node => (this.answerNode = node)} />
               
                <button className="buttonThreeForm" type="submit" disabled={!corectInput}>Add new</button>
                </form>
            </div>
        );
    }
} 

function mapDispatchToProps (dispatch) {
    return {
        onAddFlashcard: (categoryId, newFlashcard) => {
            dispatch(postNewFlashcard(categoryId, newFlashcard))
        }
    }
}

export default connect(null, mapDispatchToProps)(FlashcardForm);