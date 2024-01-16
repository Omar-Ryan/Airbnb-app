function SearchBar() {
  return (
    <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
      <input
        type="text"
        placeholder="start with search"
        className="text-sm text-gray-600 placeholder:text-gray-400 flex-grow pl-5 outline-none bg-transparent"
      />
    </div>
  );
}

export default SearchBar;
