import React from 'react';

interface SearchBarProps {
    onSearch: (searchValue: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        onSearch(event.target.value);
    };

    return (
        <input
            type="text"
            placeholder="Search by name..."
            onChange={handleChange}
            className="border border-gray-300 rounded px-4 py-2 w-full"
        />
    );
};

export default SearchBar;