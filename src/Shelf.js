import React, { Component } from 'react'
import Book from './Book'

class Shelf extends Component {
    render() {
        const shelfTitle = this.props.title
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{shelfTitle}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid">
                        {this.props.listOfBooks.map((book) => (
                            <li key={book.id} >
                                <Book bookid={book.id} URL={book.imageLinks.thumbnail} bookTitle={book.title} bookAuthor={book.authors} shelf={book.shelf} handleChange={this.props.handleChange} />
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        );
    }
}
export default Shelf