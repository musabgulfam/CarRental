import { create } from 'apisauce';
import apiMonitor from './Monitor';
import { BASE_URL } from '../../config';

export const URIS = {
    signup: 'auth/signup/',
    login: 'auth/login/',
    cars: 'car/get-cars/',
    city: city => `dashboard/city-filter/?city=${city}`
};

const createApiClient = (baseURL = BASE_URL) => {
    const api = create({
        baseURL: BASE_URL,
        headers: {
            Accept: 'application/json',
            'Cache-Control': 'no-cache',
            'Content-Type': 'application/json',
        },
        timeout: 15000,
    });

    api.addMonitor(apiMonitor);

    const createUser = payload => {
        return api.post(URIS.signup, payload)
    };

    return {
        createUser
    };
};

export default { createApiClient };
