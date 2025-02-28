/**
 * This component will contain an image and a 2 column grid.
 * Column one will contain labels and column two will contain text boxes.
 */
import React, { useState } from 'react';
// import './MissingCallout.css';


const MissingCallout = ({ partDetails }) => {
    const [missingPartCalloutID,setMissingPartCalloutID] = useState(null);
    return (
        <div className="missing-callout">
        <h3>Missing Callouts:</h3>
        {partDetails.missingCallouts.map((callout, index) => (
            <div key={index}>
            <input
                type="radio"
                id={`checkbox-${callout}`}
                onClick={() => setMissingPartCalloutID(callout)}
            />
            <label htmlFor={`checkbox-${callout}`}>{callout}</label>
            </div>
        ))}
        <div className="right-panel">
            <img src={partDetails.image} name="canvasImage" alt="Placeholder" height="500px" width="500px"
            onClick={(e) => captureCoords(missingPartCalloutID,e.clientX, e.clientY)}/>
        </div>
        </div>
        
    );
}
function captureCoords(id, x, y) {
    console.log(`ID: ${id} is at position X: ${x}, Y: ${y}`);
    window.alert(`ID: ${id} is at position X: ${x}, Y: ${y}`);
    // Add your logic here to handle the coordinates
  }
export default MissingCallout;