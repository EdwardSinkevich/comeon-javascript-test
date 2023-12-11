export const SearchInput = ({ onSearch }) => {
  return (
    <div className="search ui small icon input ">
      <input type="text" placeholder="Search Game" onInput={onSearch} />
      <i className="search icon" />
    </div>
  );
};
