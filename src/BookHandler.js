import React, { Component } from 'react'
import { Switch, Route, Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI';
import AddNewBook from './AddNewBook';
import BookList from './BookList';

class BookHandler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            currentlyReading: [],
            wantToRead: [],
            read: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.categorizeBooks = this.categorizeBooks.bind(this);
    }

    componentDidMount() {
        BooksAPI.getAll()
            .then((books) => {
                this.categorizeBooks(books)
                this.setState(() => ({
                    books
                }))
            })
    }

    categorizeBooks(books) {
        let cr = [];
        cr = books.filter((book) => (book.shelf === "currentlyReading"))
        this.setState({ currentlyReading: cr })
        let wtr = [];
        wtr = books.filter((book) => (book.shelf === "wantToRead"))
        this.setState({ wantToRead: wtr })
        let r = [];
        r = books.filter((book) => (book.shelf === "read"))
        this.setState({ read: r })
    }

    handleChange(toShelf, bookid) {
        var book = {};
        book.id = bookid;
        BooksAPI.update(book, toShelf)
            .then(() => {
                BooksAPI.getAll()
                    .then((books) => {
                        this.categorizeBooks(books)
                    })
            })
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/" render={() => (<BookList
                        currentlyReading={this.state.currentlyReading}
                        wantToRead={this.state.wantToRead}
                        read={this.state.read}
                        handleChange={this.handleChange}
                    />)} />
                    <Route path="/search" render={() => (<AddNewBook
                        handleChange={this.handleChange}
                        books={this.state.books}
                    />)} />
                </Switch>
                <Link
                    to='/search'>
                    <div className="open-search" >
                        <button />
                    </div>
                </Link>
            </div>
        );
    }
}

export default BookHandler

