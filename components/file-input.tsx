import React from 'react';

const FileUpload: React.FC<{ onFileChange: (file: File) => void }> = ({ onFileChange }) => {
    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file = event.target.files[0];
            onFileChange(file);
        }
    };

    return (
        <input
            type="file"
            placeholder="You can't touch this"
            className="file-input file-input-bordered w-full max-w-xs"
            disabled={false}
            onChange={handleFileChange}
        />
    );
};

export default FileUpload;
