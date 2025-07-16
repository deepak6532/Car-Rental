import React, { useState } from 'react';
import Sidebar from './Sidebar'


import HomePage from '../HomePage'
import Allusers from './Allusers';
import Cars from './Cars';
import Addcar from './Addcar';
import Bookcar from './Bookcar';



const Dashboard= () => {
  const [section, setSection] = useState('addClient');

  const renderSection = () => {

    if (section === '/cars') {
      return <Cars/>
    } else if (section === '/home') {
      return <HomePage/>
    }
    else if (section === '/alluser') {
      return <Allusers/>
    }
    else if (section === '/addcar') {
      return <Addcar/>
    }
    else if (section === '/bookingcar') {
      return <Bookcar/>
    }
    else {
      return <h1 className="text-2xl font-bold">Welcome</h1>;
    }
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar onSectionChange={setSection} />
      <main className="flex-1 p-8 bg-gray-100">
        {renderSection()}
      </main>
    </div>
  );
};

export default Dashboard;
