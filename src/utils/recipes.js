import axios from 'axios';

const fetchKetoDietData = async (query) => {
    const options = {
        method: 'GET',
        url: 'https://keto-diet.p.rapidapi.com/',
        params: query? { search: query }: {},
        headers: {
            'x-rapidapi-key': 'a78153e874msh19c3c5930d54315p14b4f1jsne5e0984f317a',
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
