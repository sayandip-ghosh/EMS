import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import React Router components
import EmployeeMgmt from './Components/Landing/EmployeeMgmt';
import ChooseRolePage from './Components/ChooseRole/ChooseRolePage'; // Adjust the path according to your project

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the Employee Management (Landing) page */}
        <Route path="/" element={<EmployeeMgmt />} />
        {/* Route for the Choose Role page */}
        <Route path="/choose-role" element={<ChooseRolePage />} />
      </Routes>
    </Router>
  );
}

export default App