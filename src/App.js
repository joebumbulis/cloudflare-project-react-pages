import React, { useState } from 'react';
import Button from './button';
import './styling/App.css';

function App() {
  const [displayText, setDisplayText] = useState(false);

  const textToDisplay = <div className="display-text">Right Meow!💥😸</div>;
  const bombButtonTitle = 'CLICK BUTTON 💣';

  return (
    <div className="App">
      <header className="App-header">
        <Button onClick={() => setDisplayText(true)} buttonTitle={bombButtonTitle} />
        {displayText && textToDisplay}

        <p />
      </header>
    </div>
  );
}

export default App;
