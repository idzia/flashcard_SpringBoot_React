import React, { Component } from 'react';
import FlashToLearn from './FlashToLearn';
import LinkButton from './LinkButton';
import axios from 'axios';

class Learn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categoryId : this.props.match.params.id,
            flashcardsCategory : {},
        };
    }
    componentDidMount = () => {
        this.getFlashcardsCategory('/api/category/'+this.state.categoryId)
    }

    getFlashcardsCategory = (url) => {
        axios.get(url).then(response => {
            this.setState(
                {flashcardsCategory: response.data}
            );
        }, err => {
            alert("Server rejected response with: " + err);
          });
    }

      render() {
        return (
            <div className="learn">
                <LinkButton to="/">Home</LinkButton>
                <h3>Kategoria: {this.state.flashcardsCategory.title}
                </h3>
                <FlashToLearn categoryId={this.state.categoryId}/>       
            </div>
       );
   } 
}
export default Learn;