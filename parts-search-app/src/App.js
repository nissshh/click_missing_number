import React, { useState } from 'react';
import './App.css';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [partDetails, setPartDetails] = useState(
    {
      name: 'Part- 0003717618',
      image: require('./images/image.png'),
      missingCallouts: [5,4,7,10]
    }
  );
  const [missingPartCalloutID, setMissingPartCalloutID] = useState(null);

  const handleSearch = async () => {
    // Replace with your actual API endpoint
    const response = await fetch(`https://api.example.com/parts?search=${searchTerm}`);
    const data = await response.json();
    setPartDetails(data);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Parts Search</h1>
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Enter part name or number"
        />
        <button onClick={handleSearch}>Search</button>
        
      </header> 
      <div className="two-panel">
        <div className="left-panel">
          {partDetails && (
            <div className="part-details">
              <img src={partDetails.image} alt={partDetails.name} onClick={(e) => 
                {
                 console.log(e.target.src);
                 document.getElementsByName('canvasImage')[0].src = partDetails.image;
                }
              }/>
              <h2>{partDetails.name}</h2>
              <h3>Missing Callouts:</h3>
                {partDetails.missingCallouts.map((callout, index) => (
                <div key={index}>
                <input type="radio" id={`checkbox-${callout}`} onClick={() => setMissingPartCalloutID(callout)}/>     
                <label htmlFor={`checkbox-${callout}`}>{callout}</label>
              </div>
                ))}
            </div>
          )}
        </div>
        <div className="right-panel">
        <img name="canvasImage" alt="Placeholder" height="500px" width="500px"
        onClick={(e) => captureCoords(missingPartCalloutID,e.clientX, e.clientY)}/>
        </div>
      </div>
  </div>
  );
}

function captureCoords(id, x, y) {
  console.log(`ID: ${id} is at position X: ${x}, Y: ${y}`);
  window.alert(`ID: ${id} is at position X: ${x}, Y: ${y}`);
  // Add your logic here to handle the coordinates
}
export default App;