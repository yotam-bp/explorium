import axios from 'axios';


export const getSchoolsData = async (bounding_box) => {
   try {
        const { data } = await axios.get(`http://www.overpass-api.de/api/xapi?*[amenity=*][bbox=${bounding_box}]`, {
        });
        console.log('got data');
        return data;
    } catch (error) {
        console.log(error);
    }
};