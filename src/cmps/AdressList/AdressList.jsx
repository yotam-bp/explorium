import React from 'react'
import AdressPreview from '../AdressPreview/AdressPreview'

const AdressList = ({ csvFile,handleOnRemoveFile }) => {
    return (
        <div className="adresses-table">
            {csvFile&&
            <i className="fas fa-times-circle fs24 " onClick={() => handleOnRemoveFile()}></i>
            }
            <table className="table-base">
                <tbody>
                {csvFile.map((row, idx) => {
                    return <AdressPreview  row={row} idx={idx} key={row[idx]} handleOnRemoveFile={handleOnRemoveFile}/>
                })}
                </tbody>
            </table>
        </div>
    )
}

export default AdressList
