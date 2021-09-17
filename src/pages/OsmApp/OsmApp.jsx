import React, { useEffect, useState } from 'react'
import AddCsv from '../../cmps/AddCsv/AddCsv'
import AdressList from '../../cmps/AdressList/AdressList'
import Hero from '../../cmps/Hero/Hero'

const OsmApp = () => {

    const [csvFile, setCsvFile] = useState(null)

    useEffect(() => {
        console.log('use1')
        JSON.parse(localStorage.getItem('csvFile') );
    }, []);

    useEffect(() => {
        console.log('use2')
        localStorage.setItem('csvFile', JSON.stringify(csvFile));
    }, [csvFile]);
    
    const handleOnDrop = (data) => {
        
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
            <Hero/>
            <AddCsv handleOnDrop={handleOnDrop} handleOnError={handleOnError} handleOnRemoveFile={handleOnRemoveFile}/>
            {csvFile && <AdressList csvFile={csvFile} />}
        </section>
    )
}

export default OsmApp