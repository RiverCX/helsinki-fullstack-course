import { useState } from "react";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Numbers from "./components/Numbers";

const App = () => {
  const [allPersons, setAllPersons] = useState([]);
  const [filterStr, setFilterStr] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  const addName = (event) => {
    event.preventDefault();
    if (allPersons.find((person) => person.name === newName)) {
      window.alert(`${newName} is already added to phonebook`);
      return;
    }
    setAllPersons(
      allPersons.concat({
        name: newName,
        number: newNumber,
        id: allPersons.length + 1,
      })
    );
    setNewName("");
    setNewNumber("");
  };

  const shownPersons = filterStr
    ? allPersons.filter((person) => person.name.includes(filterStr))
    : [...allPersons];

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filterStr={filterStr} setFilterStr={setFilterStr} />
      <h2>add a new</h2>
      <PersonForm
        addName={addName}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Numbers shownPersons={shownPersons} />
    </div>
  );
};

export default App;
