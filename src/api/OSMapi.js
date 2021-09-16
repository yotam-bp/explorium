import axios from 'axios';
import XMLParser from 'react-xml-parser';

export const getSchoolsData = async (bounding_box) => {
    console.log('back',bounding_box.join(','));
   try {
    
        const { data } = await axios.get(`http://www.overpass-api.de/api/xapi?*[amenity=cafe][bbox=${bounding_box.join(',')}]`);
        let xml =  new XMLParser().parseFromString(data); 
        console.log('got data',xml);
        return xml;
    } catch (error) {
        console.log(error);
    }
};

// export const getSchoolsData = async (bounding_box) => {

//     fetch(`http://www.overpass-api.de/api/xapi?*[amenity=school][bbox=${bounding_box}]`)
//     .then(res => res.text())
//     .then(data => {
//         let xml =  new XMLParser().parseFromString(data); 
//         console.log(xml)
  
//     })
//     .catch(err => console.log(err));
// }

