export const GameCategory = ({ name, onSelect, isSelected }) => {
  return (
    <div className={`category item ${isSelected ? 'active' : ''}`} onClick={onSelect}>
      <div className="content">
        <div className="header">{name}</div>
      </div>
    </div>
  );
};
