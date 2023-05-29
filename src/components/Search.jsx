import { useState } from 'react';
import { Input } from 'antd';

const Search = ({ onSearch }) => {
    const [value, setValue] = useState('');

    const handleSearch = () => {
        onSearch(value);
    };

    const handleInputChange = (event) => {
        setValue(event.target.value);
    };

    return (
        <Input.Search
            placeholder="Search movies"
            enterButton
            value={value}
            onChange={handleInputChange}
            onSearch={handleSearch}
        />
    );
};

export default Search;