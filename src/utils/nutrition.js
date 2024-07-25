import axios from 'axios';

const fetchMyFitnessPalData = async (keyword) => {
  const options = {
    method: 'GET',
    url: 'https://myfitnesspal2.p.rapidapi.com/searchByKeyword',
    params: { keyword },
    headers: {
      'x-rapidapi-key': 'a78153e874msh19c3c5930d54315p14b4f1jsne5e0984f317a', // Ganti dengan API key Anda
      'x-rapidapi-host': 'myfitnesspal2.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error('Error fetching data from MyFitnessPal:', error);
    throw error;
  }
};

export default fetchMyFitnessPalData;
