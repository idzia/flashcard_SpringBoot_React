import React, { Component } from 'react';
import FlashcardsItem from './FlashcardsItem';
import FlashForm from './FlashForm';
import axios from 'axios';


class FlashTable extends Component {

    constructor(props) {
        super(props);
        this.state = {
            categoryId: this.props.categoryId,
            flashcardsList : []
        };
        
        this.removeFlashcard = this.removeFlashcard.bind(this);
    }

    componentDidMount = () => {
        this.getFlashcardList('/api/flashcards/'+this.state.categoryId)
    }

    getFlashcardList = (url) => {
        axios.get(url).then(response => {
            this.setState(
                {flashcardsList: response.data}
            );
        }, err => {
            alert("Server rejected response with: " + err);
          });
    }

    refreshFlashcard = () => {
        this.getFlashcardList('/api/flashcards/'+this.state.categoryId)
    }

    removeFlashcard(identifier) {
        // this.state.FlashcardsList.splice(this.state.FlashcardsList.findIndex(i => i.id === identyfikator),1)
        let filteredList = this.state.flashcardsList.filter(item => item.id !== identifier);
        this.setState({flashcardsList : filteredList });
    }

    render() {
        const renderList = this.state.flashcardsList;
        return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr>
                            <th>
                                PYTANIE 
                            </th>
                            <th>
                                ODPOWIEDZ
                            </th>
                            <th>
                                USUŃ
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.flashcardsList.length !== 0 && (
                                renderList.map(item => 
                            <FlashcardsItem categoryId={this.state.categoryId} callBack={this.refreshFlashcard} key={item.id} {...item} />)
                        )}
                    </tbody>
                </table>  
                <FlashForm categoryId={this.state.categoryId} callBack={this.refreshFlashcard} />      
            </React.Fragment>
       );
   } 
}
export default FlashTable;