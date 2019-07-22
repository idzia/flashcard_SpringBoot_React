import React, { Component } from 'react';
import CategoryManager from './CategoryManager';

class Home extends Component {

    render() {
        return (
            <div className="home">
                <CategoryManager/>
            </div>
       );
   } 
}
export default Home;