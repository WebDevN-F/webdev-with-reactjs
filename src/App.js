import React from 'react';
import Header from './components/header';

function App() {
  return (
    <>
      <div className="container-sm main border border-primary border-3 rounded-3 mt-4">
        <Header title={`Task Tracker React v.${React.version}`}/>
        
        <footer className="d-flex justify-content-center mt-2">
          <p>React v. {React.version}</p>
        </footer>
      </div>
    </>
  );
}

export default App;
