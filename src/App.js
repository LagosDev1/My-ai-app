import './App.css';
import { Configuration, OpenAIApi } from 'openai'
import OptionSelection from './components/OptionSelection';
import Translation from './components/Translation';
import { arrayItems } from './AIOptions';
import { useState } from 'react';


function App() {
  const configuration = new Configuration({
    apiKey: "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",
  });
  const openai = new OpenAIApi(configuration);
  const [option, setOption] = useState({});
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");

  const selectOption = (option) => {
    setOption(option);
  };

  const doStuff = async () => {
    let object = {...option, prompt: input};
    const response = await openai.createCompletion(object);
    setResult(response.data.choices[0].text);
  };


  console.log(option);

  return (
    <div className="App">
      {Object.values(option).length === 0 ? (
        <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />
      ) : (
        <Translation doStuff={doStuff} setInput={setInput} input={input} result={result} />
      )}
    </div>
  );
}

export default App;
