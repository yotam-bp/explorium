import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AddCsv from '../../cmps/AddCsv/AddCsv'
import AdressList from '../../cmps/AdressList/AdressList'

const OsmApp = () => {

    const [csvFile, setCsvFile] = useState(null)

    useEffect(() => {
        setCsvFile(JSON.parse(window.localStorage.getItem('csvFile')));
    }, []);
    
    // useEffect(() => {
    // }, [csvFile]);
    
    const handleOnDrop = (data) => {
        console.log(data);
        data.pop()
        setCsvFile(data)
        window.localStorage.setItem('csvFile', csvFile);
    }

    const handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
    }

    const handleOnRemoveFile = (data) => {
        setCsvFile(null)
    }
    // if(!csvFile) return
    return (
        <section className="app-container">
            <h2>main</h2>
            <AddCsv handleOnDrop={handleOnDrop} handleOnError={handleOnError} handleOnRemoveFile={handleOnRemoveFile}></AddCsv>
            {csvFile && <AdressList csvFile={csvFile} />}
        </section>
    )
}

export default OsmApp