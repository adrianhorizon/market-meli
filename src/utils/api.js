import Axios from 'axios';

const BASE_API = 'https://ws-api-items.vercel.app/api/items';
//const BASE_API = 'http://localhost:3001/api/items';

class Api {
    searchProduct = async (type) => {
        const { data } = await Axios.get(`${BASE_API}?search=${type}`);
        return data;
    }

    productId = async (id) => {
        const { data } = await Axios.get(`${BASE_API}/${id}`);
        return data;
    }
}

export default new Api();

