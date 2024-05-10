import React from 'react'

const SearchControl = (props) => {
    const { query, setQuery, handleSearchClick } = props;

    const handleInputChange = (item, e) => {
        setQuery({
            ...query,
            ...{ [item]: e.target.value }
        });
    } 
    
    return (
        <div className="flex flex-wrap gap-4">
            <input
                className='p-2 outline-none border border-1 border-gray-400'
                placeholder='Title'
                onChange={(e) => handleInputChange('s', e)}
            />
            <input
                className='p-2 outline-none border border-1 border-gray-400'
                placeholder='Released Year'
                onChange={(e) => handleInputChange('y', e)}
            />
            <select
                className='p-2 outline-none border border-1 border-gray-400'
                placeholder='Released Year'
                onChange={(e) => handleInputChange('type', e)}
            >
                <option></option>
                <option>movie</option>
                <option>series</option>
                <option>episode</option>
            </select>
            <button 
                className='p-2 outline-none border border-1 border-gray-400 hover:bg-green-700 hover:text-white transition-all duration-100'
                onClick={handleSearchClick}
            >Search</button>
        </div>
    );
};

export default SearchControl
