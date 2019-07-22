import React, { Component } from 'react';

import axios from 'axios';


class FlashToLearn extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flashcardToLearn : null,
            isChecked: false,
        };
    }

    componentDidMount() {
        console.log(this.props)
        this.getFlashcard('/api/learn/'+this.props.categoryId)
    }

    getFlashcard = (url) => {
        axios.get(url).then(response => {
            this.setState({
                flashcardToLearn: response.data,
            });
        })
    }
    
    checkTranslate = () => {
        this.setState({isChecked: true})
    }
   
    nextFlash = () => {
        this.setState({isChecked: false});
        this.getFlashcard('/api/learn/'+this.props.categoryId)
    }

    markedAsKnownAndNextFlash = () => {
        axios.post('/api/learn', {
            flashcardId : this.state.flashcardToLearn.id,
            know : 1
        })
        .then(response => {console.log(response.data)})
        this.nextFlash();
    }

    renderWord = () => {
        let word;
        if (this.state.isChecked) {
            word = <p>{this.state.flashcardToLearn.answer}</p>
        } else {
            word = <p>{this.state.flashcardToLearn.question}</p>;
        }
        return word;
    }

    renderButton = () => {
        let buttonDiv;
        if (this.state.isChecked) {
            buttonDiv = <div>
                            <button onClick={this.markedAsKnownAndNextFlash}>Znam, omijaj</button> 
                            <button onClick={this.nextFlash}>Powtarzaj</button> 
                        </div>; 
        } else {
            buttonDiv = <div>
                            <button onClick={this.checkTranslate}>Sprawdź</button>
                        </div>;
        }
        return buttonDiv;
    }

    renderTitle = () => {
        let title;
        if (this.state.isChecked) {
            title = <p>Czy już znasz?</p>; 
        } else {
            title = <p>Przetłumacz</p>; 
        }
        return title;
    }

    render() {
        return(
            this.state.flashcardToLearn != null  && (
                <div>
                    {this.renderTitle()}
                    {this.renderWord()}
                    {this.renderButton()}
                </div>
            )
        ) 
    } 
}
export default FlashToLearn;
