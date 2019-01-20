import React, { Component } from 'react'
import BookHandler from './BookHandler'
import './App.css'

class App extends Component {
    render() {
        return (
            <div className="list-books">
                <BookHandler />
            </div>
        );
    }
}


export default App