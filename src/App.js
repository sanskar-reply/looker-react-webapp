// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My Basic React App</h1>
        <p>Edit src/App.js to make changes.</p>
        {/* Include the iframe */}
        <iframe
          title="Looker Dashboard"
          src="https://goreply.cloud.looker.com/embed/dashboards/24"
          width="800"
          height="600"
        ></iframe>
      </header>
    </div>
  );
}

export default App;