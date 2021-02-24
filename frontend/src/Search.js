import React, { useState } from 'react';

function Search({ searchType, handleSearch }) {
    const [search, setSearch] = useState({})

    function handleChange(e) {
        let {name, value} = e.target;
        if (name === 'hasEquity') {
            value = !value
        }
        setSearch(s => ({
            ...s,
            [name]: value
        }));
    }

    function handleSubmit(e) {
        e.preventDefault();
        handleSearch(search);
    }

    return (searchType === 'companies') ? (
        <div className='Search'>
            <form className='form-inline' onSubmit={handleSubmit}>
                <input 
                    className='form-control'
                    name='name'
                    placeholder="What Company Are You Looking For?"
                    value={search.name}
                    onChange={handleChange}
                />
                <input 
                    className='form-control'
                    name='minEmployees'
                    placeholder="How Small Can the Company Be?"
                    value={search.minEmployees}
                    onChange={handleChange}
                />
                <input 
                    className='form-control'
                    name='maxEmployees'
                    placeholder="How Big Can the Company Be?"
                    value={search.maxEmployees}
                    onChange={handleChange}
                />
                <button className='btn' type='submit'>SEARCH</button>
            </form>
        </div>
    ) : (
        <form className='form-inline' onSubmit={handleSubmit}>
        <input 
            className='form-control'
            name='title'
            placeholder="What Kind of Job Are You Looking For?"
            value={search.title}
            onChange={handleChange}
        />
        <input 
            className='form-control'
            name='minSalary'
            placeholder="How Little Can They Pay You?"
            value={search.minSalary}
            onChange={handleChange}
        />
        <input 
            className='form-control'
            type='checkbox'
            name='hasEquity'
            label='Equity Available'
            // this might need to change to 'checked'
            value={search.hasEquity}
            onChange={handleChange}
        />
        <label>Equity Available</label>
        <button className='btn' type='submit'>SEARCH</button>
    </form>
    )

}

export default Search;