# MyReads Project

This is the final assessment project for Udacity's React Fundamentals course.

## TL;DR 

To get started developing right away:

* install all project dependencies with `npm install`
* start the development server with `npm start`

## Included files
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md
├── package.json 
├── public
│   ├── favicon.ico 
│   └── index.html 
└── src 
    ├── App.css 
    ├── App.js 
    ├── App.test.js
    ├── BooksAPI.js
    ├── BookHandler.js
    ├── BookList.js
    ├── AddNewBook.js
    ├── Shelf.js
    ├── Book.js
    ├── icons 
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css
    └── index.js
```
## Backend Server

The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods needed to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). 


## Contributing

For details, check out [CONTRIBUTING.md](CONTRIBUTING.md).
