import React from 'react'
import { getSchoolsData } from '../../api/OSMapi'

const AdressList = ({ row, idx }) => {

    var bounding_box = [144.8951, -37.806999999999995, 144.9151, -37.787]
    

    const locationsToBoundingBox = (bounding_box) => {
        getSchoolsData(bounding_box)
    }

    // const locationsToBoundingBox = (latitude, longitude, padding = 0.01) => {
    //     let bounding_box = [null, null, null, null]
    //     bounding_box[0] = Math.min(bounding_box[0] || longitude, longitude) - padding
    //     bounding_box[1] = Math.min(bounding_box[1] || latitude, latitude) - padding
    //     bounding_box[2] = Math.max(bounding_box[2] || longitude, longitude) + padding
    //     bounding_box[3] = Math.max(bounding_box[3] || latitude, latitude) + padding
    //     console.log(bounding_box);
    //     return bounding_box
    // }

    return (
        <tr className="data row" key={row.data}>
            {row.data.map((cell, i) => {
                return (
                    <td key={i}>{cell}</td>
                )
            })}
            <td>
                {/* <button onClick={() => locationsToBoundingBox(row.data[12], row.data[13])}>more info</button> */}
                <button onClick={() => locationsToBoundingBox(bounding_box)}>more info</button>

            </td>
        </tr>
    )
}

export default AdressList