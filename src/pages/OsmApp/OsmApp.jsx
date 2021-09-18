import React, { useEffect, useState } from 'react'
import AddCsv from '../../cmps/AddCsv/AddCsv'
import AdressList from '../../cmps/AdressList/AdressList'
import Hero from '../../cmps/Hero/Hero'

const OsmApp = () => {

    const [csvFile, setCsvFile] = useState([]);

    useEffect(() => {
        setCsvFile(JSON.parse(localStorage.getItem('csvFile')));
    }, []);

    useEffect(() => {
        localStorage.setItem('csvFile', JSON.stringify(csvFile));
    }, [csvFile]);

    const handleOnDrop = (data) => {
        data.pop()
        setCsvFile(data)
    }

    const handleOnError = (err, file, inputElem, reason) => {
        console.log(err)
    }

    const handleOnRemoveFile = (data) => {
        setCsvFile(null)
    }

    return (
        <section className="app-container">
            <Hero />
            <AddCsv handleOnDrop={handleOnDrop} handleOnError={handleOnError} handleOnRemoveFile={handleOnRemoveFile} />
            {csvFile && <AdressList csvFile={csvFile} handleOnRemoveFile={handleOnRemoveFile} />}
        </section>
    )
}

export default OsmApp