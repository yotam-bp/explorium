import React from 'react'
import { CSVReader } from 'react-papaparse'

const AddCsv = ({ handleOnDrop, handleOnError, handleOnRemoveFile }) => {

    return (
        <div className="add-file-box flex justify-center">

            <CSVReader 
                onDrop={handleOnDrop}
                onError={handleOnError}
                addRemoveButton
                removeButtonColor='#659cef'
                onRemoveFile={handleOnRemoveFile}
            >
                <span>Drop CSV file here or click to upload.</span>
            </CSVReader>
        </div>
    )


}

export default AddCsv