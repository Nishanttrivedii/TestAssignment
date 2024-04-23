import Book from './Book';
const SearchResults = ({ searchBooks, myBooks, onMove }) => {
  const updatedBooks = searchBooks.map(book => {
    const matchedBook = myBooks.find(b => b.id === book.id);
    if (matchedBook) {
      book.shelf = matchedBook.shelf;
    }
    return book;
  });

  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {updatedBooks.map(book => (
          <Book
            key={book.id}
            book={book}
            shelf={book.shelf || 'none'}
            onMove={onMove}
          />
        ))}
      </ol>
    </div>
  );
};

export default SearchResults;
