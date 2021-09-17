import React from 'react'
import { CSVReader } from 'react-papaparse'

const AddCsv = ({ handleOnDrop, handleOnError, handleOnRemoveFile }) => {

    return (
        <div className="add-file-box flex justify-center">

            <CSVReader
                onDrop={handleOnDrop}
                onError={handleOnError}
                addRemoveButton
                
                // removeButtonColor='#659cef'
                onRemoveFile={handleOnRemoveFile}
                style={{
                    dropArea: {
                        borderColor: 'grey',
                        width: 400,
                        fontSize:20
                    },
                    dropAreaActive: {
                        borderColor: 'red',
                    },
                    dropFile: {
                        width: 300,
                        backgroundColor: '#efefef',
                    },
                    fileSizeInfo: {
                        backgroundColor: 'inherint',
                        lineHeight: 1,
                        fontSize: 16,
                        marginBottom: '0.5em',
                        padding: '0.3em',
                    },
                    fileNameInfo: {
                        backgroundColor: 'inherint',
                        // borderRadius: 3,
                        fontSize: 14,
                        lineHeight: 1,
                        padding: ' 0.2em',
                    },
                    removeButton: {
                        color: '#1c1a1de3',
                        
                    },
                    progressBar: {
                        backgroundColor: '#1c1a1de3',
                    },
                }}
            >
                <span>Drop CSV file here or click to upload.</span>
            </CSVReader>
        </div>
    )


}

export default AddCsv