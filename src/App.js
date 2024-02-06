// src/App.js
import React from 'react';
import './App.css';
import MyComponent from './maps'; // Import your MyComponent
import YourComponent from './chatbot';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Basic React App</h1>
        <p>Edit src/App.js to make changes.</p>
        {/* Include the iframe */}
        <div className="iframe-container">
        <iframe
          title="Looker Dashboard"
          src="https://goreply.cloud.looker.com/embed/dashboards/24"
          width="800"
          height="600"
        ></iframe>
        </div>

        <div className="MyComponent-container">
        <MyComponent />          
        </div>
        <div className="search-bar-container">
        <YourComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
