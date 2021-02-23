import React, { useEffect } from 'react';
import JoblyApi from './JoblyApi';
import { BrowserRouter } from 'react-router-dom';
import Routes from './Routes';



function App() {
  
  useEffect(() => {
    async function getCompany() {
      const res = await JoblyApi.getCompany("hall-davis")
      console.log(res);

    }
    getCompany();
  })

  useEffect(() => {
    async function getCompanies() {
      const res = await JoblyApi.getCompanies();
      console.log(res);

    }
    getCompanies();

  })

  useEffect(() => {
    async function getJob() {
      const res = await JoblyApi.getJob(7);
      console.log(res);
    }
    getJob();
  })

  useEffect(() => {
    async function getJobs() {
      const res = await JoblyApi.getJobs();
      console.log(res);
    }
    getJobs();
  })
  
  return (

    <BrowserRouter>
      <div className="App">
        {/* <Nav /> */}
        <Routes />
      </div>
    
    </BrowserRouter>
  );
}

export default App;
