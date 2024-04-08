const Numbers = ({ shownPersons }) => {
  return (
    <>
      {shownPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
        </p>
      ))}
    </>
  );
};
export default Numbers;
