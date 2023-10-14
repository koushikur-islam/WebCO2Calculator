import axios from 'axios';

import { BASE_API_URL } from '../constants/appConstants';
export const calculateCarbonAsync = async (data: any) => {
    //const url = `${BASE_API_URL}/calculate/`;
    //return await axios.post('https://backend.websiteemissions.com/api/carbonCalculator/co2/calculateCarbonForSingleUrl', { url: data?.url })
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Content-Type': 'application/json',
        },
    };
    const url = "https://hwq5ugwm78.execute-api.us-east-1.amazonaws.com/prod/carbonapi?url=" + data?.url;

    return axios.get(url, config);
};