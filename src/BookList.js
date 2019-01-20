import React, { Component } from 'react'
import Shelf from './Shelf'

class BookList extends Component {
    render() {
        return (
            <div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <Shelf title='Currently Reading' listOfBooks={this.props.currentlyReading} handleChange={this.props.handleChange} />
                        <Shelf title='Want to Read' listOfBooks={this.props.wantToRead} handleChange={this.props.handleChange} />
                        <Shelf title='Read' listOfBooks={this.props.read} handleChange={this.props.handleChange} />
                    </div>
                </div>
            </div>
        );
    }
}

export default BookList;


