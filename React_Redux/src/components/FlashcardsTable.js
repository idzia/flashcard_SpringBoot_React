import React, { Component } from 'react';
import FlashcardsList from '../containers/FlashcardsList'
import FlashcardForm from './FlashcardForm';
import LinkButton from './LinkButton';

class FlashcardsTable extends Component {

    render() {
        return (
            <div className="flashcard">
                <LinkButton className='homebuttonflashcards' to="/">Home</LinkButton>
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
                    <FlashcardsList categoryId={this.props.match.params.id}/>
                </table>
                <FlashcardForm categoryId={this.props.match.params.id}/>
            </div>
        );
    }
}
export default FlashcardsTable;