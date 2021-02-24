import React, { useState, useEffect } from 'react';
import JoblyApi from './JoblyApi';
import Search from './Search';
import CardList from './CardList'

function Jobs() {
    const [jobs, setJobs] = useState([])
    
    useEffect(() => {
        async function getJobs() {
            const res = await JoblyApi.getJobs();
            setJobs(res)
        }
        getJobs();
    }, [])

    async function handleSearch(search) {
        console.log(search);
        let gottenJobs = await JoblyApi.getJobs(search);
        setJobs(gottenJobs)
    }
    
    
    return (
        <div>
            <Search searchType='jobs' handleSearch={handleSearch}/>
            <CardList cardType='job' cards={jobs} />
        </div>
    )
}

export default Jobs;