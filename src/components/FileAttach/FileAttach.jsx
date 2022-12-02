import React from 'react';

const FileAttach = (props) => {
    const {
        className = '',
        onChange,
        filename,

    } = props

    return (
        <input
            className={`${className} file-attach`}
            type="file"
            file={filename}
            onChange={onChange}
        />
    );
};

export default FileAttach;