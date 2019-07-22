import React, { Component } from 'react';
import axios from 'axios';


class CategoryForm extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            title : ""}
    }

    handleSubmit = (event) => {
        // console.log(this.props);
        event.preventDefault();
        let newCategory = {
            title: this.titleNode.value,
        };

        console.log(newCategory)
        axios.post('/api/categories', newCategory)
        .then(res => {this.props.callBack()})
        this.titleNode.value="";
    }

    handleChange = () => {
        this.setState({title : this.titleNode.value});
    }

    render() {
        const corectInput = this.state.title.length>1;
        return (
            <div>
                <form className="basicForm" onSubmit={this.handleSubmit}>
                <input type="text" onChange={this.handleChange} placeholder="New flashboard title:" ref={node => (this.titleNode = node)} />
                
                <button type="submit" disabled={!corectInput}>Add new flashboard</button>
                </form>
            </div>
        );
    }

} 

export default CategoryForm;