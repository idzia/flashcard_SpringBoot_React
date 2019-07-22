import React, {Component} from 'react';

class CategoryForm extends Component {
    state = {
        title:""
    }

    handleChange = () => {
        this.setState({title : this.titleNode.value});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.onAddCategory(this.state);
        this.handleClear();
    }
    
    handleClear = () => {
        this.titleNode.value="";
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
