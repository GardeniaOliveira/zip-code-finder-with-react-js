import { useState } from "react";
import Form from "./components/Form";
import Result from "./components/Result";


const App = () => {
  const [input, setInput] = useState('90909090');
  return (
    <>
      <Form title={'Zip Code Finder'} inputTitle={'Type the Zip Code:'} inputValue={input} />
      <Result code={'4100000'} address={'Greenwich Village, New York, NY, USA'} />
    </>
  );
}

export default App;
