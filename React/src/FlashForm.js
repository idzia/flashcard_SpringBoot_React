import React, { Component } from 'react';
import axios from 'axios';


class FlashForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            questionInit : "",
            answerInit : ""
            }
    }

    handleSubmit = (event) => {
        
        event.preventDefault();
        let question = this.questionNode.value;
        let answer = this.answerNode.value;
        let newFlash = {
            question: question,
            answer: answer
        };

        axios.post('/api/flashcards/'+this.props.categoryId, newFlash)
        .then(res => {this.props.callBack()})
        this.questionNode.value="";
        this.answerNode.value="";
    }

    handleChange = () => {
        this.setState({questionInit : this.questionNode.value});
        this.setState({answerInit : this.answerNode.value});
    }

    render() {
        const corectInput = this.state.questionInit.length>1 && this.state.answerInit.length>1;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
               
                    <input className="threeForm" type="text" onChange={this.handleChange} placeholder="Question..." ref={node => (this.questionNode = node)} />
                   
                    <input className="threeForm" type="text" onChange={this.handleChange} placeholder="Answer..." ref={node => (this.answerNode = node)} />
               
                <button className="buttonThreeForm" type="submit" disabled={!corectInput}>Add new word</button>
                </form>
            </div>
        );
    }
} 

export default FlashForm;