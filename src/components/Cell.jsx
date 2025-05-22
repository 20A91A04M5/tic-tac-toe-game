const Cell = ({ index, data, handleClick }) => (
  <div className="cell border" onClick={() => handleClick(index)}>
    <span className="emoji">{data?.emoji}</span>
  </div>
);
export default Cell