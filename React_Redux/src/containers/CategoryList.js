import React, {Component} from 'react';
import {connect} from 'react-redux';
import Category from '../components/Category';

class CategoryList extends Component {

    render() {
        const categoryList = this.props.categoryList;
        if(!categoryList.length) {
            return(
                <tbody>
                    <tr>
                        <td>
                            <h2>Nie masz żadnych zestawów fiszek</h2>
                        </td>
                    </tr>
                </tbody>
            )
        } return (
            <tbody>
                {categoryList.map(item => {
                    return (
                        <Category category={item} key={item.id}/>
                    )
                })}
            </tbody>
        );
    }   
}

function mapStateToProps(state) {
    return {
        categoryList: state.categoryList
    }
}

export default connect(mapStateToProps)(CategoryList);