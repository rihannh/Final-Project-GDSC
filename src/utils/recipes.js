import axios from 'axios';

const fetchKetoDietData = async (query) => {
    const options = {
        method: 'GET',
        url: 'https://keto-diet.p.rapidapi.com/',
        params: query ? { search: query } : {},
        headers: {
            'x-rapidapi-key': 'a9014de3famshadb6a8af64b1056p1d4a22jsnb8c4d3819a98',
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
