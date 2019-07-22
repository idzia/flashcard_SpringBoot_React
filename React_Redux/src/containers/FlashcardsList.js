import React, {Component} from 'react';
import {connect} from 'react-redux';
import Flashcard from '../components/Flashcard';
import { getAllFlashcardsByCategoryId } from '../actions/actionIndex';

class FlashcardsList extends Component {  
    
    componentDidMount = () => {
        this.props.onGetFlashcardsById(this.props.categoryId);
    }
    render() {
        
        if(!this.props.flashcardList.length) {
            return (
                <tbody>
                    
                    <tr>
                        <td colSpan="2">
                            <h2>Ta kategoria nie ma żadnych fiszek</h2>
                        </td>
                    </tr>
                </tbody>
            )
        } 
        return (
            <tbody>
                {this.props.flashcardList.map(item => {
                    return (
                        <Flashcard categoryId={this.props.categoryId} flashcard={item} key={item.id}/>
                    )
                })}
            </tbody>
        
        )
    }
}

function mapStateToProps(state) {
    return {
        flashcardList: state.flashcardList
    }
}

function mapDispatchToProps (dispatch) {
    return {
        onGetFlashcardsById: categoryId => {
            dispatch(getAllFlashcardsByCategoryId(categoryId));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FlashcardsList);