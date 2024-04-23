/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import Bookshelf from "./Bookshelf";
import Navbar from './Navbar';
const ListBooks = ({ bookshelves, books, onMove }) => {
  return (
    <div className="list-books">
      <Navbar />
      <div className="list-books-content">
        <div>
          {bookshelves.map((shelf) => (
            <Bookshelf key={shelf.key} shelf={shelf} books={books} onMove={onMove} />
          ))}
        </div>
      </div>
    
    </div>
  );
};

export default ListBooks;
