const Total = ({ parts }) => {
  const count = parts.reduce((acc, item) => acc + item.exercises, 0);
  return <p>Number of exercises {count}</p>;
};
export default Total;
