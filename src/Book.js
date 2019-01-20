import React, { Component } from 'react'

class Book extends Component {
    constructor(props) {
        super(props);
        this.handChange = this.handChange.bind(this);
    }

    handChange(event, book) {
        let toShelf = event.target.value
        this.props.handleChange(toShelf, book)
    }

    render() {
        const { bookid, URL, bookTitle, bookAuthor, shelf } = this.props
        return (
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{
                        width: 128, height: 193, backgroundImage: `url(${URL})`
                    }}>
                    </div>
                    <div className="book-shelf-changer">
                        <select ref="select" defaultValue={shelf} onChange={(e) => this.handChange(e, bookid)}>
                            <option value="move">Move to...</option>
                            <option value="currentlyReading">currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{bookTitle}</div>
                <div className="book-authors">{bookAuthor}</div>

            </div>
        );
    }

}

export default Book