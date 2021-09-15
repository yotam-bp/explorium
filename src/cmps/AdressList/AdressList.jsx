import React from 'react'
import AdressPreview from '../AdressPreview/AdressPreview'
const AdressList = ({ csvFile }) => {
    return (
        <div className="adresses-table">
            <table className="table-base">
                <tbody>
                {csvFile.map((row, idx) => {
                    return <AdressPreview row={row} idx={idx}/>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default AdressList
