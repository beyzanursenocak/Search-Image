import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID lZq37ZfWW85WDd9pz-Mv9o8k7vf-z9IYMOvmUe2Csd4'
        },
        params: {
            query: term
        }
    });

    return response.data.results;
}

export default searchImages;
