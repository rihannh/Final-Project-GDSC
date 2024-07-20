import axios from 'axios';

const fetchKetoDietData = async (query) => {
    const options = {
        method: 'GET',
        url: 'https://keto-diet.p.rapidapi.com/',
        params: query ? { search: query } : {},
        headers: {
            'x-rapidapi-key': '62c290d52dmsh8be3fd7ab125354p138bb1jsn50d9da2ce981',
            'x-rapidapi-host': 'keto-diet.p.rapidapi.com'
        }
    };

    try {
        const response = await axios.request(options);
        // console.log('Response Data:', response.data); // Tambahkan ini
        return response.data;
    } catch (error) {
        console.error('Error fetching data:', error.response ? error.response.data : error.message);
        throw error;
    }
};

export default fetchKetoDietData;
