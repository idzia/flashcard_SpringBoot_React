import React, { Component } from 'react';
import CategoryList from '../containers/CategoryList';
import CreateCategory from '../containers/CreateCategory';

class Home extends Component {

    render() {
        return (
            <div className="home">
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
                    <CategoryList/>
                </table>
                <CreateCategory />
            </div>
       );
   } 
}
export default Home;