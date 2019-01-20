import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import Book from './Book';

class AddNewBook extends Component {
    constructor(props) {
        super(props);
        this.state = {
            booksDisplayed: []
        }
    }

    updateQuery = (query) => {
        BooksAPI.search(query).then(data => {
            if (data !== undefined && data.error !== "empty query") {
                this.setState({
                    booksDisplayed: data
                })
            } else {
                this.setState({
                    booksDisplayed: []
                })
            }
        })
    }

    shelfFinder(bookid) {
        let booksInShelf = this.props.books
        let booksInShelfIDs = []
        let shelf
        booksInShelf.forEach(book => booksInShelfIDs.push(book.id))
        let ind = booksInShelfIDs.indexOf(bookid)
        if (ind >= 0) {
            shelf = booksInShelf[ind].shelf
        }
        else shelf = 'none'
        return shelf;
    }

    url(book) {
        if (book.imageLinks !== undefined) {
            return book.imageLinks.thumbnail
        } else {
            return "http://books.google.com/books/content?id=NLK2AAAAIAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
        }
    }

    authors(book) {
        if (book.authors !== undefined) {
            return book.authors
        } else {
            return "not available"
        }
    }
    render() {
        return (
            <div>
                <div className='search-books-bar'>
                    <Link
                        className='close-search'
                        to='/'>Close
                    </Link>
                    <input
                        type='text'
                        placeholder='Search by title or author'
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                    />
                </div>
                <div className="search-books-results">
                    <ol className="books-grid">
                        {(this.state.booksDisplayed.length > 0) ?
                            this.state.booksDisplayed.map(book => (
                                <li key={book.id} >
                                    <Book bookid={book.id} URL={this.url(book)} bookTitle={book.title} bookAuthor={this.authors(book)} shelf={this.shelfFinder(book.id)} handleChange={this.props.handleChange} />
                                </li>
                            )) : <div></div>}
                    </ol>
                </div>
            </div>
        )
    }
}


export default AddNewBook;