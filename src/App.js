import { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";
import api from "./services/api";


const App = () => {
  const [input, setInput] = useState();
  const [zipCode, setZipCode] = useState({});

  const handleSearch = async (e) => {
    e.preventDefault();

    if (input === undefined) {
      alert('Please enter the zip code');
      return;
    }

    try {
      const response = await api.get(`${input}/json`);
      setZipCode(response.data);
      setInput('')
    } catch {
      alert('Zip code could not find')
      setInput('')
    }
  }

  return (
    <>
      <Form
        title={'Zip Code Finder'}
        inputTitle={'Type the Zip Code:'}
        inputValue={input}
        onChange={(e) => setInput(e.target.value)}
        onClick={handleSearch}
      />
      <Result
        code={zipCode.cep}
        address={`
      ${zipCode.logradouro},
      ${zipCode.bairro}, 
      ${zipCode.localidade}, 
      ${zipCode.uf}
      `}
      />
    </>
  );
}

export default App;
