import axios from "axios";
const baseUrl = "/api/persons";

const getNumbers = () => axios.get(baseUrl).then((res) => res.data);

const addNumber = (newNumber) =>
  axios.post(baseUrl, newNumber).then((res) => res.data);

const updateNumber = (id, newNumber) =>
  axios.put(`${baseUrl}/${id}`, newNumber).then((res) => res.data);

const deleteNumber = (id) =>
  axios.delete(`${baseUrl}/${id}`).then((res) => res.data);

export default {
  getNumbers,
  addNumber,
  updateNumber,
  deleteNumber,
};
