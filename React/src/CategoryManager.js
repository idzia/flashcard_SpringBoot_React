import React, { Component } from 'react';
import FlashCategory from './FlashCategory';
import CategoryForm from './CategoryForm';
import axios from 'axios';

class CategoryManager extends Component {

    constructor(props) {
        super(props);
        this.state = {
            flashCategoryList : []
        };
    }

    componentDidMount = () => {
        this.getFlashCategoryList('/api/categories')
    }

    getFlashCategoryList = (url) => {
        axios.get(url).then(response => {
            this.setState(
                {flashCategoryList: response.data}
            );
        }, err => {
            alert("Server rejected response with: " + err);
          });
    }

    refreshCategory = () => {
        this.getFlashCategoryList('/api/categories');
    }

    renderInfo = () => {
        return <tr><th>Nie masz żadnych zestawów fiszek.</th></tr>
         
    }

    render() {
        const renderList = this.state.flashCategoryList;
        return (
            <div>
             {/* <React.Fragment> */}
                <h2>Twoje zestawy fiszek. </h2>
                <table>
                
                    <thead>
                        <tr>
                            <th>
                                KATEGORIA
                            </th>
                            <th>
                                
                            </th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.flashCategoryList.length !== 0 ? 
                            renderList.map(item => <FlashCategory callBack={this.refreshCategory} key={item.id} {...item} />)
                            : this.renderInfo()
                        }
                    </tbody>
                </table>
                <CategoryForm callBack={this.refreshCategory} />
           
            {/* </React.Fragment> */}
            </div>
       );
   } 
}
export default CategoryManager;