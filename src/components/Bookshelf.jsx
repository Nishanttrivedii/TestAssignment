import React from "react";
import Book from "./Book";
const Bookshelf = ({ shelf, books, onMove }) => {
  const booksOnThisShelf = books.filter((book) => book.shelf === shelf.key);

  return (
    <div className="bookshelf">
      <div className="h-auto w-auto">
        <h2 className="text-4xl font-extrabold dark:text-white mb-2	">
          {shelf.name}
        </h2>
      </div>
      <div className="bookshelf-books">
        <ol className="flex flex-row gap-6 flex-wrap">
          {booksOnThisShelf.map((book) => (
            <Book key={book.id} book={book} shelf={shelf.key} onMove={onMove} />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Bookshelf;
