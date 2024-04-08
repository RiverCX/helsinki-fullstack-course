const Filter = ({ filterStr, setFilterStr }) => {
  return (
    <div>
      filter shown with:
      <input
        value={filterStr}
        onChange={(event) => setFilterStr(event.target.value)}
      />
    </div>
  );
};

export default Filter;
