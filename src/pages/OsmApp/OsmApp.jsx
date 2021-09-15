import React, { useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import AddCsv from '../../cmps/AddCsv/AddCsv'
import AdressList from '../../cmps/AdressList/AdressList'

const OsmApp = () => {

    const [csvFile, setCsvFile] = useState(null)

    // useEffect(() => {
    //     console.log(csvFile);
    //     if(!csvFile) return;
    //     console.log('im here');
    // }, []);

    const handleOnDrop = (data) => {
        console.log(data);
        setCsvFile(data)
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
            <div>hello</div>
            <AddCsv handleOnDrop={handleOnDrop} handleOnError={handleOnError} handleOnRemoveFile={handleOnRemoveFile}></AddCsv>
            {csvFile && <AdressList csvFile={csvFile} />}
        </section>
    )
}

export default OsmApp