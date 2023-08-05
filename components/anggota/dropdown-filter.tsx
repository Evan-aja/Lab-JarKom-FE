import React from 'react';
import Select from 'react-select';

const options = [
    { value: 'all', label: 'All Members' },
    { value: 'students', label: 'Students' },
    { value: 'lecturers', label: 'Lecturers' },
];

interface DropdownFilterProps {
    selectedOption: string;
    onFilterChange: (selectedValue: string) => void;
}

const DropdownFilter: React.FC<DropdownFilterProps> = ({ selectedOption, onFilterChange }) => {
    const handleChange = (selected: any) => {
        onFilterChange(selected.value);
    };

    const customStyles = {
        control: (provided: any) => ({
            ...provided,
            borderColor: 'gray',
            boxShadow: 'none',
        }),
        placeholder: (provided: any) => ({
            ...provided,
            color: 'gray',
        }),
    };

    const selectedValue = options.find((option) => option.value === selectedOption);

    return (
        <div className={'mb-14 w-full font-poppins'}>
            <Select
                className={'w-full'}
                options={options}
                value={selectedValue}
                onChange={handleChange}
                placeholder={selectedValue ? selectedValue.label : 'Select an option'}
                styles={customStyles}
            />
        </div>
    );
};

export default DropdownFilter;