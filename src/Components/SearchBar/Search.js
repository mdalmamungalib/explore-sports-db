import React from 'react';

const Search = ({ setSearch }) => {
    return (
        <div>
            <div className="form-control w-7/12 m-auto mt-5">
                <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search" className="input input-bordered" />
            </div>
        </div>
    );
};

export default Search;