import { useState, useEffect } from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import api from "./services/api";


const App = () => {
  const [input, setInput] = useState();

  const handleSearch = async (e) => {
    e.preventDefault();

    if (input === undefined) {
      alert('Please enter the zip code');
      return;
    }

    try {
      const response = await api.get(`${input}/json`)
      console.log(response)
    } catch {
      alert('Zip code could not find')
    }
  }
  // useEffect(() => {

  // });
  return (
    <>
      <Form
        title={'Zip Code Finder'}
        inputTitle={'Type the Zip Code:'}
        inputValue={input}
        onChange={(e) => setInput(e.target.value)}
        onClick={handleSearch}
      />
      <Result code={input} address={'Greenwich Village, New York, NY, USA'} />
    </>
  );
}

export default App;
