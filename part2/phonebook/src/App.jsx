import { useState } from "react";
import { useEffect } from "react";
import numberService from "./services/numbers";
import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Numbers from "./components/Numbers";

const App = () => {
  const [allPersons, setAllPersons] = useState([]);
  const [filterStr, setFilterStr] = useState("");
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");

  useEffect(() => {
    numberService.getNumbers().then((data) => setAllPersons(data));
  }, []);

  const addNumber = (event) => {
    event.preventDefault();
    const existNumber = allPersons.find((person) => person.name === newName);
    if (
      existNumber &&
      !window.confirm(
        `${newName} is already added to phonebook, replace the old number with a new one?`
      )
    ) {
      return;
    }
    const newNumberObj = {
      name: newName,
      number: newNumber,
    };

    if (existNumber) {
      numberService.updateNumber(existNumber.id, newNumberObj).then((data) => {
        setAllPersons(
          allPersons.map((person) => (person.id !== data.id ? person : data))
        );
        setNewName("");
        setNewNumber("");
      });
    } else {
      numberService.addNumber(newNumberObj).then((data) => {
        setAllPersons(allPersons.concat(data));
        setNewName("");
        setNewNumber("");
      });
    }
  };

  const deleteNumber = (person) => {
    if (window.confirm(`delete ${person.name} ?`)) {
      numberService.deleteNumber(person.id).then((data) => {
        setAllPersons(allPersons.filter((person) => person.id !== data.id));
      });
    }
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
        addNumber={addNumber}
        newName={newName}
        newNumber={newNumber}
        setNewName={setNewName}
        setNewNumber={setNewNumber}
      />
      <h2>Numbers</h2>
      <Numbers shownPersons={shownPersons} deleteNumber={deleteNumber} />
    </div>
  );
};

export default App;
