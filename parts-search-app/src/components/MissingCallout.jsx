/**
 * This component will contain an image and a 2 column grid.
 * Column one will contain labels and column two will contain text boxes.
 */
import React, { useState } from 'react';
import './MissingCallout.css';


const MissingCallout = ({ partDetails }) => {
    const [missingPartCalloutID,setMissingPartCalloutID] = useState(null);
    const captureCoords = (id, event) => {
        const img = event.target;
        debugger
        const rect = img.getBoundingClientRect();
        const x = Math.floor(event.clientX - rect.left);
        const y = Math.floor(event.clientY - rect.top);
        console.log(`ID: ${id} is at position X: ${x}, Y: ${y}`);
        window.alert(`ID: ${id} is at position X: ${x}, Y: ${y}`);
        // Add your logic here to handle the coordinates
      };
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
            <div className= "tooltip">
                <img src={partDetails.image} className="part" name="canvasImage" alt="Placeholder"
                onClick={(e) => {console.log(e);captureCoords(missingPartCalloutID,e)}}
                onMouseOver={(e) => {e.target.alt=missingPartCalloutID}}/>
                <span className="tooltiptext">{missingPartCalloutID}</span>
            </div>
        </div>
        </div>
        
    );
}

export default MissingCallout;