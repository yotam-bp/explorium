import axios from 'axios';
import XMLParser from 'react-xml-parser';

export const getSchoolsData = async (bounding_box) => {
   try {
        const { data } = await axios.get(`http://www.overpass-api.de/api/xapi?*[amenity=school][bbox=${bounding_box.join(',')}]`);
        let xml =  new XMLParser().parseFromString(data); 
        console.log('got data',);
        return xml;
    } catch (error) {
        console.log(error);
    }
};



