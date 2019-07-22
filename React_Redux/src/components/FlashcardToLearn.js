import React, { Component } from 'react';
import {connect} from 'react-redux';
import { getUnknownFlashcard } from '../actions/actionIndex';
import { postFlashcardToMarkedAsKnown } from '../actions/actionIndex';


class FlashcardToLearn extends Component {

    state = {
        isChecked: false,
    };

    componentDidMount = () => {
        this.props.onGetFlashcardToLearn(this.props.categoryId);
    }
    
    checkTranslate = () => {
        console.log('obecny id: '+this.props.flashcardToLearn.id)
        this.setState({isChecked: true})
    }
   
    nextFlash = () => {
        this.setState({isChecked: false});        
        this.props.onGetFlashcardToLearn(this.props.categoryId);
    }

    markedAsKnownAndNextFlash = () => {     
        this.props.onMarkedAsKnown(this.props.flashcardToLearn.id, 1);
        this.nextFlash();
    }

    renderWord = () => {
        let word;
        if (this.state.isChecked) {
            word = <p className='window'>{this.props.flashcardToLearn.answer}</p>
        } else {
            word = <p className='window'>{this.props.flashcardToLearn.question}</p>;
        }
        return word;
    }

    renderButton = () => {
        let buttonDiv;
        if (this.state.isChecked) {
            buttonDiv = <div>
                            <button className='half' onClick={this.markedAsKnownAndNextFlash}>Omijaj</button> 
                            <button  className='half' onClick={this.nextFlash}>Powtarzaj</button> 
                        </div>; 
        } else {
            buttonDiv = <div>
                            <button className='all' onClick={this.checkTranslate}>Sprawdź</button>
                        </div>;
        }
        return buttonDiv;
    }

    renderTitle = () => {
        let title;
        if (this.state.isChecked) {
            title = <p className='title'>Czy już znasz?</p>; 
        } else {
            title = <p className='title'>Przetłumacz</p>; 
        }
        return title;
    }

    render() {
        return(
            this.props.flashcardToLearn != null  && (
                <div>
                    {this.renderTitle()}
                    {this.renderWord()}
                    {this.renderButton()}
                </div>
            )
        ) 
    } 
}

function mapStateToProps(state) {
    return {
        flashcardToLearn: state.flashcardToLearn
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onGetFlashcardToLearn: categoryId => {
            dispatch(getUnknownFlashcard(categoryId));
        },
        onMarkedAsKnown: (flashcardId, known) => {
            dispatch(postFlashcardToMarkedAsKnown(flashcardId, known));
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(FlashcardToLearn);