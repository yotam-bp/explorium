import React, { useEffect, useState } from 'react'
import { getSchoolsData } from '../../api/OSMapi'

const AdressList = ({ row, idx }) => {

    const [schools, setSchools] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const addSchools = async () => {
        setIsLoading(true);
        let bounding_box = locationsToBoundingBox(row.data[12], row.data[13]);
        getSchoolsData(bounding_box)
            .then((data) => {
                setIsLoading(false);
                setSchools(data.children);
            }).catch(err => {
                setIsLoading(false);
                setError(error);
                alert('Error occurred, please try again')
            })
    }

    const locationsToBoundingBox = (latitude, longitude, padding = 0.01) => {
        let bounding_box = [null, null, null, null]
        bounding_box[0] = Math.min(bounding_box[0] || longitude, longitude) - padding
        bounding_box[1] = Math.min(bounding_box[1] || latitude, latitude) - padding
        bounding_box[2] = Math.max(bounding_box[2] || longitude, longitude) + padding
        bounding_box[3] = Math.max(bounding_box[3] || latitude, latitude) + padding
        return bounding_box
    }

    const getInfoBtn = () => {
        if (schools) return schools.length
        if (isLoading) return <p>Loading...</p>
        if (error) return <button className="more-info-btn" onClick={() => addSchools()}>more info</button>
        else return <button className="more-info-btn" onClick={() => addSchools()}>more info</button>
    }

    return (
        <tr className="data row" key={row.data}>
            {row.data.map((cell, i) => {
                return <td key={cell.id}>{cell}</td>
            })}
            {(idx === 0) ? <td> Schools </td> :
                <td>{getInfoBtn()}</td>}
        </tr>
    )
}

export default AdressList