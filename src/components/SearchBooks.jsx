import { Link } from 'react-router-dom';
import SearchBooksInput from './SearchBooksInput';
import SearchResults from './SearchResults';

const SearchBooks = ({ searchBooks, myBooks, onSearch, onResetSearch, onMove }) => {
  return (
    <div className="search-books">
      <div className="flex fex-row gap-2 mt-4 ml-2">
      
      <SearchBooksInput className="" onSearch={onSearch} />

        <Link to="/">
        <button type="button" className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Close</button>

        </Link>
        
      </div>
      <SearchResults searchBooks={searchBooks} myBooks={myBooks} onMove={onMove} />
    </div>

  );
};

export default SearchBooks;
