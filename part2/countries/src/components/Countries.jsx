import Country from "./Country";

const Countries = ({ countries }) => {
  if (!countries || !countries.length) {
    return null;
  }
  if (countries.length > 10) {
    return <p>too many matches, specify another filter</p>;
  }
  if (countries.length <= 10 && countries.length > 1) {
    return countries.map((country) => (
      <div key={country.name.common}> {country.name.common}</div>
    ));
  }

  return <Country country={countries[0]} />;
};

export default Countries;
