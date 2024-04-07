const Total = ({ parts }) => {
  const count = parts.reduce((acc, item) => acc + item.exercises, 0);
  return <b>Number of exercises {count}</b>;
};

export default Total;
