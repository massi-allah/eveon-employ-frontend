import React, { useEffect, useState } from 'react';
import EmployeeList from './EmployeeList';



function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Welcome to the Employe Management System</h1>
      </header>
      <main>
        <EmployeeList />
      </main>

    </div>
  );
}

export default App