import { useState } from "react";
const SearchBooksInput = ({ onSearch }) => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    const val = event.target.value;
    setValue(val);
    onSearch(val);
  };

  return (
   
      <form className=" max-w-xl py-2 px-6 rounded-full bg-gray-50 border flex focus-within:border-gray-300">
        <input
          value={value}
          onChange={handleChange}
          autoFocus
          type="text"
          placeholder="Search your Book"
          className="bg-transparent w-full focus:outline-none pr-4 font-semibold border-0 focus:ring-0 px-0 py-0"
          name="topic"
        />
       
      </form>
   
  );
};

export default SearchBooksInput;
