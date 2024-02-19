import React from 'react';
import './App.css';
import MyComponent from './maps';
import YourComponent from './chatbot';
import DialogFlowMessenger from './mess'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Basic React App</h1>
        {/* Include the iframe */}
        <div className="iframe-container">
        <iframe
          title="Looker Dashboard"
          src="https://goreply.cloud.looker.com/embed/dashboards/49"
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
        <div className="dialog-flow-container">
        <DialogFlowMessenger />
        </div>
      </header>
    </div>
  );
}

export default App;
