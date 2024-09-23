import React from 'react'; 
import './EmployeeMgmt.css';
import { Link } from 'react-router-dom'; // Import Link for routing

const EmployeeMgmt = () => {
  return (
    <div className="employee-management">      
      {/* Main Content */}
      <div className="main-content">
        <div className='ems-desc'>
        <div>
        <h1 className='ems'>EMPLOYEE <br />MANAGEMENT <br />SYSTEM</h1>
        <hr />
        <p className='ems-sub'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        </div>
        <div>
          <img src="./src/assets/Images/landingVector.png" alt=".." />
        </div>
        </div>
        <div className="action-buttons">
          {/* Use Link component to route to ChooseRolePage */}
          <Link to="/choose-role">
            <button className="login-btn">LOGIN &gt; </button>
          </Link>
          <button className="signup-btn">SIGN UP &gt; </button>
        </div>
      </div>
    </div>
  );
};

export default EmployeeMgmt;
