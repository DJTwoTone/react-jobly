import React, { useEffect } from 'react';
import JoblyApi from './JoblyApi';

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
    <div className="App">

    </div>
  );
}

export default App;
