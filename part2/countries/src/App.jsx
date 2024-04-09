import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Countries from "./components/Countries";

function App() {
  const [search, setSearch] = useState("");
  const [countries, setCountries] = useState(null);
  const [searchCountries, setSearchCountries] = useState(null);

  useEffect(() => {
    axios
      .get(`https://studies.cs.helsinki.fi/restcountries/api/all`)
      .then((res) => {
        setCountries(res.data);
      });
  }, []);

  useEffect(() => {
    if (countries) {
      setSearchCountries(
        countries.filter((country) =>
          country.name.common.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, countries]);

  return (
    <>
      <div>
        find countries
        <input
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        ></input>
      </div>
      {search && <Countries countries={searchCountries} />}
    </>
  );
}

export default App;
