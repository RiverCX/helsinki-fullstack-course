const Numbers = ({ shownPersons, deleteNumber }) => {
  return (
    <>
      {shownPersons.map((person) => (
        <p key={person.id}>
          {person.name} {person.number}
          <button onClick={() => deleteNumber(person)}>delete</button>
        </p>
      ))}
    </>
  );
};
export default Numbers;
