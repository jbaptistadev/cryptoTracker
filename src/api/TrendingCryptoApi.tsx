import axios from 'axios';

const baseURL = 'https://min-api.cryptocompare.com';

const TrendingCryptoApi = axios.create({baseURL});

export default TrendingCryptoApi;
