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
                style={{
                    dropArea: {
                        borderColor: 'grey',
                        borderRadius: 10,
                    },
                    dropAreaActive: {
                        borderColor: 'red',
                    },
                    dropFile: {
                        width: 200,
                        height: 120,
                        background: '#e3e3e3',
                    },
                    fileSizeInfo: {
                        backgroundColor: 'inherint',
                        lineHeight: 1,
                        marginBottom: '0.5em',
                        padding: '0.3em',
                    },
                    fileNameInfo: {

                        backgroundColor: 'inherint',
                        borderRadius: 3,
                        fontSize: 14,
                        lineHeight: 1,
                        padding: ' 0.2em',
                    },
                    removeButton: {
                        backgroundColor: 'black',
                    },
                    progressBar: {
                        backgroundColor: 'black',
                    },
                }}
            >
                <span>Drop CSV file here or click to upload.</span>
            </CSVReader>
        </div>
    )


}

export default AddCsv