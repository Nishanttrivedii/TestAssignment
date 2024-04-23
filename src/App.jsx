import  { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'; // Import BrowserRouter and Routes
import * as BooksAPI from './api/mockData,js';
import './App.css';
import ListBooks from './components/ListBooks';
import SearchBooks from './components/SearchBooks';

const bookshelves = [
  { key: 'currentlyReading', name: 'Currently Reading' },
  { key: 'wantToRead', name: 'Want to Read' },
  { key: 'read', name: 'Read' }
];

function BooksApp() {
  const [myBooks, setMyBooks] = useState([]);
  const [searchBooks, setSearchBooks] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    BooksAPI.getAll()
      .then((books) => {
        setMyBooks(books);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  }, []);

  const moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        if (shelf === 'none') {
          setMyBooks((prevBooks) => prevBooks.filter((b) => b.id !== book.id));
        } else {
          book.shelf = shelf;
          setMyBooks((prevBooks) => [
            ...prevBooks.filter((b) => b.id !== book.id),
            book
          ]);
        }
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });
  };

  const searchForBooks = (query) => {
    if (query.length > 0) {
      BooksAPI.search(query)
        .then((books) => {
          if (books.error) {
            setSearchBooks([]);
          } else {
            setSearchBooks(books);
          }
        })
        .catch((err) => {
          console.log(err);
          setSearchBooks([]);
        });
    } else {
      setSearchBooks([]);
    }
  };

  const resetSearch = () => {
    setSearchBooks([]);
  };

  if (error) {
    return <div>Try again later.</div>;
  }

  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route
            exact
            path="/"
            element={<ListBooks bookshelves={bookshelves} books={myBooks} onMove={moveBook} />}
          />
          <Route
            path="/search"
            element={(
              <SearchBooks
                searchBooks={searchBooks}
                myBooks={myBooks}
                onSearch={searchForBooks}
                onMove={moveBook}
                onResetSearch={resetSearch}
              />
            )}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default BooksApp;
