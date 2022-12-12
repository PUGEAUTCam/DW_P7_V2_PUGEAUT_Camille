import React from 'react';
import { useState, useEffect } from 'react';
import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { searchUser } from '../../API';
import { useNavigate } from 'react-router-dom';


const SearchBar = () => {
    const navigate = useNavigate()
    const [search, setSearch] = useState('')
    const [data, setData] = useState([]);

    useEffect(() => {
        getSearch()
    }, [search]);

    const getSearch = () => {
        searchUser(search).then((res) => setData(res.data.result))
    }

    const handleSelect = (user) => {
        console.log(user);
        navigate(`/profile?id=${user._id}`)
    }

    const formatResult = (item) => {
        return (
            <div style={{ display: 'flex' }}>
                <span>{item.name + " "}</span>
                <span>{item.firstname}</span>
            </div>
        )
    }


    return (
        <div>
            <h2 style={{ margin: '53px -33px' }}>Tu recherches un de tes collègues ?</h2>

            <ReactSearchAutocomplete
                maxResults={500}
                items={data}
                fuseOptions={{ keys: ["name", "firstname"] }}
                onSearch={setSearch}
                onSelect={handleSelect}
                formatResult={formatResult}
                placeholder={"Nom / Prénom"}
                autoFocus
                styling={{
                    zIndex: 9999,
                    marginTop: 50,
                }}
            />
        </div>
    );
};

export default SearchBar;