import React, { useState } from 'react';
import './App.css';
import MissingCallout from './components/MissingCallout';

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [showMissingCallout, setShowMissingCallout] = useState(null);
  const [partDetails, setPartDetails] = useState(null);

  const handleSearch = async () => {
    // Replace with your actual API endpoint
    // const response = await fetch(`https://api.example.com/parts?search=${searchTerm}`);
    // const data = await response.json();
    const data = {
      name: 'Hood',
      image: require('./images/image.png'),
      missingCallouts: [5,4,7,10]
    }
    setPartDetails(data);
  };

  return (
    <div className="App">
      <header>
        <h1>Parts Search</h1>
      </header> 
      <div className='top-panel'>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Enter part name or number"
      />
      <button onClick={handleSearch}>Search</button>
      </div>
      <div className="two-panel"> 
        <div className="left-panel">
          {partDetails && (
            <div className="part-details">
              <h2>{partDetails.name}</h2>
              <img src={partDetails.image} alt={partDetails.name} onClick={() => setShowMissingCallout(partDetails)}/>
            </div>
          )}
        </div>
        <div className="right-panel">
          {showMissingCallout && <MissingCallout partDetails={showMissingCallout} />}
        </div>
      </div>
  </div>
  );
}


export default App;