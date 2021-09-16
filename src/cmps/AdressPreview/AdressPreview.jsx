import React, { useEffect, useState } from 'react'
import { getSchoolsData } from '../../api/OSMapi'

const AdressList = ({ row, idx }) => {

    const [schools, setSchools] = useState(null)


    useEffect(() => {
        
    }, []);

    const addSchools = async () => {
        let bounding_box = locationsToBoundingBox(row.data[12] , row.data[13])
          getSchoolsData(bounding_box)
          .then((data)=>{   
            console.log('res', data.children);
            setSchools(data.children)
        }).catch(err => alert('Error occurred, please try again'))
    }

    const locationsToBoundingBox = (latitude, longitude, padding = 0.01) => {
        let bounding_box = [null, null, null, null]
        bounding_box[0] = Math.min(bounding_box[0] || longitude, longitude) - padding
        bounding_box[1] = Math.min(bounding_box[1] || latitude, latitude) - padding
        bounding_box[2] = Math.max(bounding_box[2] || longitude, longitude) + padding
        bounding_box[3] = Math.max(bounding_box[3] || latitude, latitude) + padding
        console.log(bounding_box);
        return bounding_box
    }

    return (
        <tr className="data row" key={row.data}>
            {row.data.map((cell, i) => {
                return <td key={i}>{cell}</td>
            })}
            {(idx === 0) ? <td> number of schools </td> :
                <td>
                    {(schools) ?  schools.length : 
                        <button onClick={() => addSchools()}>more info</button>
                    }
                </td>}
        </tr>
    )
}

export default AdressList