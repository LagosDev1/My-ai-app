import React from 'react';
import './translation.css';

function Translation({ doStuff, setInput, result }) {
  
  return (
    <div>
      <h1>ASK YOUR QUESTION</h1>
      <textarea className='text-area' 
      cols={30} 
      rows={(10)} 
      onChange={(e) => setInput(e.target.value)}>
      </textarea>
      <button className='action-btn' onClick={doStuff}>
       DO STUFF!
      </button>

        <h3 className='result-text'>{result.length > 0 ? result : ""}</h3>
    </div>
  )
}

export default Translation;
