import axios from 'axios';

import { BASE_API_URL } from '../constants/appConstants';
export const calculateCarbonAsync = async (data: any) => {
    //const url = `${BASE_API_URL}/calculate/`;
    return await axios.post('https://backend.websiteemissions.com/api/carbonCalculator/co2/calculateCarbonForSingleUrl', { url: data?.url })
};